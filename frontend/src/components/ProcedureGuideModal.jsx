import React from 'react'

export default function ProcedureGuideModal({ guide, lang, onClose }) {
  if (!guide) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-cream rounded-3xl w-full max-w-2xl max-h-[88vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-dusty text-cream px-6 py-5 flex items-start justify-between rounded-t-3xl sticky top-0">
          <div>
            <span className="text-xs font-bold uppercase tracking-wide text-cream/80">{guide.tag}</span>
            <h2 className={`font-display text-2xl font-600 mt-1 ${lang === 'ur' ? 'urdu text-3xl' : ''}`}>
              {lang === 'ur' ? guide.titleUr : guide.titleEn}
            </h2>
            <p className={`text-sm text-cream/80 mt-1 ${lang === 'ur' ? 'urdu text-base' : ''}`}>
              {lang === 'ur' ? guide.subtitleUr : guide.subtitleEn} · {guide.readMins} min read
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 shrink-0 rounded-full bg-cream/20 hover:bg-cream/30 flex items-center justify-center"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          {guide.sections.map((s, i) => (
            <div key={i} className="border-b border-lilac/60 pb-6 last:border-none last:pb-0">
              <h3 className={`font-display font-600 text-dusty text-lg mb-2 ${lang === 'ur' ? 'urdu text-xl' : ''}`}>
                {lang === 'ur' ? s.headingUr : s.headingEn}
              </h3>
              <p className={`text-sm leading-relaxed text-navy/80 ${lang === 'ur' ? 'urdu text-base' : ''}`}>
                {lang === 'ur' ? s.bodyUr : s.bodyEn}
              </p>
            </div>
          ))}

          <div className="bg-lilac/30 rounded-2xl p-4 text-xs text-navy/60">
            {lang === 'ur' ? (
              <span className="urdu text-sm">
                یہ معلومات صرف آگاہی کے لیے ہیں۔ ہر مریض کی صورتحال مختلف ہوتی ہے — براہ کرم اپنے علاج کے متعلق کسی PMDC سے تصدیق شدہ ڈینٹسٹ سے مشورہ کریں۔
              </span>
            ) : (
              'This explainer is for general awareness only. Every case is different — please consult a PMDC-certified dentist for advice specific to you.'
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
