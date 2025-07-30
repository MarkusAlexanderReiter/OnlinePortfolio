import React from 'react'
import { useTranslation } from 'react-i18next'
import './LanguageToggle.css'

const LanguageToggle = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="language-toggle">
      <button
        className={`flag-button ${i18n.language === 'de' ? 'active' : ''}`}
        onClick={() => toggleLanguage('de')}
        aria-label="Deutsch"
        title="Deutsch"
      >
        <span className="flag flag-de">🇩🇪</span>
      </button>
      <button
        className={`flag-button ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => toggleLanguage('en')}
        aria-label="English"
        title="English"
      >
        <span className="flag flag-en">🇬🇧</span>
      </button>
    </div>
  )
}

export default LanguageToggle
