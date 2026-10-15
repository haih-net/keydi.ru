import React, { useState } from 'react'
import { useLocation } from 'react-router'
import {
  LayoutContentStyled,
  LayoutStyled,
  LayoutMain,
  // LayoutTopBar,
  // MobileMenuButton,
  LayoutInnerContainer,
} from './styles'
// import { SidebarMemo } from './Sidebar'

import { Footer } from './Footer'
import { Navigation } from './Navigation'

type LayoutProps = React.PropsWithChildren

export const Layout: React.FC<LayoutProps> = ({ children, ...other }) => {
  const router = useLocation()
  const isHomePage = router.pathname === '/'
  const [sidebarOpen] = useState(false)

  // const toggleSidebar = useCallback(() => {
  //   setSidebarOpen((prev) => !prev)
  // }, [])

  return (
    <LayoutStyled {...other}>
      {/* <SidebarMemo isOpen={sidebarOpen} onToggle={toggleSidebar} /> */}

      <LayoutMain $sidebarOpen={sidebarOpen}>
        {/* <LayoutTopBar>
          <MobileMenuButton onClick={toggleSidebar}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </MobileMenuButton>
        </LayoutTopBar> */}

        <Navigation />

        <LayoutContentStyled $isHomePage={isHomePage}>
          <LayoutInnerContainer>{children}</LayoutInnerContainer>
        </LayoutContentStyled>

        <Footer />
      </LayoutMain>
    </LayoutStyled>
  )
}
