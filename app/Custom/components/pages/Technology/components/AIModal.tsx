import React, { useState, useCallback, useRef, useEffect } from 'react'
import { X, Brain, Send } from 'lucide-react'
import {
  AIModalOverlayStyled,
  AIModalStyled,
  AIModalHeaderStyled,
  AIModalTitleStyled,
  AIModalCloseStyled,
  AIModalChatStyled,
  AIModalMessagesStyled,
  AIModalMessageStyled,
  AIModalInputStyled,
  AIModalSendButtonStyled,
  AIModalInputContainerStyled,
} from '../styles'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface AIModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AIModal: React.FC<AIModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Здравствуйте! Я ИИ-ассистент, готовый ответить на ваши вопросы о безопасной дистанции и системе Keydi. Спрашивайте!',
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    },
    [],
  )

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    },
    [onClose],
  )

  const handleEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose],
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleEscapeKey])

  const generateAIResponse = useCallback((userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (
      lowerMessage.includes('дистанц') ||
      lowerMessage.includes('расстояние')
    ) {
      return 'Безопасная дистанция рассчитывается по формуле: скорость (км/ч) ÷ 2 + 2. Например, при скорости 60 км/ч безопасная дистанция составляет 32 метра. Система Keydi постоянно измеряет фактическую дистанцию и предупреждает о её нарушении.'
    }

    if (lowerMessage.includes('работ') || lowerMessage.includes('принцип')) {
      return 'Система Keydi работает по следующему принципу: 1) Измеряет дистанцию до заднего ТС лидар-датчиком, 2) Сравнивает с безопасной дистанцией для текущей скорости, 3) При нарушении включает прерывистые стоп-сигналы, 4) Дополнительно оповещает водителя звуковым сигналом.'
    }

    if (lowerMessage.includes('статистик') || lowerMessage.includes('дтп')) {
      return 'По статистике ГИБДД РФ, около 10% ДТП происходят из-за несоблюдения безопасной дистанции. Система Keydi помогает предотвратить до 85% таких столкновений, так как предупреждает об опасном сближении за 3-5 секунд до потенциального контакта.'
    }

    if (lowerMessage.includes('установк') || lowerMessage.includes('монтаж')) {
      return 'Установка системы Keydi не требует вмешательства в электронику автомобиля. Устройство монтируется на заднем стекле и подключается к существующим стоп-сигналам. Процесс занимает 1-2 часа и может быть выполнен в любом автосервисе.'
    }

    return 'Спасибо за вопрос! Система Keydi использует передовые технологии для предотвращения попутных столкновений. Если у вас есть конкретные вопросы о дистанции, установке или технических характеристиках, я с радостью на них отвечу. Что именно вас интересует?'
  }, [])

  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim()) {
      return {}
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }, [inputValue, generateAIResponse])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSendMessage()
      }
    },
    [handleSendMessage],
  )

  if (!isOpen) {
    return null
  }

  return (
    <AIModalOverlayStyled onClick={handleOverlayClick}>
      <AIModalStyled>
        <AIModalHeaderStyled>
          <AIModalTitleStyled>
            <Brain size={24} />
            <div>
              <div>ИИ-Ассистент Keydi</div>
              <small>Эксперт по дорожной безопасности</small>
            </div>
          </AIModalTitleStyled>
          <AIModalCloseStyled onClick={onClose}>
            <X size={24} />
          </AIModalCloseStyled>
        </AIModalHeaderStyled>

        <AIModalChatStyled>
          <AIModalMessagesStyled>
            {messages.map((message) => (
              <AIModalMessageStyled key={message.id} $isUser={message.isUser}>
                {message.text}
              </AIModalMessageStyled>
            ))}
            {isTyping && (
              <AIModalMessageStyled $isUser={false}>
                <em>ИИ-ассистент печатает...</em>
              </AIModalMessageStyled>
            )}
            <div ref={messagesEndRef} />
          </AIModalMessagesStyled>

          <AIModalInputContainerStyled>
            <AIModalInputStyled
              type="text"
              placeholder="Задайте вопрос о безопасной дистанции..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <AIModalSendButtonStyled
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
            >
              <Send size={20} />
            </AIModalSendButtonStyled>
          </AIModalInputContainerStyled>
        </AIModalChatStyled>
      </AIModalStyled>
    </AIModalOverlayStyled>
  )
}
