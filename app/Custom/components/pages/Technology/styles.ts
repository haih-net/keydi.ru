import { styled } from 'styled-components'

export const TechnologyStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyStyled',
})`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;
`

export const TechnologyHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyHeaderStyled',
})`
  text-align: center;
  margin: 0 auto 60px auto;
  padding: 0 20px;

  p {
    font-size: 18px;
    color: #666;
    line-height: 1.6;
  }
`

export const TechnologySectionStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySectionStyled',
})`
  margin-bottom: 64px;
`

export const TechnologyPrincipleStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyPrincipleStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid #fecaca;
  border-radius: 24px;
  padding: 48px;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 32px;
    font-weight: bold;
    color: #1e293b;
    margin-bottom: 32px;
    text-align: center;
  }
`

export const TechnologyPrincipleGridStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyPrincipleGridStyled',
})`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: start;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const TechnologyStepsStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyStepsStyled',
})`
  display: grid;
  gap: 24px;
`

export const TechnologyStepStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyStepStyled',
})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`

export const TechnologyStepNumberStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyStepNumberStyled',
})`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: #1a1a1a;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
`

export const TechnologyStepTextStyled = styled.p.withConfig({
  componentId: 'keydi-TechnologyStepTextStyled',
})`
  color: #666;
  line-height: 1.6;
  padding-top: 8px;
  font-size: 16px;
`

// Базовый компонент
export const BaseImageContainer = styled.button.withConfig({
  componentId: 'keydi-BaseImageContainer',
})`
  position: relative;
  aspect-ratio: 16/9;
  background: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
  width: 100%;
  cursor: zoom-in;
  transition: box-shadow 0.3s ease;
  /* margin-top: 32px; */

  &:hover {
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    padding: 12px;
    margin-top: 24px;
  }
`

// Производные компоненты
export const TechnologyHeaderImageContainer = styled(
  BaseImageContainer,
).withConfig({ componentId: 'keydi-TechnologyHeaderImageContainer' })`
  border: 1px solid #fecaca;
`

export const TechnologyHeaderImageDiv = styled.div.withConfig({
  componentId: 'keydi-TechnologyHeaderImageDiv',
})`
  margin: 0 auto;
  text-align: center;
  margin-bottom: 32px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
  }
`

// AI Modal Styles
export const AIModalOverlayStyled = styled.div.withConfig({
  componentId: 'keydi-AIModalOverlayStyled',
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
`

export const AIModalStyled = styled.div.withConfig({
  componentId: 'keydi-AIModalStyled',
})`
  background: white;
  border-radius: 24px;
  max-width: 800px;
  width: 100%;
  max-height: 80vh;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`

export const AIModalHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-AIModalHeaderStyled',
})`
  background: linear-gradient(to right, #9333ea, #3b82f6);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AIModalTitleStyled = styled.div.withConfig({
  componentId: 'keydi-AIModalTitleStyled',
})`
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;

  > div {
    display: flex;
    flex-direction: column;
  }

  > div > div {
    font-size: 20px;
    font-weight: 600;
  }

  > div > small {
    font-size: 14px;
    opacity: 0.8;
  }

  svg {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    padding: 12px;
  }
`

export const AIModalCloseStyled = styled.button.withConfig({
  componentId: 'keydi-AIModalCloseStyled',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`

export const AIModalContentStyled = styled.div.withConfig({
  componentId: 'keydi-AIModalContentStyled',
})`
  padding: 24px;
  overflow-y: auto;
`

export const AIModalSectionStyled = styled.div.withConfig({
  componentId: 'keydi-AIModalSectionStyled',
})`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const AIModalSectionTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-AIModalSectionTitleStyled',
})`
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
`

export const AIModalTextStyled = styled.p.withConfig({
  componentId: 'keydi-AIModalTextStyled',
})`
  font-size: 16px;
  line-height: 1.6;
  color: #4b5563;
`

export const AIModalChatStyled = styled.div.withConfig({
  componentId: 'keydi-AIModalChatStyled',
})`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`

export const AIModalMessagesStyled = styled.div.withConfig({
  componentId: 'keydi-AIModalMessagesStyled',
})`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const AIModalMessageStyled = styled.div.withConfig({
  componentId: 'keydi-AIModalMessageStyled',
})<{ $isUser?: boolean }>`
  max-width: 80%;
  padding: 16px;
  border-radius: 16px;
  background: ${(props) =>
    props.$isUser ? 'linear-gradient(to right, #10b981, #059669)' : 'white'};
  color: ${(props) => (props.$isUser ? 'white' : '#1f2937')};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  align-self: ${(props) => (props.$isUser ? 'flex-end' : 'flex-start')};
  word-wrap: break-word;

  em {
    opacity: 0.7;
  }
`

export const AIModalInputContainerStyled = styled.div.withConfig({
  componentId: 'keydi-AIModalInputContainerStyled',
})`
  display: flex;
  gap: 8px;
  padding: 16px 24px;
  background: white;
  border-top: 1px solid #e2e8f0;
`

export const AIModalInputStyled = styled.input.withConfig({
  componentId: 'keydi-AIModalInputStyled',
})`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #9333ea;
    box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`

export const AIModalSendButtonStyled = styled.button.withConfig({
  componentId: 'keydi-AIModalSendButtonStyled',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(to right, #9333ea, #3b82f6);
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: linear-gradient(to right, #7c3aed, #2563eb);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const TechnologySquareImageContainer = styled(
  BaseImageContainer,
).withConfig({ componentId: 'keydi-TechnologySquareImageContainer' })`
  border: none;
  aspect-ratio: 1/1;
`

// Для обратной совместимости оставляем старое название
export const TechnologyImageContainerStyled = BaseImageContainer

export const TechnologyModesStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyModesStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid #fecaca;
  border-radius: 24px;
  padding: 48px;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 32px;
    font-weight: bold;
    color: #1e293b;
    margin-bottom: 32px;
    text-align: center;
  }
`

export const TechnologyModesGridStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyModesGridStyled',
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`

export const TechnologyModeCardStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyModeCardStyled',
})<{ $color: string }>`
  background: ${(props) => props.$color};
  border-radius: 16px;
  padding: 32px;
  text-align: center;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 16px 0;
    color: #1a1a1a;
  }

  p {
    color: #666;
    line-height: 1.6;
    font-size: 14px;
  }
`

export const TechnologyModeNumberStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyModeNumberStyled',
})<{ $bgColor: string }>`
  width: 64px;
  height: 64px;
  background: ${(props) => props.$bgColor};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 24px;
  margin: 0 auto 16px;
`

export const TechnologyResultsStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyResultsStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid #fecaca;
  border-radius: 24px;
  padding: 48px;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 32px;
    font-weight: bold;
    color: #1e293b;
    margin-bottom: 32px;
    text-align: center;
  }
`

export const TechnologyResultsContentStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyResultsContentStyled',
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const TechnologyResultsListStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyResultsListStyled',
})`
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 24px;
    color: #1a1a1a;
  }
`

export const TechnologyResultsItemsStyled = styled.ul.withConfig({
  componentId: 'keydi-TechnologyResultsItemsStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const TechnologyResultsItemStyled = styled.li.withConfig({
  componentId: 'keydi-TechnologyResultsItemStyled',
})`
  display: flex;
  gap: 12px;
  align-items: center;

  span {
    color: #666;
    line-height: 1.6;
  }
`

export const TechnologyResultsDotStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyResultsDotStyled',
})`
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  flex-shrink: 0;
`

export const TechnologyResultsHighlightStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyResultsHighlightStyled',
})`
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #dcfce7 100%);
  border-radius: 16px;
  margin-top: 32px;

  div:first-child {
    font-size: 48px;
    font-weight: bold;
    color: #10b981;
    margin-bottom: 8px;
  }

  p {
    color: #666;
    font-size: 16px;
  }
`

export const TechnologyAIButtonStyled = styled.button.withConfig({
  componentId: 'keydi-TechnologyAIButtonStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(to right, #9333ea, #2563eb);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 18px;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 32px;

  &:hover {
    background: linear-gradient(to right, #7e22ce, #1d4ed8);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`

export const TechnologyBadgeStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologyBadgeStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f1f5f9;
  color: #1e293b;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  margin: 24px;

  svg {
    width: 16px;
    height: 16px;
  }
`

export const TechnologySimulatorStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid #fecaca;
  border-radius: 24px;
  padding: 48px;
  margin-bottom: 64px;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

export const TechnologySimulatorHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorHeaderStyled',
})`
  text-align: center;
  margin-bottom: 32px;

  h2 {
    font-size: 30px;
    font-weight: bold;
    color: #1e293b;
    margin-bottom: 32px;
  }

  p {
    color: #475569;
    max-width: 768px;
    margin: 0 auto 32px;
    font-size: 16px;
    line-height: 1.6;
  }
`

export const TechnologySimulatorContainerStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorContainerStyled',
})`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`

export const TechnologySimulatorContentStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorContentStyled',
})`
  padding: 32px;
`

export const TechnologySimulatorInnerStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorInnerStyled',
})`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;

  h3 {
    font-size: 24px;
    font-weight: bold;
    color: #1e293b;
    margin-bottom: 16px;
  }

  p {
    color: #475569;
    margin-bottom: 24px;
  }
`

export const TechnologySimulatorControlsStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorControlsStyled',
})`
  background: #eff6ff;
  padding: 16px;
  border-radius: 8px;
  text-align: left;
  margin-bottom: 24px;
  font-size: 14px;

  p:first-child {
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 4px;
    color: #475569;
  }
`

export const TechnologySimulatorButtonsStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorButtonsStyled',
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const TechnologySimulatorButtonStyled = styled.button.withConfig({
  componentId: 'keydi-TechnologySimulatorButtonStyled',
})<{
  $variant: 'normal' | 'keydi'
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${(props) =>
    props.$variant === 'keydi' ? '#10b981' : '#475569'};
  color: white;
  padding: 16px;
  border-radius: 6px;
  font-weight: 500;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  height: 96px;
  font-size: 18px;

  &:hover {
    background: ${(props) =>
      props.$variant === 'keydi' ? '#059669' : '#334155'};
  }

  div {
    text-align: left;
  }

  div:first-child {
    font-weight: 700;
    margin-bottom: 4px;
  }

  div:last-child {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.9;
  }
`

// Новые компоненты для симулятора
export const TechnologySimulatorStatsStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorStatsStyled',
})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`

export const TechnologySimulatorStatStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorStatStyled',
})`
  background: #f8fafc;
  padding: 12px;
  border-radius: 8px;

  div:first-child {
    font-weight: 700;
    color: #334155;
    margin-bottom: 4px;
  }

  div:last-child {
    font-size: 12px;
    color: #64748b;
  }
`

export const TechnologySimulatorRoadStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorRoadStyled',
})`
  position: relative;
  background: linear-gradient(to bottom, #475569, #64748b);
  height: 320px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 16px;
`

export const TechnologySimulatorRoadSideStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorRoadSideStyled',
})`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 48px;
  background: #15803d;
`

export const TechnologySimulatorRoadCenterStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorRoadCenterStyled',
})`
  position: absolute;
  left: 48px;
  right: 48px;
  top: 0;
  bottom: 0;
`

export const TechnologySimulatorRoadLinesStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorRoadLinesStyled',
})`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  opacity: 0.8;

  div {
    height: 32px;
    width: 8px;
    background: white;
    border-radius: 4px;
  }
`

export const TechnologySimulatorCarStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorCarStyled',
})<{
  $position?: string
  $color?: string
}>`
  position: absolute;
  transition: all 0.2s ease;
  ${(props) => props.$position || `left: calc(50% - 50px); top: 15%;`};

  svg {
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
  }
`

export const TechnologySimulatorSpeedStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorSpeedStyled',
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  font-size: 14px;
  margin-bottom: 16px;
`

export const TechnologySimulatorSpeedItemStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorSpeedItemStyled',
})<{
  $variant: 'front' | 'user'
}>`
  background: ${(props) =>
    props.$variant === 'front' ? '#eff6ff' : '#f0fdf4'};
  padding: 16px;
  border-radius: 8px;
  text-align: center;

  div:first-child {
    font-weight: 700;
    color: ${(props) => (props.$variant === 'front' ? '#1d4ed8' : '#15803d')};
    margin-bottom: 8px;
  }

  div:nth-child(2) {
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => (props.$variant === 'front' ? '#1e40af' : '#166534')};
  }

  div:last-child {
    font-size: 12px;
    color: ${(props) => (props.$variant === 'front' ? '#3b82f6' : '#22c55e')};
  }
`

export const TechnologySimulatorControlsButtonsStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorControlsButtonsStyled',
})`
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 8px;

  div {
    padding: 8px 16px;
    border-radius: 8px;
    background: #e2e8f0;
    color: #475569;
    font-weight: 500;
  }
`

export const TechnologySimulatorSuccessStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorSuccessStyled',
})`
  text-align: center;
  padding: 32px;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-radius: 16px;
  margin-bottom: 24px;

  h3 {
    color: #16a34a;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    color: #15803d;
    font-size: 16px;
    margin-bottom: 24px;
  }
`

export const TechnologySimulatorSuccessButtonsStyled = styled.div.withConfig({
  componentId: 'keydi-TechnologySimulatorSuccessButtonsStyled',
})`
  display: flex;
  justify-content: center;
  gap: 16px;

  button {
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    font-size: 16px;
  }

  button:first-child {
    background: #3b82f6;
    color: white;

    &:hover {
      background: #2563eb;
    }
  }

  button:last-child {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
    }
  }
`
