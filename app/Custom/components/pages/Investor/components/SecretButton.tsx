import React from 'react'
import { styled } from 'styled-components'

export const SecretButtonContainerStyled = styled.div.withConfig({
  componentId: 'keydi-SecretButtonContainerStyled',
})`
  text-align: center;
  margin-top: 64px;
`

export const SecretButtonStyled = styled.button.withConfig({
  componentId: 'keydi-SecretButtonStyled',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 48px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 16px;
  border: 2px solid #dc2626;
  background: linear-gradient(to right, #dc2626, #ef4444, #dc2626);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(to right, #b91c1c, #dc2626, #b91c1c);
    box-shadow: 0 10px 15px -3px rgba(220, 38, 38, 0.5);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  svg {
    width: 24px;
    height: 24px;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const SecretButtonHintStyled = styled.p.withConfig({
  componentId: 'keydi-SecretButtonHintStyled',
})`
  font-size: 14px;
  color: #64748b;
  margin-top: 12px;
  font-style: italic;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`

interface SecretButtonProps {
  onClick: () => void
}

export const SecretButton: React.FC<SecretButtonProps> = ({ onClick }) => {
  return (
    <SecretButtonContainerStyled>
      <SecretButtonStyled onClick={onClick}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="lock"
          className="svg-inline--fa fa-lock"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M144 144v0H304v0c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80zm368-96h48v8c0 13.3 10.7 24 24 24s24-10.7 24-24V96h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24z"
          />
        </svg>
        Секретная кнопка
      </SecretButtonStyled>
    </SecretButtonContainerStyled>
  )
}
