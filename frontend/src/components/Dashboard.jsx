import React, { useState, useEffect, useRef } from 'react'
import BrushingTimer from './BrushingTimer'
import { SectionHeading } from './FeaturesGrid'

// ---------------------------------------------------------------------------
// Small localStorage helpers — everything in this file is saved in the
// browser so it survives refreshes/closing the tab. No backend needed.
// ---------------------------------------------------------------------------

const TOOTHBRUSH_KEY = 'muskurahat_toothbrush_date'
const BRUSH_LOG_KEY = 'muskurahat_brush_log' // { 'YYYY-MM-DD': true/false }
const REMINDERS_KEY_PREFIX = 'muskurahat_reminders_' // + today's date
const RECORDS_KEY = 'muskurahat_dental_records'

// Browsers cap localStorage around ~5MB per site, shared across everything
// this app saves. Keep attachments small so a couple of records don't fill
// that quota and start silently failing to save.
const MAX_FILE_SIZE_BYTES = 3 * 1024 * 1024 // 3MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'application/pdf']
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.pdf']

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

function isoDaysAgo(n) {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return d.toISOString().slice(0, 10)
}

function addDaysISO(iso, n) {
  const d = new Date(iso)
  d.setDate(d.getDate() + n)
  return d.toISOString().slice(0, 10)
}

function diffInDays(fromISO, toISO) {
  return Math.round((new Date(toISO) - new Date(fromISO)) / 86400000)
}

function formatDisplayDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

// Returns true on success, false if storage failed (e.g. quota exceeded by
// a large attached file) — callers use this to show a warning instead of
// silently losing data.
function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

// Reads a File object into a base64 data URL so it can be embedded directly
// in the JSON we save to localStorage (there's no backend/file server here).
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}

// ---------------------------------------------------------------------------
// Dashboard owns the state that's SHARED between the Reminders card and the
// Streak card, and passes it down as props. A single source of truth in the
// parent keeps the two widgets from ever disagreeing with each other.
// ---------------------------------------------------------------------------
export default function Dashboard({ lang }) {
  const today = todayISO()
  const remindersKey = REMINDERS_KEY_PREFIX + today

  const [reminders, setReminders] = useState(() => loadJSON(remindersKey, {}))
  const [brushLog, setBrushLog] = useState(() => loadJSON(BRUSH_LOG_KEY, {}))

  // Whenever today's checklist changes, save it AND recompute whether today
  // counts as a completed day in the streak (both brushes checked).
  useEffect(() => {
    saveJSON(remindersKey, reminders)
    setBrushLog((prev) => ({ ...prev, [today]: !!(reminders.morning && reminders.night) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reminders])

  // Whenever the streak log changes (including a direct click on a day dot),
  // save it to storage.
  useEffect(() => {
    saveJSON(BRUSH_LOG_KEY, brushLog)
  }, [brushLog])

  return (
    <section id="tools" className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <SectionHeading
        eyebrow="Interactive Tools"
        titleEn="Your daily oral hygiene dashboard"
        titleUr="آپ کا روزانہ کا ڈیش بورڈ"
        lang={lang}
      />

      <div className="mt-12 grid lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-1">
          <BrushingTimer />
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          <ToothbrushReminderCard />
          <DigitalRecordsCard />
          <CareReminderCard reminders={reminders} setReminders={setReminders} />
          <StreakCard
            brushLog={brushLog}
            setBrushLog={setBrushLog}
            setReminders={setReminders}
            today={today}
          />
        </div>
      </div>
    </section>
  )
}

function CardShell({ children, className = '' }) {
  return (
    <div className={`bg-cream border border-lilac rounded-3xl p-6 flex flex-col ${className}`}>
      {children}
    </div>
  )
}

// ---------------------------------------------------------------------------
// 1) Toothbrush reminder — pick the date you got your brush, and it
//    calculates + remembers the 3-month replacement date automatically.
// ---------------------------------------------------------------------------
function ToothbrushReminderCard() {
  const CYCLE_DAYS = 90

  const [brushDate, setBrushDate] = useState(() => loadJSON(TOOTHBRUSH_KEY, isoDaysAgo(14)))

  useEffect(() => {
    saveJSON(TOOTHBRUSH_KEY, brushDate)
  }, [brushDate])

  const today = todayISO()
  const daysUsed = Math.max(0, diffInDays(brushDate, today))
  const daysLeft = CYCLE_DAYS - daysUsed
  const pct = Math.min(100, Math.round((daysUsed / CYCLE_DAYS) * 100))
  const overdue = daysLeft <= 0
  const replaceDate = addDaysISO(brushDate, CYCLE_DAYS)

  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <span className="text-2xl">🪥</span>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${overdue ? 'bg-navy text-cream' : 'bg-lilac/60 text-navy'}`}>
          {overdue ? 'Replace now!' : `${daysLeft} days left`}
        </span>
      </div>

      <h3 className="font-display font-600 text-navy mt-4">Toothbrush Reminder</h3>
      <p className="text-sm text-navy/60 mt-1">
        Replace your toothbrush every 3 months, or sooner if bristles are frayed.
      </p>

      <label className="block mt-4">
        <span className="text-xs font-semibold text-navy/70 mb-1 block">When did you get this toothbrush?</span>
        <input
          type="date"
          value={brushDate}
          max={today}
          onChange={(e) => setBrushDate(e.target.value)}
          className="w-full bg-lilac/20 focus:bg-lilac/40 rounded-xl px-3 py-2 text-sm text-navy outline-none border border-lilac"
        />
      </label>

      <div className="mt-4 h-2 rounded-full bg-lilac/50 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${overdue ? 'bg-navy' : 'bg-dusty'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-navy/40 mt-2">
        {daysUsed} of {CYCLE_DAYS} days used · reminder on {formatDisplayDate(replaceDate)}
      </p>
    </CardShell>
  )
}

// ---------------------------------------------------------------------------
// 2) Digital dental records — "+ Add a record" form now accepts an optional
//    JPG/JPEG/PDF attachment. The file is embedded as a base64 data URL and
//    saved alongside the record in localStorage, so it persists across
//    refreshes on the same browser (there's no real file server/backend).
// ---------------------------------------------------------------------------
const DEFAULT_RECORDS = [
  { id: 1, label: 'Scaling & Polishing', date: '2026-03-10', fileName: null, fileType: null, fileDataUrl: null },
  { id: 2, label: 'X-Ray (Panoramic)', date: '2026-01-15', fileName: null, fileType: null, fileDataUrl: null },
  { id: 3, label: 'Filling — Lower Left Molar', date: '2025-10-02', fileName: null, fileType: null, fileDataUrl: null },
]

function DigitalRecordsCard() {
  const [records, setRecords] = useState(() => loadJSON(RECORDS_KEY, DEFAULT_RECORDS))
  const [showForm, setShowForm] = useState(false)
  const [newLabel, setNewLabel] = useState('')
  const [newDate, setNewDate] = useState(todayISO())
  const [pendingFile, setPendingFile] = useState(null) // { name, type, dataUrl, size }
  const [fileError, setFileError] = useState('')
  const [saveWarning, setSaveWarning] = useState('')
  const fileInputRef = useRef(null)

  useEffect(() => {
    const ok = saveJSON(RECORDS_KEY, records)
    setSaveWarning(ok ? '' : "Couldn't save — your attached files may be too large for browser storage.")
  }, [records])

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0]
    setFileError('')
    if (!file) {
      setPendingFile(null)
      return
    }

    const extensionOk = ALLOWED_EXTENSIONS.some((ext) => file.name.toLowerCase().endsWith(ext))
    const typeOk = ALLOWED_FILE_TYPES.includes(file.type)
    if (!extensionOk && !typeOk) {
      setFileError('Please choose a JPG, JPEG, or PDF file.')
      setPendingFile(null)
      e.target.value = ''
      return
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setFileError(`That file is ${formatFileSize(file.size)} — please choose one under ${formatFileSize(MAX_FILE_SIZE_BYTES)}.`)
      setPendingFile(null)
      e.target.value = ''
      return
    }

    try {
      const dataUrl = await readFileAsDataURL(file)
      setPendingFile({ name: file.name, type: file.type, dataUrl, size: file.size })
    } catch {
      setFileError('Could not read that file — please try again.')
      setPendingFile(null)
    }
  }

  const addRecord = (e) => {
    e.preventDefault()
    if (!newLabel.trim()) return

    const record = {
      id: Date.now(),
      label: newLabel.trim(),
      date: newDate,
      fileName: pendingFile?.name ?? null,
      fileType: pendingFile?.type ?? null,
      fileDataUrl: pendingFile?.dataUrl ?? null,
    }
    setRecords((prev) => [record, ...prev])

    setNewLabel('')
    setNewDate(todayISO())
    setPendingFile(null)
    setFileError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
    setShowForm(false)
  }

  const removeRecord = (id) => {
    setRecords((prev) => prev.filter((r) => r.id !== id))
  }

  const cancelForm = () => {
    setShowForm(false)
    setNewLabel('')
    setPendingFile(null)
    setFileError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <span className="text-2xl">🗂️</span>
        <span className="text-xs font-semibold bg-lilac/60 text-navy px-3 py-1 rounded-full">
          {records.length} record{records.length === 1 ? '' : 's'}
        </span>
      </div>
      <h3 className="font-display font-600 text-navy mt-4">Digital Dental Records</h3>

      {saveWarning && (
        <p className="text-xs text-navy bg-lilac/50 border border-dusty/40 rounded-xl px-3 py-2 mt-2">
          ⚠ {saveWarning}
        </p>
      )}

      <ul className="mt-3 space-y-2 flex-1">
        {records.length === 0 && (
          <li className="text-sm text-navy/40 italic">No records yet — add your first one below.</li>
        )}
        {records.map((r) => (
          <li
            key={r.id}
            className="flex items-center justify-between text-sm border-b border-lilac/60 pb-2 last:border-none group gap-2"
          >
            <div className="flex items-center gap-2 min-w-0">
              {r.fileDataUrl && r.fileType === 'image/jpeg' && (
                <img
                  src={r.fileDataUrl}
                  alt={r.fileName}
                  className="w-9 h-9 rounded-lg object-cover border border-lilac shrink-0"
                />
              )}
              {r.fileDataUrl && r.fileType === 'application/pdf' && (
                <span className="w-9 h-9 rounded-lg bg-lilac/50 flex items-center justify-center shrink-0 text-sm">
                  📄
                </span>
              )}
              <div className="min-w-0">
                <p className="text-navy/80 truncate">{r.label}</p>
                <p className="text-navy/40 text-xs">
                  {formatDisplayDate(r.date)}
                  {r.fileDataUrl && (
                    <>
                      {' · '}
                      <a
                        href={r.fileDataUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={r.fileName}
                        className="text-dusty hover:text-navy underline"
                      >
                        View file
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
            <button
              onClick={() => removeRecord(r.id)}
              className="text-navy/30 hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity text-xs shrink-0"
              aria-label={`Remove ${r.label}`}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {showForm ? (
        <form onSubmit={addRecord} className="mt-3 space-y-2 border-t border-lilac/60 pt-3">
          <input
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="e.g. Root Canal — Upper Molar"
            className="w-full bg-lilac/20 focus:bg-lilac/40 rounded-xl px-3 py-2 text-sm text-navy outline-none border border-lilac"
            autoFocus
          />
          <input
            type="date"
            value={newDate}
            max={todayISO()}
            onChange={(e) => setNewDate(e.target.value)}
            className="w-full bg-lilac/20 focus:bg-lilac/40 rounded-xl px-3 py-2 text-sm text-navy outline-none border border-lilac"
          />

          <label className="block">
            <span className="text-xs font-semibold text-navy/70 mb-1 block">
              Attach a file (JPG, JPEG or PDF, optional)
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept=".jpg,.jpeg,.pdf,image/jpeg,application/pdf"
              onChange={handleFileChange}
              className="w-full text-sm text-navy file:mr-3 file:py-2 file:px-3 file:rounded-full file:border-0 file:bg-dusty file:text-cream file:text-xs file:font-semibold hover:file:bg-navy file:cursor-pointer cursor-pointer"
            />
          </label>

          {fileError && <p className="text-xs text-navy bg-lilac/50 rounded-lg px-3 py-2">{fileError}</p>}

          {pendingFile && !fileError && (
            <div className="flex items-center gap-2 text-xs text-navy/70 bg-lilac/30 rounded-lg px-3 py-2">
              {pendingFile.type === 'image/jpeg' ? '🖼️' : '📄'}
              <span className="truncate flex-1">{pendingFile.name}</span>
              <span className="text-navy/40 shrink-0">{formatFileSize(pendingFile.size)}</span>
            </div>
          )}

          <div className="flex gap-2 pt-1">
            <button
              type="submit"
              className="flex-1 bg-dusty hover:bg-navy text-cream text-sm font-semibold py-2 rounded-full transition-colors"
            >
              Save Record
            </button>
            <button
              type="button"
              onClick={cancelForm}
              className="px-4 border-2 border-lilac hover:border-dusty text-navy text-sm font-semibold py-2 rounded-full transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="mt-3 text-sm font-semibold text-dusty hover:text-navy self-start inline-flex items-center gap-1"
        >
          + Add a record
        </button>
      )}
    </CardShell>
  )
}

// ---------------------------------------------------------------------------
// 3) Personalized care reminders — controlled by Dashboard's `reminders`
//    state, passed down as props. Checking BOTH Morning brush and Night
//    brush marks today as a completed day in the streak (handled by the
//    useEffect in Dashboard above).
// ---------------------------------------------------------------------------
const REMINDER_ITEMS = [
  { id: 'morning', text: 'Morning brush' },
  { id: 'night', text: 'Night brush' },
  { id: 'floss', text: 'Floss before bed' },
  { id: 'mouthwash', text: 'Mouthwash rinse' },
]

function CareReminderCard({ reminders, setReminders }) {
  const toggle = (id) => setReminders((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <span className="text-2xl">🔔</span>
        <span className="text-xs font-semibold bg-lilac/60 text-navy px-3 py-1 rounded-full">Today</span>
      </div>
      <h3 className="font-display font-600 text-navy mt-4">Personalized Care Reminders</h3>
      <ul className="mt-3 space-y-2 flex-1">
        {REMINDER_ITEMS.map((item) => (
          <li key={item.id}>
            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={!!reminders[item.id]}
                onChange={() => toggle(item.id)}
                className="w-4 h-4 accent-[#7C7E9D] rounded"
              />
              <span className={reminders[item.id] ? 'line-through text-navy/40' : 'text-navy/80'}>
                {item.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <p className="text-xs text-navy/40 mt-3">
        Complete both brush reminders to count today toward your streak.
      </p>
    </CardShell>
  )
}

// ---------------------------------------------------------------------------
// 4) Brushing streak — a real, clickable 7-day streak. Tap any day's dot to
//    mark it done / not done. Reads `brushLog` from props (owned by
//    Dashboard), so it's always in sync with the Reminders card above.
// ---------------------------------------------------------------------------
function StreakCard({ brushLog, setBrushLog, setReminders, today }) {
  const last7 = Array.from({ length: 7 }, (_, i) => isoDaysAgo(6 - i))
  const dayLabels = last7.map((iso) => new Date(iso).toLocaleDateString('en-US', { weekday: 'narrow' }))
  const completed = last7.map((iso) => !!brushLog[iso])

  // 1. DYNAMIC STREAK CALCULATION:
  // Finds the longest consecutive chain of checked days in the 7-day log
  let streak = 0
  let currentRun = 0

  for (let i = 0; i < completed.length; i++) {
    if (completed[i]) {
      currentRun++
      if (currentRun > streak) {
        streak = currentRun
      }
    } else {
      currentRun = 0 // Break the chain, reset run counter
    }
  }

  const handleDayClick = (iso) => {
    const newValue = !brushLog[iso]
    setBrushLog((prev) => ({ ...prev, [iso]: newValue }))

    if (iso === today) {
      setReminders((prev) => ({ ...prev, morning: newValue, night: newValue }))
    }
  }

  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <span className="text-2xl">🔥</span>
        <span className="text-xs font-semibold bg-lilac/60 text-navy px-3 py-1 rounded-full">
          {streak}-day streak
        </span>
      </div>
      <h3 className="font-display font-600 text-navy mt-4">Brushing Streak</h3>
      <p className="text-sm text-navy/60 mt-1 flex-1">
        Tap a day to mark it brushed, or check off your reminders — they stay in sync.
      </p>
      <div className="mt-4 flex justify-between">
        {last7.map((iso, i) => (
          <div key={iso} className="flex flex-col items-center gap-1">
            <span className="text-xs text-navy/40">{dayLabels[i]}</span>
            <button
              type="button"
              onClick={() => handleDayClick(iso)}
              aria-pressed={completed[i]}
              aria-label={`Mark ${iso} as ${completed[i] ? 'not brushed' : 'brushed'}`}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-colors cursor-pointer hover:ring-2 hover:ring-dusty/50 ${
                completed[i] ? 'bg-dusty text-cream' : 'bg-lilac/40 text-navy/30'
              } ${iso === today ? 'ring-2 ring-dusty/70' : ''}`}
            >
              {completed[i] ? '✓' : ''}
            </button>
          </div>
        ))}
      </div>
    </CardShell>
  )
}