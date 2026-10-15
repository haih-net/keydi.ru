import React, { useState, useCallback } from 'react'
import { Cpu, Brain } from 'lucide-react'
import { AIModal } from './components/AIModal'
import {
  TechnologyStyled,
  TechnologyHeaderStyled,
  TechnologySectionStyled,
  TechnologyPrincipleStyled,
  TechnologyPrincipleGridStyled,
  TechnologyStepsStyled,
  TechnologyStepStyled,
  TechnologyStepNumberStyled,
  TechnologyStepTextStyled,
  TechnologyHeaderImageDiv,
  TechnologySquareImageContainer,
  TechnologySimulatorStyled,
  TechnologySimulatorHeaderStyled,
  TechnologySimulatorContainerStyled,
  TechnologySimulatorContentStyled,
  TechnologySimulatorInnerStyled,
  TechnologySimulatorButtonsStyled,
  TechnologySimulatorButtonStyled,
  TechnologySimulatorStatsStyled,
  TechnologySimulatorStatStyled,
  TechnologySimulatorRoadStyled,
  TechnologySimulatorRoadSideStyled,
  TechnologySimulatorRoadCenterStyled,
  TechnologySimulatorRoadLinesStyled,
  TechnologySimulatorCarStyled,
  TechnologySimulatorSpeedStyled,
  TechnologySimulatorSpeedItemStyled,
  TechnologySimulatorControlsButtonsStyled,
  TechnologySimulatorSuccessStyled,
  TechnologySimulatorSuccessButtonsStyled,
  TechnologyModesStyled,
  TechnologyModesGridStyled,
  TechnologyModeCardStyled,
  TechnologyModeNumberStyled,
  TechnologyResultsStyled,
  TechnologyResultsContentStyled,
  TechnologyResultsListStyled,
  TechnologyResultsItemsStyled,
  TechnologyResultsItemStyled,
  TechnologyResultsDotStyled,
  TechnologyResultsHighlightStyled,
  TechnologyAIButtonStyled,
  TechnologyBadgeStyled,
  TechnologyHeaderImageContainer,
} from './styles'
import { BaseGradientTitleStyled } from 'app/Custom/components/Layout/styles'
import { aiDisables } from 'app/Custom/interfaces'

const workingPrinciple = [
  'Во время движения система «Keydi» измеряет дистанцию до заднего ТС.',
  'Дистанция сравнивается с безопасной для данной скорости движения ТС.',
  'В случае нарушения дистанции включаются стоп-сигналы ТС в прерывистом режиме.',
  'Дополнительно производится оповещение водителя ТС свето-звуковым сигналом об опасном сближении сзади.',
]

const modes = [
  {
    number: 1,
    title: 'Режим 1',
    description:
      'Стоп-сигналы зажигаются на 1 секунду с интервалом 2 секунды при сближении заднего ТС на дистанцию менее безопасной',
    color: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
    bgColor: '#ef4444',
  },
  {
    number: 2,
    title: 'Режим 2',
    description:
      'Стоп-сигналы зажигаются на 1 секунду с интервалом 1 секунда при сближении на дистанцию менее половины безопасной',
    color: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
    bgColor: '#f59e0b',
  },
  {
    number: 3,
    title: 'Режим 3',
    description:
      'Стоп-сигналы зажигаются на 1 секунду с интервалом 1 секунда при сближении менее 4 метров на скорости 0-15 км/ч',
    color: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
    bgColor: '#dc2626',
  },
]

const testResults = [
  'Отработаны все режимы работы системы',
  'Собраны аналитические данные по эффективности',
  'Подтверждено увеличение безопасной дистанции',
  'Система работает в различных погодных условиях',
]

export const TechnologyPage: React.FC = () => {
  const [scenario, setScenario] = useState<'normal' | 'keydi' | null>(null)
  const [isAIModalOpen, setIsAIModalOpen] = useState(false)
  const [distance, setDistance] = useState('80.0')
  const [safeDistance, setSafeDistance] = useState('53.1')
  const [frontSpeed] = useState('60')
  const [userSpeed] = useState('60')
  const [showFullSimulator, setShowFullSimulator] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [successTimer, setSuccessTimer] = useState<NodeJS.Timeout | null>(null)

  const handleScenarioChange = useCallback(
    (type: 'normal' | 'keydi') => {
      setScenario(type)
      setShowFullSimulator(true)
      setShowSuccess(false)

      // Очистить предыдущий таймер
      if (successTimer) {
        clearTimeout(successTimer)
      }

      // Установить новый таймер на 15 секунд
      const timer = setTimeout(() => {
        setShowSuccess(true)
        setShowFullSimulator(false)
      }, 15000)

      setSuccessTimer(timer)

      if (type === 'keydi') {
        setDistance('80.0')
        setSafeDistance('53.1')
      } else {
        setDistance('40.0')
        setSafeDistance('53.1')
      }
    },
    [successTimer],
  )

  const handleReset = useCallback(() => {
    setScenario(null)
    setShowFullSimulator(false)
    setShowSuccess(false)
    if (successTimer) {
      clearTimeout(successTimer)
      setSuccessTimer(null)
    }
  }, [successTimer])

  const handleRepeat = useCallback(() => {
    setShowSuccess(false)
    setShowFullSimulator(true)

    if (successTimer) {
      clearTimeout(successTimer)
    }

    const timer = setTimeout(() => {
      setShowSuccess(true)
      setShowFullSimulator(false)
    }, 15000)

    setSuccessTimer(timer)
  }, [successTimer])

  const handleScenarioNormal = useCallback(() => {
    handleScenarioChange('normal')
  }, [handleScenarioChange])

  const handleScenarioKeydi = useCallback(() => {
    handleScenarioChange('keydi')
  }, [handleScenarioChange])

  const handleAIModalOpen = useCallback(() => {
    setIsAIModalOpen(true)
  }, [])

  const handleAIModalClose = useCallback(() => {
    setIsAIModalOpen(false)
  }, [])

  return (
    <TechnologyStyled>
      {/* Header Section */}
      <TechnologyHeaderStyled>
        <TechnologyBadgeStyled>
          <Cpu size={16} />
          Техническая документация
        </TechnologyBadgeStyled>
        <BaseGradientTitleStyled>
          Технология <span>Кейди</span>
        </BaseGradientTitleStyled>
        <TechnologyHeaderImageDiv>
          <img
            src="/img/technology.jpg"
            alt="Система безопасности Кейди в действии"
          />
        </TechnologyHeaderImageDiv>
        <TechnologyAIButtonStyled
          hidden
          style={{ display: 'none' }}
          onClick={handleAIModalOpen}
        >
          <Brain />
          ИИ о проблеме безопасной дистанции
        </TechnologyAIButtonStyled>
      </TechnologyHeaderStyled>

      {/* Working Principle Section */}
      <TechnologySectionStyled>
        <TechnologyPrincipleStyled>
          <h2>Принцип работы системы Кейди</h2>
          <TechnologyPrincipleGridStyled>
            <TechnologyStepsStyled>
              {workingPrinciple.map((step, index) => (
                <TechnologyStepStyled key={step}>
                  <TechnologyStepNumberStyled>
                    {index + 1}
                  </TechnologyStepNumberStyled>
                  <TechnologyStepTextStyled>{step}</TechnologyStepTextStyled>
                </TechnologyStepStyled>
              ))}
            </TechnologyStepsStyled>
            <TechnologyHeaderImageContainer>
              <img
                src="/img/f38715503_6.jpg"
                alt="Схема работы системы Кейди"
              />
            </TechnologyHeaderImageContainer>
          </TechnologyPrincipleGridStyled>
        </TechnologyPrincipleStyled>
      </TechnologySectionStyled>
      <div style={{ marginBottom: '64px' }}>
        <TechnologySimulatorHeaderStyled>
          <h2>Интерактивный симулятор</h2>
          <p>
            Попробуйте сами! Проверьте свою реакцию в двух сценариях: с системой
            Кейди и без неё. Почувствуйте разницу между обычным торможением и
            предупреждением о нарушении дистанции.
          </p>
        </TechnologySimulatorHeaderStyled>

        <TechnologySimulatorStyled>
          <TechnologySimulatorContainerStyled>
            <TechnologySimulatorContentStyled>
              <TechnologySimulatorInnerStyled>
                <h3>Симулятор реакции водителя</h3>
                <p>
                  Проверьте свою реакцию в двух сценариях. Догоняйте передний
                  автомобиль и тормозите вовремя!
                </p>

                {showSuccess && (
                  <TechnologySimulatorSuccessStyled>
                    <h3>Успешно! ✅</h3>
                    <p>Вы успешно завершили тест на реакцию водителя</p>
                    <TechnologySimulatorSuccessButtonsStyled>
                      <button type="button" onClick={handleReset}>
                        Выбрать сценарий
                      </button>
                      <button type="button" onClick={handleRepeat}>
                        Повторить
                      </button>
                    </TechnologySimulatorSuccessButtonsStyled>
                  </TechnologySimulatorSuccessStyled>
                )}

                {!showSuccess && showFullSimulator && (
                  <>
                    <TechnologySimulatorStatsStyled>
                      <TechnologySimulatorStatStyled>
                        <div>Сценарий</div>
                        <div>
                          {scenario === 'keydi' ? 'С Кейди' : 'Без Кейди'}
                        </div>
                      </TechnologySimulatorStatStyled>
                      <TechnologySimulatorStatStyled>
                        <div>Дистанция</div>
                        <div>{distance} м</div>
                      </TechnologySimulatorStatStyled>
                      <TechnologySimulatorStatStyled>
                        <div>Безопасная</div>
                        <div>{safeDistance} м</div>
                      </TechnologySimulatorStatStyled>
                    </TechnologySimulatorStatsStyled>

                    <TechnologySimulatorRoadStyled>
                      <TechnologySimulatorRoadSideStyled />
                      <TechnologySimulatorRoadSideStyled
                        style={{ right: 0, left: 'auto' }}
                      />
                      <TechnologySimulatorRoadCenterStyled>
                        <TechnologySimulatorRoadLinesStyled>
                          <div key="line-1" />
                          <div key="line-2" />
                          <div key="line-3" />
                          <div key="line-4" />
                          <div key="line-5" />
                          <div key="line-6" />
                          <div key="line-7" />
                          <div key="line-8" />
                        </TechnologySimulatorRoadLinesStyled>
                      </TechnologySimulatorRoadCenterStyled>

                      <TechnologySimulatorCarStyled $position="left: calc(50% - 50px); top: 15%;">
                        <svg width="100" height="60" viewBox="0 0 100 60">
                          <rect
                            x="10"
                            y="25"
                            width="80"
                            height="20"
                            rx="3"
                            fill="#3B82F6"
                          />
                          <rect
                            x="20"
                            y="10"
                            width="60"
                            height="15"
                            rx="5"
                            fill="#3B82F6"
                            opacity="0.9"
                          />
                          <rect
                            x="25"
                            y="13"
                            width="18"
                            height="10"
                            rx="2"
                            fill="#87CEEB"
                            opacity="0.7"
                          />
                          <rect
                            x="57"
                            y="13"
                            width="18"
                            height="10"
                            rx="2"
                            fill="#87CEEB"
                            opacity="0.7"
                          />
                          <circle cx="25" cy="48" r="7" fill="#2d3748" />
                          <circle cx="25" cy="48" r="4" fill="#4a5568" />
                          <circle cx="75" cy="48" r="7" fill="#2d3748" />
                          <circle cx="75" cy="48" r="4" fill="#4a5568" />
                          <circle cx="88" cy="30" r="3" fill="#FFF5E1" />
                          <circle cx="88" cy="40" r="3" fill="#FFF5E1" />
                          <rect
                            x="10"
                            y="27"
                            width="8"
                            height="6"
                            rx="1.5"
                            fill="#4A0000"
                          />
                          <rect
                            x="10"
                            y="37"
                            width="8"
                            height="6"
                            rx="1.5"
                            fill="#4A0000"
                          />
                        </svg>
                      </TechnologySimulatorCarStyled>

                      <TechnologySimulatorCarStyled $position="left: calc(50% - 50px); bottom: 10%;">
                        <svg width="100" height="60" viewBox="0 0 100 60">
                          <rect
                            x="10"
                            y="25"
                            width="80"
                            height="20"
                            rx="3"
                            fill="#10B981"
                          />
                          <rect
                            x="20"
                            y="10"
                            width="60"
                            height="15"
                            rx="5"
                            fill="#10B981"
                            opacity="0.9"
                          />
                          <rect
                            x="25"
                            y="13"
                            width="18"
                            height="10"
                            rx="2"
                            fill="#87CEEB"
                            opacity="0.7"
                          />
                          <rect
                            x="57"
                            y="13"
                            width="18"
                            height="10"
                            rx="2"
                            fill="#87CEEB"
                            opacity="0.7"
                          />
                          <circle cx="25" cy="48" r="7" fill="#2d3748" />
                          <circle cx="25" cy="48" r="4" fill="#4a5568" />
                          <circle cx="75" cy="48" r="7" fill="#2d3748" />
                          <circle cx="75" cy="48" r="4" fill="#4a5568" />
                          <circle cx="88" cy="30" r="3" fill="#FFF5E1" />
                          <circle cx="88" cy="40" r="3" fill="#FFF5E1" />
                          <rect
                            x="10"
                            y="27"
                            width="8"
                            height="6"
                            rx="1.5"
                            fill="#4A0000"
                          />
                          <rect
                            x="10"
                            y="37"
                            width="8"
                            height="6"
                            rx="1.5"
                            fill="#4A0000"
                          />
                        </svg>
                      </TechnologySimulatorCarStyled>
                    </TechnologySimulatorRoadStyled>

                    <TechnologySimulatorSpeedStyled>
                      <TechnologySimulatorSpeedItemStyled $variant="front">
                        <div>Передний автомобиль</div>
                        <div>{frontSpeed}</div>
                        <div>км/ч</div>
                      </TechnologySimulatorSpeedItemStyled>
                      <TechnologySimulatorSpeedItemStyled $variant="user">
                        <div>Ваш автомобиль</div>
                        <div>{userSpeed}</div>
                        <div>км/ч</div>
                      </TechnologySimulatorSpeedItemStyled>
                    </TechnologySimulatorSpeedStyled>
                  </>
                )}

                {!showSuccess && (
                  <>
                    <TechnologySimulatorControlsButtonsStyled>
                      <div>⬆️ ГАЗ</div>
                      <div>⬇️ ТОРМОЗ</div>
                    </TechnologySimulatorControlsButtonsStyled>

                    <TechnologySimulatorButtonsStyled>
                      <TechnologySimulatorButtonStyled
                        as="button"
                        type="button"
                        $variant="normal"
                        onClick={handleScenarioNormal}
                      >
                        <div>
                          <div>Сценарий 1</div>
                          <div>Без системы Кейди</div>
                        </div>
                      </TechnologySimulatorButtonStyled>

                      <TechnologySimulatorButtonStyled
                        as="button"
                        type="button"
                        $variant="keydi"
                        onClick={handleScenarioKeydi}
                      >
                        <div>
                          <div>Сценарий 2</div>
                          <div>С системой Кейди</div>
                        </div>
                      </TechnologySimulatorButtonStyled>
                    </TechnologySimulatorButtonsStyled>
                  </>
                )}
              </TechnologySimulatorInnerStyled>
            </TechnologySimulatorContentStyled>
          </TechnologySimulatorContainerStyled>
        </TechnologySimulatorStyled>
      </div>
      {/* Modes Section */}
      <TechnologySectionStyled>
        <TechnologyModesStyled>
          <h2>Режимы работы системы</h2>
          <TechnologyModesGridStyled>
            {modes.map((mode) => (
              <TechnologyModeCardStyled key={mode.number} $color={mode.color}>
                <TechnologyModeNumberStyled $bgColor={mode.bgColor}>
                  {mode.number}
                </TechnologyModeNumberStyled>
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
              </TechnologyModeCardStyled>
            ))}
          </TechnologyModesGridStyled>
        </TechnologyModesStyled>
      </TechnologySectionStyled>

      {/* Test Results Section */}
      <TechnologySectionStyled>
        <TechnologyResultsStyled>
          <h2>Результаты испытаний</h2>
          <p>Испытания прототипа проведены на городских дорогах г. Уфа</p>

          <TechnologyResultsContentStyled>
            <TechnologyResultsListStyled>
              <h3>Ключевые результаты:</h3>
              <TechnologyResultsItemsStyled>
                {testResults.map((result) => (
                  <TechnologyResultsItemStyled key={result}>
                    <TechnologyResultsDotStyled />
                    <span>{result}</span>
                  </TechnologyResultsItemStyled>
                ))}
              </TechnologyResultsItemsStyled>
              <TechnologyResultsHighlightStyled>
                <div>15-30%</div>
                <p>Увеличение дистанции между ТС</p>
              </TechnologyResultsHighlightStyled>
            </TechnologyResultsListStyled>

            <TechnologySquareImageContainer>
              <img
                src="/img/356c6443e_.jpg"
                alt="График результатов испытаний системы Кейди"
              />
            </TechnologySquareImageContainer>
          </TechnologyResultsContentStyled>
        </TechnologyResultsStyled>
      </TechnologySectionStyled>

      {aiDisables && (
        <AIModal isOpen={isAIModalOpen} onClose={handleAIModalClose} />
      )}
    </TechnologyStyled>
  )
}
