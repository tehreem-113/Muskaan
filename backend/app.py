"""
Muskurahat — Flask backend with Real Gemini AI
==================================================
Serves on http://127.0.0.1:5000
"""

import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
from google import genai
from google.genai import types

app = Flask(__name__)
CORS(app)  # Allow the Vite dev server to call this API

# Initialize Gemini Client
try:
    client = genai.Client()
except Exception as e:
    client = None
    print("Warning: Gemini client could not initialize. Set your GEMINI_API_KEY environment variable.")

# System instructions to anchor the AI's identity as Muskurahat
SYSTEM_PROMPT = """
You are "Muskurahat" (meaning Smile), a friendly, empathetic digital oral health assistant dedicated to the Pakistani population. 
Your goal is to provide helpful, clear, and culturally conscious dental awareness. 

Rules:
1. Detect the user's language. If they ask in English, reply in clear English. If they ask in Urdu (or Roman Urdu), reply in Urdu. 
2. Keep answers short, welcoming, and easy to read for beginners. 
3. If asked about dangerous local habits (like chewing gutka, chaalia, or niswar), gently but directly advise against them with empathy. 
4. Always include a friendly reminder that while you provide educational advice, they should consult a PMDC-verified dentist for real diagnoses. 
5. NEVER mention your technical stack, programming, or that you are a language model. You are Muskurahat. 
"""

CLINICS = [
    {"id": 1, "name": "Smile Care Dental Clinic", "city": "Karachi", "area": "Clifton",
     "rating": 4.8, "pmdcVerified": True, "services": ["Scaling", "RCT", "Extraction", "Whitening"]},
    {"id": 2, "name": "Aga Khan Dental OPD", "city": "Karachi", "area": "Stadium Road",
     "rating": 4.9, "pmdcVerified": True, "services": ["RCT", "Braces", "Pediatric Dentistry"]},
    {"id": 3, "name": "Bright Smiles Lahore", "city": "Lahore", "area": "Gulberg",
     "rating": 4.6, "pmdcVerified": True, "services": ["Scaling", "Whitening", "Implants"]},
    {"id": 4, "name": "Gilgit Community Dental Camp", "city": "Gilgit-Baltistan", "area": "Gilgit City",
     "rating": 4.7, "pmdcVerified": True, "services": ["Free Checkups", "Extraction", "Awareness Sessions"]},
]

APPOINTMENTS = []

@app.get("/api/health")
def health():
    return jsonify({"status": "ok", "service": "muskurahat-backend", "time": datetime.utcnow().isoformat()})

@app.get("/api/clinics")
def get_clinics():
    city = request.args.get("city")
    service = request.args.get("service", "").lower()
    verified_only = request.args.get("verified_only", "false").lower() == "true"

    results = CLINICS
    if city and city != "All Cities":
        results = [c for c in results if c["city"] == city]
    if service:
        results = [c for c in results if any(service in s.lower() for s in c["services"])]
    if verified_only:
        results = [c for c in results if c["pmdcVerified"]]

    return jsonify(results)

@app.post("/api/appointments")
def create_appointment():
    data = request.get_json(force=True) or {}
    required = ["name", "phone", "clinicId", "date", "time"]
    missing = [f for f in required if not data.get(f)]
    if missing:
        return jsonify({"error": f"Missing fields: {', '.join(missing)}"}), 400

    appointment = {
        "id": len(APPOINTMENTS) + 1,
        "status": "requested",
        "createdAt": datetime.utcnow().isoformat(),
        **data,
    }
    APPOINTMENTS.append(appointment)
    return jsonify(appointment), 201

@app.get("/api/appointments/<int:appointment_id>")
def get_appointment(appointment_id):
    appt = next((a for a in APPOINTMENTS if a["id"] == appointment_id), None)
    if not appt:
        return jsonify({"error": "Not found"}), 404
    return jsonify(appt)

@app.post("/api/chat")
def chat():
    global client
    data = request.get_json(force=True) or {}
    user_message = data.get('message', '').strip()
    
    if not user_message:
        return jsonify({"reply": "I didn't catch that. Could you please ask a question?"}), 400

    if not client and not os.environ.get("GEMINI_API_KEY"):
        return jsonify({
            "reply": "⚠️ Gemini API Key is missing on the server!"
        })

    try:
        # Request live generation using the current standard active model
        response = client.models.generate_content(
            model='gemini-3.5-flash', 
            contents=user_message,
            config=types.GenerateContentConfig(
                system_instruction=SYSTEM_PROMPT,
                max_output_tokens=1000,
                temperature=0.7
            )
        )
        return jsonify({"reply": response.text})
        
    except Exception as e:
        print("\n!!! GEMINI API CRASH ERROR LOG !!!")
        print(f"Error Details: {str(e)}")
        print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n")
        return jsonify({"reply": f"Internal Server Error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)