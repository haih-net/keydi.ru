import { css, DefaultTheme } from 'styled-components'
import { ComponentSize } from './interfaces'

/**
 * Common size styles for components (Button, Badge, etc.)
 */
export const sizeStyles = (
  _theme: DefaultTheme,
): Record<ComponentSize, ReturnType<typeof css>> => ({
  sm: css`
    padding: 12px 24px;
    font-size: 16px;
    gap: 8px;
    height: 44px;
  `,
  md: css`
    padding: 12px 32px;
    font-size: 18px;
    gap: 8px;
    height: 48px;
  `,
  lg: css`
    padding: 16px 40px;
    font-size: 20px;
    gap: 12px;
    height: 56px;
  `,
})

/**
 * Focus ring styles for interactive elements
 */
export const focusRingStyles = css`
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`

/**
 * Disabled state styles
 */
export const disabledStyles = css`
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
