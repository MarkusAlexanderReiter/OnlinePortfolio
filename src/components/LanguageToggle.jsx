import React from 'react'
import { useTranslation } from 'react-i18next'
import 'flag-icons/css/flag-icons.min.css'
import './LanguageToggle.css'

const LanguageToggle = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const handleToggle = () => {
    const newLang = i18n.language === 'de' ? 'en' : 'de'
    toggleLanguage(newLang)
  }

  return (
    <div className="language-toggle">
      <button
        className="flag-button"
        onClick={handleToggle}
        aria-label={i18n.language === 'de' ? 'Switch to English' : 'Switch to German'}
        title={i18n.language === 'de' ? 'Switch to English' : 'Switch to German'}
      >
        <span className={`fi fi-${i18n.language === 'de' ? 'de' : 'gb'} flag-icon`}></span>
      </button>
    </div>
  )
}

export default LanguageToggle
