import { styled } from 'styled-components'
import { SiteLink as Link } from 'app/Custom/components/SiteLink'
// import { TabType } from 'app/Custom/TabSwitcher/interfaces'
import { theme } from 'app/Custom/theme'

export const LayoutStyled = styled.div.withConfig({
  componentId: 'keydi-LayoutStyled',
})`
  display: flex;
  min-height: 100vh;
  background: #ffffff;
  overflow: hidden;
`

type LayoutMainProps = {
  $sidebarOpen?: boolean
}

export const LayoutMain = styled.div.withConfig({
  componentId: 'keydi-LayoutMain',
})<LayoutMainProps>`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* margin-left: ${({ $sidebarOpen }) => ($sidebarOpen ? '260px' : '48px')}; */
  margin-left: ${({ $sidebarOpen }) => ($sidebarOpen ? '260px' : '0px')};
  transition: margin-left 0.2s ease-in-out;

  @media (max-width: ${theme.breakpoints.md}px) {
    margin-left: 0;
  }
`

export const LayoutTopBar = styled.div.withConfig({
  componentId: 'keydi-LayoutTopBar',
})`
  display: none;
  align-items: center;
  padding: 12px 16px;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
  gap: 12px;

  @media (max-width: ${theme.breakpoints.md}px) {
    display: flex;
  }
`

export const MobileMenuButton = styled.button.withConfig({
  componentId: 'keydi-MobileMenuButton',
})`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition:
    background 0.15s,
    color 0.15s;

  svg {
    width: 20px;
    height: 20px;
  }
`

export const TopBarRight = styled.div.withConfig({
  componentId: 'keydi-TopBarRight',
})`
  display: flex;
  align-items: center;
  gap: 12px;
`

type LayoutContentStyledProps = {
  $isHomePage?: boolean
}

export const LayoutContentStyled = styled.div.withConfig({
  componentId: 'keydi-LayoutContentStyled',
})<LayoutContentStyledProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $isHomePage }) =>
    $isHomePage ? 'center' : 'flex-start'};

  --tw-gradient-stops:
    var(--color-rose-50), var(--color-amber-50), var(--color-emerald-50);
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
`

export const LayoutBlockStyled = styled.section.withConfig({
  componentId: 'keydi-LayoutBlockStyled',
})`
  max-width: 1200px;
  width: 100%;
  padding: 0 24px;
  margin: 0 auto;
`

export const LayoutInnerContainer = styled.div.withConfig({
  componentId: 'keydi-LayoutInnerContainer',
})`
  width: 100%;
  height: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  /* padding: 24px; */
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: ${theme.breakpoints.md}px) {
    padding: 0 16px;
  }
`

export const LayoutMainContentStyled = styled.div.withConfig({
  componentId: 'keydi-LayoutMainContentStyled',
})`
  display: flex;
  flex-direction: column;
  overflow: auto;
`

// Navigation components
export const NavigationStyled = styled.nav.withConfig({
  componentId: 'keydi-NavigationStyled',
})`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #ffe4e6;
  position: sticky;
  top: 0;
  z-index: 50;
`

export const NavigationContainer = styled.div.withConfig({
  componentId: 'keydi-NavigationContainer',
})`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: 0 24px;
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    padding: 0 32px;
  }
`

export const NavigationHeader = styled.div.withConfig({
  componentId: 'keydi-NavigationHeader',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #fecaca;
`

export const NavigationLogo = styled(Link).withConfig({
  componentId: 'keydi-NavigationLogo',
})`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    height: 56px;
    width: auto;
    border: 4px solid white;
    border-radius: 8px;
    transition: box-shadow 0.3s ease;
  }

  &:hover img {
    box-shadow:
      0 0 30px rgba(239, 68, 68, 0.6),
      0 0 60px rgba(239, 68, 68, 0.4),
      0 0 90px rgba(239, 68, 68, 0.2);
  }
`

export const NavigationMobileButton = styled.button.withConfig({
  componentId: 'keydi-NavigationMobileButton',
})`
  display: block;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);

  @media (min-width: ${theme.breakpoints.md}px) {
    display: none;
  }

  svg {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease;
  }
`

export const NavigationLinks = styled.div.withConfig({
  componentId: 'keydi-NavigationLinks',
})`
  display: none;
  justify-content: center;
  padding: 16px 0;
  gap: 32px;

  @media (min-width: ${theme.breakpoints.md}px) {
    display: flex;
  }
`

export const NavigationLink = styled(Link).withConfig({
  componentId: 'keydi-NavigationLink',
})<{ $isActive?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  color: ${({ $isActive }) => ($isActive ? '#10b981' : '#334155')};
  position: relative;
  cursor: pointer;
  text-decoration: none !important;

  &:hover {
    color: #10b981;
    text-decoration: none !important;
  }

  &:visited {
    text-decoration: none !important;
  }

  &:active {
    text-decoration: none !important;
  }
`

export const NavigationLinkUnderline = styled.span.withConfig({
  componentId: 'keydi-NavigationLinkUnderline',
})<{ $isActive?: boolean }>`
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #10b981;
  transition: transform 0.2s ease;
  transform: ${({ $isActive }) => ($isActive ? 'scaleX(1)' : 'scaleX(0)')};

  ${NavigationLink}:hover & {
    transform: scaleX(1);
  }
`

export const NavigationMobileLinks = styled.div.withConfig({
  componentId: 'keydi-NavigationMobileLinks',
})<{ $isOpen?: boolean }>`
  display: none;
  padding: 16px 0;
  border-top: 1px solid #fecaca;

  @media (max-width: ${theme.breakpoints.md - 1}px) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  }
`

export const NavigationMobileLink = styled(Link).withConfig({
  componentId: 'keydi-NavigationMobileLink',
})<{ $isActive?: boolean }>`
  display: block;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  margin: 0 8px;
  transition: all 0.2s ease;
  color: ${({ $isActive }) => ($isActive ? '#10b981' : '#334155')};
  text-decoration: none !important;

  &:hover {
    background: #fef2f2;
    color: #334155;
    text-decoration: none !important;
  }

  &:visited {
    text-decoration: none !important;
  }

  &:active {
    text-decoration: none !important;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    background: #ecfdf5;
    color: #10b981;
  `}
`

// Base components for reuse
export const BaseGradientTitleStyled = styled.h1.withConfig({
  componentId: 'keydi-BaseGradientTitleStyled',
})`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #1e293b;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  span {
    background-image: linear-gradient(to right, #059669, #e11d48);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`
