import React from 'react'
import { LanguageToggleStyled, LanguageButtonStyled } from '../styles'

interface LanguageToggleProps {
  currentLanguage: 'ru' | 'en'
  onLanguageChange: (language: 'ru' | 'en') => void
}

/**
 * @deprecated
 */
export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const handleRuClick = React.useCallback(() => {
    onLanguageChange('ru')
  }, [onLanguageChange])

  const handleEnClick = React.useCallback(() => {
    onLanguageChange('en')
  }, [onLanguageChange])

  return (
    <LanguageToggleStyled>
      <LanguageButtonStyled
        $active={currentLanguage === 'ru'}
        onClick={handleRuClick}
      >
        🇷🇺 RU
      </LanguageButtonStyled>
      <LanguageButtonStyled
        $active={currentLanguage === 'en'}
        onClick={handleEnClick}
      >
        🇬🇧 EN
      </LanguageButtonStyled>
    </LanguageToggleStyled>
  )
}
