import { styled } from 'styled-components'

export const InvestorPageStyled = styled.div.withConfig({
  componentId: 'keydi-InvestorPageStyled',
})`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;
  min-height: 100vh;
  padding: 80px 0;
`

export const InvestorHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-InvestorHeaderStyled',
})`
  text-align: center;
  margin: 0 auto 60px auto;
  padding: 0 20px;

  p {
    font-size: 20px;
    color: #475569;
    max-width: 48rem;
    margin: 0 auto;
    line-height: 1.75;
    line-height: 1.6;
  }
`

export const InvestorSectionStyled = styled.div.withConfig({
  componentId: 'keydi-InvestorSectionStyled',
})`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  margin-bottom: 64px;
`

export const InvestorBadgeStyled = styled.div.withConfig({
  componentId: 'keydi-InvestorBadgeStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f1f5f1;
  color: #1e293b;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
`

export const InvestorContainerStyled = styled.div.withConfig({
  componentId: 'keydi-InvestorContainerStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid #e9d5ff;
  border-radius: 24px;
  padding: 48px;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

export const LanguageToggleStyled = styled.div.withConfig({
  componentId: 'keydi-LanguageToggleStyled',
})`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;

  & > div {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    border-radius: 999px;
    padding: 4px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid #e2e8f0;
  }
`

export const LanguageButtonStyled = styled.button.withConfig({
  componentId: 'keydi-LanguageButtonStyled',
})<{ $active?: boolean }>`
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  ${({ $active }) =>
    $active
      ? `
    background: linear-gradient(to right, #059669, #e11d48);
    color: white;
  `
      : `
    background: transparent;
    color: #475569;
    
    &:hover {
      color: #0f172a;
    }
  `}
`

export const DocumentGridStyled = styled.div.withConfig({
  componentId: 'keydi-DocumentGridStyled',
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 32px;
  margin-bottom: 48px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const DocumentCardStyled = styled.div.withConfig({
  componentId: 'keydi-DocumentCardStyled',
})`
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border: none;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`

export const DocumentHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-DocumentHeaderStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 24px;
`

export const DocumentTitleStyled = styled.div.withConfig({
  componentId: 'keydi-DocumentTitleStyled',
})<{
  $color?: string
  $bold?: boolean
}>`
  font-weight: ${({ $bold }) => ($bold ? 700 : 600)};
  letter-spacing: -0.025em;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
`

export const DocumentIconStyled = styled.div.withConfig({
  componentId: 'keydi-DocumentIconStyled',
})<{ $color?: string }>`
  color: ${({ $color }) => {
    switch ($color) {
      case 'emerald':
        return '#059669'
      case 'blue':
        return '#2563eb'
      default:
        return '#64748b'
    }
  }};
`

export const DocumentDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-DocumentDescriptionStyled',
})`
  color: #475569;
  margin-bottom: 24px;
  padding: 0 24px;
`

export const DocumentButtonContainerStyled = styled.div.withConfig({
  componentId: 'keydi-DocumentButtonContainerStyled',
})`
  padding: 0 24px 24px;
`

export const DocumentButtonStyled = styled.a.withConfig({
  componentId: 'keydi-DocumentButtonStyled',
})<{ $color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  padding: 8px 16px;
  width: 100%;
  text-decoration: none;
  height: 36px;

  ${({ $color }) => {
    switch ($color) {
      case 'emerald':
        return `
          background: hsl(222.2 84% 4.9%);
          color: hsl(210 40% 98%);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          
          &:hover {
            background: hsl(222.2 84% 4.9% / 0.9);
          }
        `
      case 'blue':
        return `
          border: 1px solid hsl(214.3 31.8% 91.4%);
          background: hsl(0 0% 100%);
          color: hsl(222.2 84% 4.9%);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          
          &:hover {
            background: hsl(210 40% 96%);
            color: hsl(222.2 84% 4.9%);
          }
        `
      default:
        return `
          background: #64748b;
          color: white;
        `
    }
  }}

  svg {
    pointer-events: none;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`

export const StagesGridStyled = styled.div.withConfig({
  componentId: 'keydi-StagesGridStyled',
})`
  display: grid;
  gap: 32px;
  margin-bottom: 64px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const StageCardStyled = styled.div.withConfig({
  componentId: 'keydi-StageCardStyled',
})`
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`

export const StageHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-StageHeaderStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 24px;
`

export const StageNumberStyled = styled.div.withConfig({
  componentId: 'keydi-StageNumberStyled',
})`
  width: 48px;
  height: 48px;
  background: #1e293b;
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
`

export const StageInfoStyled = styled.div.withConfig({
  componentId: 'keydi-StageInfoStyled',
})`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const StageTitleStyled = styled.div.withConfig({
  componentId: 'keydi-StageTitleStyled',
})`
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025em;
  color: #059669;
`

export const StageBadgeStyled = styled.span.withConfig({
  componentId: 'keydi-StageBadgeStyled',
})<{ $status?: string }>`
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid;

  ${({ $status }) => {
    switch ($status) {
      case 'completed':
        return `
          background: #f0fdf4;
          color: #15803d;
          border-color: #bbf7d0;
        `
      case 'search':
        return `
          background: #eff6ff;
          color: #1d4ed8;
          border-color: #bfdbfe;
        `
      case 'future':
        return `
          background: #eff6ff;
          color: #1d4ed8;
          border-color: #bfdbfe;
        `
      default:
        return `
          background: #f8fafc;
          color: #64748b;
          border-color: #e2e8f0;
        `
    }
  }}
`

export const StageContentStyled = styled.div.withConfig({
  componentId: 'keydi-StageContentStyled',
})`
  padding: 0 24px 24px;
`

export const StageHeadingStyled = styled.h4.withConfig({
  componentId: 'keydi-StageHeadingStyled',
})`
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
`

export const StageDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-StageDescriptionStyled',
})`
  color: #475569;
  margin-bottom: 16px;
`

export const StageGoalStyled = styled.div.withConfig({
  componentId: 'keydi-StageGoalStyled',
})`
  font-size: 14px;
  color: #475569;

  span {
    font-weight: 600;
  }
`

export const BusinessModelStyled = styled.div.withConfig({
  componentId: 'keydi-BusinessModelStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 24px;
  padding: 48px;
  margin-bottom: 64px;
  border: 1px solid #dbeafe;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`

export const BusinessModelTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-BusinessModelTitleStyled',
})`
  font-size: 30px;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  margin-bottom: 32px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`

export const BusinessModelDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-BusinessModelDescriptionStyled',
})`
  text-align: center;
  color: #475569;
  max-width: 42rem;
  margin: 0 auto 32px auto;
  line-height: 1.6;
`

export const BusinessModelGridStyled = styled.div.withConfig({
  componentId: 'keydi-BusinessModelGridStyled',
})`
  display: grid;
  gap: 32px;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const BusinessModelCardStyled = styled.div.withConfig({
  componentId: 'keydi-BusinessModelCardStyled',
})<{ $variant?: string }>`
  padding: 24px;
  border-radius: 16px;

  ${({ $variant }) => {
    switch ($variant) {
      case 'outsourcing':
        return `
          background: #eff6ff;
        `
      case 'dealers':
        return `
          background: #f0fdf4;
        `
      case 'scaling':
        return `
          background: #faf5ff;
        `
      default:
        return `
          background: #f8fafc;
        `
    }
  }}
`

export const BusinessModelCardTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-BusinessModelCardTitleStyled',
})`
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
`

export const BusinessModelCardDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-BusinessModelCardDescriptionStyled',
})`
  color: #475569;
  font-size: 14px;
  line-height: 1.6;
`

export const ScenariosGridStyled = styled.div.withConfig({
  componentId: 'keydi-ScenariosGridStyled',
})`
  display: grid;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ScenarioCardStyled = styled.div.withConfig({
  componentId: 'keydi-ScenarioCardStyled',
})`
  padding: 32px;
  background: linear-gradient(to bottom right, #f0fdf4, #d1fae5);
  border-radius: 16px;
`

export const ScenarioTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-ScenarioTitleStyled',
})`
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
`

export const ScenarioDetailsStyled = styled.div.withConfig({
  componentId: 'keydi-ScenarioDetailsStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ScenarioDetailStyled = styled.div.withConfig({
  componentId: 'keydi-ScenarioDetailStyled',
})`
  display: flex;
  justify-content: space-between;

  span:first-child {
    color: #475569;
  }

  span:last-child {
    font-weight: 600;

    &[data-color='green'] {
      color: #16a34a;
    }

    &[data-color='emerald'] {
      color: #059669;
    }
  }
`

export const ScenariosSectionStyled = styled.div.withConfig({
  componentId: 'keydi-ScenariosSectionStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 24px;
  padding: 48px;
  margin-bottom: 64px;
  border: 1px solid #bbf7d0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`

export const ScenariosTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-ScenariosTitleStyled',
})`
  font-size: 30px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 32px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`

export const OpportunitiesGridStyled = styled.div.withConfig({
  componentId: 'keydi-OpportunitiesGridStyled',
})`
  display: grid;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const OpportunityCardStyled = styled.div.withConfig({
  componentId: 'keydi-OpportunityCardStyled',
})`
  text-align: center;
`

export const OpportunityIconStyled = styled.div.withConfig({
  componentId: 'keydi-OpportunityIconStyled',
})<{
  $variant?: 'market' | 'global' | 'revenue'
}>`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;

  ${({ $variant }) =>
    $variant === 'market'
      ? `
    background: linear-gradient(to bottom right, #3b82f6, #1d4ed8);
  `
      : $variant === 'global'
        ? `
    background: linear-gradient(to bottom right, #10b981, #059669);
  `
        : `
    background: linear-gradient(to bottom right, #8b5cf6, #7c3aed);
  `}

  svg {
    width: 32px;
    height: 32px;
    color: white;
  }
`

export const OpportunityTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-OpportunityTitleStyled',
})`
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
`

export const OpportunityDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-OpportunityDescriptionStyled',
})`
  color: #475569;
`

export const OpportunitiesSectionStyled = styled.div.withConfig({
  componentId: 'keydi-OpportunitiesSectionStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 24px;
  padding: 48px;
  margin-bottom: 64px;
  border: 1px solid #dbeafe;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`

export const OpportunitiesTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-OpportunitiesTitleStyled',
})`
  font-size: 30px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 32px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`

export const PrioritySectionStyled = styled.div.withConfig({
  componentId: 'keydi-PrioritySectionStyled',
})`
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid #bfdbfe;
`

export const PriorityTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-PriorityTitleStyled',
})`
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  text-align: center;
`

export const PriorityDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-PriorityDescriptionStyled',
})`
  color: #475569;
  max-width: 768px;
  margin: 0 auto 32px;
  text-align: center;
  line-height: 1.6;
`

export const PriorityGridStyled = styled.div.withConfig({
  componentId: 'keydi-PriorityGridStyled',
})`
  display: grid;
  gap: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const PriorityCardStyled = styled.div.withConfig({
  componentId: 'keydi-PriorityCardStyled',
})<{
  $variant?: 'bus' | 'school' | 'ambulance'
}>`
  padding: 24px;
  border-radius: 12px;
  text-align: center;

  ${({ $variant }) =>
    $variant === 'bus'
      ? `
    background: #dbeafe40;
  `
      : $variant === 'school'
        ? `
    background: #fef3c740;
  `
        : `
    background: #fecaca40;
  `}
`

export const PriorityImageStyled = styled.div.withConfig({
  componentId: 'keydi-PriorityImageStyled',
})`
  aspect-ratio: 16/9;
  background: white;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const PriorityCardTitleStyled = styled.h4.withConfig({
  componentId: 'keydi-PriorityCardTitleStyled',
})`
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
`

export const AdvantagesSectionStyled = styled.div.withConfig({
  componentId: 'keydi-AdvantagesSectionStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 24px;
  padding: 48px;
  margin-bottom: 64px;
  border: 1px solid #e9d5ff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`

export const AdvantagesTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-AdvantagesTitleStyled',
})`
  font-size: 30px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 32px;
  text-align: center;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`

export const AdvantagesGridStyled = styled.div.withConfig({
  componentId: 'keydi-AdvantagesGridStyled',
})`
  display: grid;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const AdvantagesListStyled = styled.div.withConfig({
  componentId: 'keydi-AdvantagesListStyled',
})`
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 24px;
  }
`

export const AdvantagesItemsStyled = styled.ul.withConfig({
  componentId: 'keydi-AdvantagesItemsStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`

export const AdvantageItemStyled = styled.li.withConfig({
  componentId: 'keydi-AdvantageItemStyled',
})`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #334155;
  font-size: 14px;
  line-height: 1.6;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    flex-shrink: 0;
  }
`

export const ComparisonCardStyled = styled.div.withConfig({
  componentId: 'keydi-ComparisonCardStyled',
})`
  background: linear-gradient(to bottom right, #faf5ff, #dbeafe);
  border-radius: 16px;
  padding: 32px;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`

export const ComparisonTitleStyled = styled.h4.withConfig({
  componentId: 'keydi-ComparisonTitleStyled',
})`
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`

export const ComparisonItemsStyled = styled.div.withConfig({
  componentId: 'keydi-ComparisonItemsStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`

export const ComparisonItemStyled = styled.div.withConfig({
  componentId: 'keydi-ComparisonItemStyled',
})`
  display: flex;
  justify-content: space-between;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  span:first-child {
    color: #64748b;
  }

  span:last-child {
    font-weight: 600;
  }
`

export const ComparisonHighlightStyled = styled.span.withConfig({
  componentId: 'keydi-ComparisonHighlightStyled',
})<{
  $variant?: 'keydi' | 'acc'
}>`
  ${({ $variant }) =>
    $variant === 'keydi'
      ? `
    color: #16a34a;
  `
      : `
    color: #dc2626;
  `}
`

export const ComparisonNoteStyled = styled.div.withConfig({
  componentId: 'keydi-ComparisonNoteStyled',
})`
  margin-top: 16px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  p {
    font-size: 12px;
    color: #475569;
    margin: 0;
  }
`

export const CtaSectionStyled = styled.div.withConfig({
  componentId: 'keydi-CtaSectionStyled',
})`
  text-align: center;
  margin-top: 64px;
`

export const CtaCardStyled = styled.div.withConfig({
  componentId: 'keydi-CtaCardStyled',
})`
  background: white;
  border-radius: 24px;
  padding: 48px;
  position: relative;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 10px 15px -3px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 10;
  }
`

export const CtaTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-CtaTitleStyled',
})`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1e293b;
`

export const CtaDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-CtaDescriptionStyled',
})`
  font-size: 20px;
  color: #64748b;
  max-width: 1024px;
  margin: 0 auto 32px;
  line-height: 1.625;
`

export const CtaContactsStyled = styled.div.withConfig({
  componentId: 'keydi-CtaContactsStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;

  @media (min-width: 640px) {
    max-width: 1024px;
    margin: 32px auto 0;
  }
`

export const CtaContactStyled = styled.p.withConfig({
  componentId: 'keydi-CtaContactStyled',
})`
  color: #16a34a;
  font-weight: 600;
  margin: 0;
`

export const CtaContactInfoStyled = styled.p.withConfig({
  componentId: 'keydi-CtaContactInfoStyled',
})`
  color: #1e293b;
  font-weight: 500;
  margin: 0;
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

  &:hover {
    background: linear-gradient(to right, #b91c1c, #dc2626, #b91c1c);
    box-shadow: 0 10px 15px -3px rgba(220, 38, 38, 0.5);
    transform: scale(1.05);
  }
`

export const HelpSectionStyled = styled.div.withConfig({
  componentId: 'keydi-HelpSectionStyled',
})`
  background: linear-gradient(to bottom right, #fef3c7, #fed7aa);
  padding: 32px;
  border-radius: 24px;
  border: 1px solid #fbbf24;
  margin-bottom: 64px;
`

export const HelpTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-HelpTitleStyled',
})`
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`

export const HelpContentStyled = styled.div.withConfig({
  componentId: 'keydi-HelpContentStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`

export const HelpItemStyled = styled.p.withConfig({
  componentId: 'keydi-HelpItemStyled',
})`
  font-size: 18px;
  color: #475569;
  line-height: 1.6;
  margin: 0;

  strong {
    color: #1e293b;
    font-weight: 700;
  }

  br + strong {
    display: block;
    margin-top: 8px;
  }
`

export const HelpLinkStyled = styled.a.withConfig({
  componentId: 'keydi-HelpLinkStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  color: #059669;
  font-weight: 600;
  text-decoration: underline;
  transition: color 0.2s ease;

  &:hover {
    color: #047857;
  }
`

export const TestSectionStyled = styled.div.withConfig({
  componentId: 'keydi-TestSectionStyled',
})`
  background: linear-gradient(to bottom right, #ecfdf5, #d1fae5);
  padding: 32px;
  border-radius: 24px;
  border: 1px solid #34d399;
  margin-bottom: 32px;
`

export const TestTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-TestTitleStyled',
})`
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`

export const TestDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-TestDescriptionStyled',
})`
  font-size: 18px;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 24px;
`

export const TestCardStyled = styled.div.withConfig({
  componentId: 'keydi-TestCardStyled',
})`
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #34d399;
  margin-top: 16px;
`

export const TestCardTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-TestCardTitleStyled',
})`
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
`

export const TestListStyled = styled.ul.withConfig({
  componentId: 'keydi-TestListStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const TestListItemStyled = styled.li.withConfig({
  componentId: 'keydi-TestListItemStyled',
})`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 18px;
  color: #475569;

  span:first-child {
    color: #059669;
    font-weight: 700;
    font-size: 20px;
    flex-shrink: 0;
    margin-top: -2px;
  }

  strong {
    color: #1e293b;
    font-weight: 700;
  }
`

export const TestRequirementsStyled = styled.div.withConfig({
  componentId: 'keydi-TestRequirementsStyled',
})`
  background: #ecfdf5;
  padding: 16px;
  border-radius: 12px;
  margin-top: 24px;
`

export const TestRequirementsTitleStyled = styled.p.withConfig({
  componentId: 'keydi-TestRequirementsTitleStyled',
})`
  font-size: 14px;
  color: #475569;
  margin-bottom: 8px;

  strong {
    color: #059669;
    font-weight: 700;
  }
`

export const TestRequirementsListStyled = styled.ul.withConfig({
  componentId: 'keydi-TestRequirementsListStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: none;
  padding: 0;
  margin: 8px 0;
  font-size: 14px;
  color: #64748b;
`

export const TestRequirementsListItemStyled = styled.li.withConfig({
  componentId: 'keydi-TestRequirementsListItemStyled',
})`
  &::before {
    content: '•';
    color: #64748b;
    margin-right: 8px;
  }
`

export const TestFinalTextStyled = styled.p.withConfig({
  componentId: 'keydi-TestFinalTextStyled',
})`
  font-size: 14px;
  color: #475569;
  font-weight: 600;
  margin-top: 12px;
`
