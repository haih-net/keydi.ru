import { styled, css, DefaultTheme } from 'styled-components'
import { ComponentSize, ComponentVariant } from '../interfaces'
import { sizeStyles } from '../styles'

export type ButtonVariant = ComponentVariant
export type ButtonSize = ComponentSize

interface ButtonStyledProps {
  $variant: ButtonVariant
  $size: ButtonSize
}

const variantStyles = (
  theme: DefaultTheme,
): Record<ComponentVariant, ReturnType<typeof css>> => ({
  default: css`
    background: ${theme.backgrounds.paper};
    color: ${theme.colors.text.primary};
    border: 1px solid ${theme.colors.border};

    &:hover:not(:disabled) {
      border-color: ${theme.colors.borderHover};
    }
  `,
  primary: css`
    background: ${theme.colors.primary};
    color: ${theme.colors.text.light};
    border: 1px solid ${theme.colors.primary};

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
  secondary: css`
    background: #ffffff;
    color: #334155;
    border: 2px solid #e2e8f0;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    font-weight: 600;

    &:hover:not(:disabled) {
      background: #fef2f2;
      border-color: #fca5a5;
      color: #dc2626;
    }

    svg {
      transition: transform 0.2s;
    }

    &:hover:not(:disabled) svg {
      transform: scale(1.1);
    }
  `,
  success: css`
    background: #10b981;
    color: white;
    border: 1px solid #10b981;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    font-weight: 600;

    &:hover:not(:disabled) {
      background: #059669;
      transform: translateY(-1px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }

    svg {
      transition: transform 0.2s;
    }

    &:hover:not(:disabled) svg {
      transform: translateX(4px);
    }
  `,
  warning: css`
    background: ${theme.colors.warning};
    color: ${theme.colors.text.light};
    border: 1px solid ${theme.colors.warning};

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
  danger: css`
    background: ${theme.colors.error};
    color: ${theme.colors.text.light};
    border: 1px solid ${theme.colors.error};

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
})

export const buttonBaseStyles = css<ButtonStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  text-decoration: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }

  &:focus-visible {
    outline: 2px solid #10b981;
    outline-offset: 2px;
  }

  ${({ $variant, theme }) => variantStyles(theme)[$variant]}
  ${({ $size, theme }) => sizeStyles(theme)[$size]}
`

export const ButtonStyled = styled.button.withConfig({
  componentId: 'keydi-ButtonStyled',
})<ButtonStyledProps>`
  ${buttonBaseStyles}
`
