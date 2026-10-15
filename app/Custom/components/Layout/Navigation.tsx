import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import {
  NavigationStyled,
  NavigationContainer,
  NavigationHeader,
  NavigationLogo,
  NavigationLinks,
  NavigationLink,
  NavigationLinkUnderline,
  NavigationMobileButton,
  NavigationMobileLinks,
  NavigationMobileLink,
} from './styles'

const navigationItems = [
  { title: 'Главная', href: '/' },
  { title: 'О технологии', href: '/technology' },
  { title: 'Видео', href: '/video' },
  { title: 'Команда', href: '/team' },
  { title: 'Галерея', href: '/gallery' },
  { title: 'Наши Патенты', href: '/patents' },
  { title: 'Для инвестора', href: '/investor' },
  { title: 'Контакты', href: '/contacts' },
]

export const Navigation: React.FC = () => {
  const router = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const handleMobileLinkClick = React.useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <NavigationStyled>
      <NavigationContainer>
        <NavigationHeader>
          <NavigationLogo href="/">
            <img src="/img/nav/73f822a5e_.jpg" alt="Кейди Логотип" />
          </NavigationLogo>
          <NavigationMobileButton
            aria-label="Меню"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </NavigationMobileButton>
        </NavigationHeader>
        <NavigationLinks>
          {navigationItems.map((item) => {
            const isActive = router.pathname === item.href
            return (
              <NavigationLink
                key={item.href}
                href={item.href}
                $isActive={isActive}
              >
                {item.title}
                <NavigationLinkUnderline $isActive={isActive} />
              </NavigationLink>
            )
          })}
        </NavigationLinks>
        <NavigationMobileLinks $isOpen={isMobileMenuOpen}>
          {navigationItems.map((item) => {
            const isActive = router.pathname === item.href
            return (
              <NavigationMobileLink
                key={item.href}
                href={item.href}
                $isActive={isActive}
                onClick={handleMobileLinkClick}
              >
                {item.title}
              </NavigationMobileLink>
            )
          })}
        </NavigationMobileLinks>
      </NavigationContainer>
    </NavigationStyled>
  )
}
