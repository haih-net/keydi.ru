import React from 'react'
import { styled } from 'styled-components'

export const SecretButtonModalContainer = styled.div.withConfig({
  componentId: 'keydi-SecretButtonModalContainer',
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &.open {
    opacity: 1;
    visibility: visible;
  }
`

export const SecretModalStyled = styled.div.withConfig({
  componentId: 'keydi-SecretModalStyled',
})`
  background: white;
  border-radius: 24px;
  padding: 48px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  transform: scale(0.8);
  transition: transform 0.3s ease;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  .open & {
    transform: scale(1);
  }
`

export const SecretModalCloseStyled = styled.button.withConfig({
  componentId: 'keydi-SecretModalCloseStyled',
})`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e5e7eb;
    transform: scale(1.1);
  }

  svg {
    width: 16px;
    height: 16px;
    color: #6b7280;
  }
`

export const SecretModalTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-SecretModalTitleStyled',
})`
  font-size: 32px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 24px;
  text-align: center;
`

export const SecretModalContentStyled = styled.div.withConfig({
  componentId: 'keydi-SecretModalContentStyled',
})`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 32px;

  p {
    margin-bottom: 16px;
  }

  ul {
    margin-left: 20px;
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;
  }
`

export const SecretModalContactsStyled = styled.div.withConfig({
  componentId: 'keydi-SecretModalContactsStyled',
})`
  background: #f8fafc;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 16px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    color: #059669;
    font-weight: 500;

    svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }
`

export const SecretModalButtonStyled = styled.a.withConfig({
  componentId: 'keydi-SecretModalButtonStyled',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  background: linear-gradient(to right, #059669, #10b981);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;

  &:hover {
    background: linear-gradient(to right, #047857, #059669);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(5, 150, 105, 0.3);
  }
`

interface SecretButtonModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SecretButtonModal: React.FC<SecretButtonModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleOverlayClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    },
    [onClose],
  )

  return (
    <SecretButtonModalContainer
      className={isOpen ? 'open' : ''}
      onClick={handleOverlayClick}
    >
      <SecretModalStyled>
        <SecretModalCloseStyled onClick={onClose}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </SecretModalCloseStyled>

        <SecretModalTitleStyled>
          🔐 Эксклюзивное предложение для инвесторов
        </SecretModalTitleStyled>

        <SecretModalContentStyled>
          <p>
            <strong>Поздравляем!</strong> Вы нашли секретную кнопку для
            серьезных инвесторов, готовых изменить мир транспортной
            безопасности.
          </p>

          <p>
            Проект "Кейди" ищет стратегических партнеров для масштабирования и
            выхода на международные рынки. Уникальная технология запатентована и
            готова к коммерциализации.
          </p>

          <h3>Что мы предлагаем:</h3>
          <ul>
            <li>Доля в компании от 15% до 49%</li>
            <li>Участие в принятии стратегических решений</li>
            <li>Эксклюзивные права на регионы</li>
            <li>Быстрый выход на прибыльность (18-24 месяца)</li>
          </ul>

          <p>
            <strong>Текущая оценка проекта:</strong> 150 млн. рублей с
            потенциалом роста до 1 млрд. рублей в течение 3 лет.
          </p>
        </SecretModalContentStyled>

        <SecretModalContactsStyled>
          <h3>📞 Прямые контакты для переговоров:</h3>
          <div className="contact-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            keyditech@yandex.ru
          </div>
          <div className="contact-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            +7 927 636 2004
          </div>
          <div className="contact-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            г. Уфа, ул. Черниковская, 8
          </div>
        </SecretModalContactsStyled>

        <SecretModalButtonStyled
          href="mailto:keyditech@yandex.ru?subject=Инвестиционное предложение от инвестора"
          target="_blank"
        >
          Отправить инвестиционное предложение
        </SecretModalButtonStyled>
      </SecretModalStyled>
    </SecretButtonModalContainer>
  )
}
