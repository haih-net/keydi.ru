import { LayoutBlockStyled } from 'app/Custom/components/Layout/styles'
import { minWidth } from 'app/Custom/theme/helpers'
import { styled, css } from 'styled-components'

export const HomeButtonsStyled = styled.div.withConfig({
  componentId: 'keydi-HomeButtonsStyled',
})`
  align-items: center;
  display: flex;
  gap: 15px;
`

export const HomeBlockAdvantagesCardStyled = styled.div.withConfig({
  componentId: 'keydi-HomeBlockAdvantagesCardStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  border: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 16px;
    flex: 1;
  }

  p {
    color: #475569;
    line-height: 1.75;
    margin: 0;
  }
`

export const HomeBlockAdvantagesCardIconStyled = styled.div.withConfig({
  componentId: 'keydi-HomeBlockAdvantagesCardIconStyled',
})`
  background: linear-gradient(to bottom right, #10b981, #f43f5e);
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin: 0 auto 24px;
  transition: transform 0.3s ease;

  ${HomeBlockAdvantagesCardStyled}:hover & {
    transform: scale(1.1);
  }

  svg {
    height: 32px;
    width: 32px;
    color: white;
  }
`

export const HomeBlockAdvantagesCardsStyled = styled.div.withConfig({
  componentId: 'keydi-HomeBlockAdvantagesCardsStyled',
})`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  gap: 24px;

  ${minWidth.sm(css`
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  `)}

  ${minWidth.md(css`
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  `)}

  ${minWidth.lg(css`
    grid-template-columns: repeat(5, 1fr);
    gap: 32px;
  `)}
`

export const HomeBlockStyled = styled(LayoutBlockStyled).withConfig({
  componentId: 'keydi-HomeBlockStyled',
})`
  padding: 30px 20px;
`

export const HomeBlockSupportStyled = styled(HomeBlockStyled).withConfig({
  componentId: 'keydi-HomeBlockSupportStyled',
})`
  max-width: 896px;
  margin: 0 auto 48px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 24px;
  padding: 24px 32px;
  border: 1px solid #fef3c7;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (min-width: 1024px) {
    padding: 32px;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 24px;
  }

  p {
    color: #475569;
    margin-top: 24px;
    line-height: 1.6;
  }
`

export const HomeBlockAdvantagesStyled = styled(HomeBlockStyled).withConfig({
  componentId: 'keydi-HomeBlockAdvantagesStyled',
})`
  text-align: center;
`

export const HomeSupportContentStyled = styled.div.withConfig({
  componentId: 'keydi-HomeSupportContentStyled',
})`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: auto auto;
    justify-content: center;
  }
`

export const HomeSupportLinkStyled = styled.a.withConfig({
  componentId: 'keydi-HomeSupportLinkStyled',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: opacity 0.2s ease;
  color: inherit;

  &:hover {
    opacity: 0.8;
  }

  img {
    height: 80px;
    width: auto;
    object-fit: contain;
  }

  span {
    font-weight: 700;
    font-size: 18px;
    color: #1e293b;
    transition: color 0.2s ease;

    &:hover {
      color: #10b981;
    }
  }
`

export const HomeSupportAwardStyled = styled.div.withConfig({
  componentId: 'keydi-HomeSupportAwardStyled',
})`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: auto;
  }

  img {
    width: 100%;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease;

    &:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
  }
`

export const HomeRowColumnsStyled = styled.div.withConfig({
  componentId: 'keydi-HomeRowColumnsStyled',
})`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

export const MarketProblemSectionStyled = styled.div.withConfig({
  componentId: 'keydi-MarketProblemSectionStyled',
})`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 640px) {
    padding: 0 24px;
  }

  @media (min-width: 1024px) {
    padding: 32px;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 16px;
    text-align: center;

    @media (min-width: 640px) {
      font-size: 36px;
    }
  }

  p {
    font-size: 20px;
    color: #475569;
    max-width: 768px;
    margin: 0 auto 48px;
    line-height: 1.75;
  }

  .centered-text {
    text-align: center;
  }
`

export const MarketProblemCardStyled = styled.div.withConfig({
  componentId: 'keydi-MarketProblemCardStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 24px;
  padding: 32px;
  border: 1px solid #fecaca;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin-bottom: 48px;

  @media (min-width: 1024px) {
    padding: 48px;
  }
`

export const MarketProblemContentStyled = styled.div.withConfig({
  componentId: 'keydi-MarketProblemContentStyled',
})`
  display: grid;
  gap: 48px;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const MarketProblemDangerStyled = styled.div.withConfig({
  componentId: 'keydi-MarketProblemDangerStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 0;
  }
`

export const MarketProblemItemStyled = styled.div.withConfig({
  componentId: 'keydi-MarketProblemItemStyled',
})`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  svg {
    width: 32px;
    height: 32px;
    color: #ef4444;
    flex-shrink: 0;
    margin-top: 4px;
  }

  div {
    h4 {
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 4px;
    }

    p {
      color: #475569;
      font-size: 14px;
      line-height: 1.6;
    }
  }
`

export const MarketProblemStatsStyled = styled.div.withConfig({
  componentId: 'keydi-MarketProblemStatsStyled',
})`
  padding: 32px;
  background: linear-gradient(to bottom right, #fef2f2, #fef3c7);
  border-radius: 16px;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 24px;
    text-align: center;
    color: #1e293b;
  }
`

export const MarketProblemStatsGridStyled = styled.div.withConfig({
  componentId: 'keydi-MarketProblemStatsGridStyled',
})`
  display: grid;
  gap: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const MarketProblemStatItemStyled = styled.div.withConfig({
  componentId: 'keydi-MarketProblemStatItemStyled',
})`
  text-align: center;
  padding: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);

  div {
    font-size: 36px;
    font-weight: 700;
    background: linear-gradient(to right, #ef4444, #f59e0b);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 8px;
  }

  p {
    color: #64748b;
    font-size: 14px;
  }
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
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
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

export const HomeRowStyled = styled.div.withConfig({
  componentId: 'keydi-HomeRowStyled',
})``

export const HomeFlexColumnStyled = styled.div.withConfig({
  componentId: 'keydi-HomeFlexColumnStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: start;

  @media (min-width: 640px) {
    gap: 32px;
  }
`

export const HomeRowCarsStyled = styled(HomeRowStyled).withConfig({
  componentId: 'keydi-HomeRowCarsStyled',
})`
  --tw-gradient-from: rgb(16 185 129 / 0.1);
  --tw-gradient-to: rgb(16 185 129 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);

  background-image: linear-gradient(to right, var(--tw-gradient-stops));

  ${HomeRowColumnsStyled} {
    align-items: center;

    h1 {
      span {
        background-image: linear-gradient(to right, #059669, #e11d48);
        background-clip: text;
        color: transparent;
      }
    }

    img {
      &.car {
        border-radius: 16px;
      }
    }
  }
`

export const HomeSystemStyled = styled.div.withConfig({
  componentId: 'keydi-HomeSystemStyled',
})`
  display: inline-flex;
  align-items: center;
  color: rgb(4 120 87);
  background-color: rgb(236 253 245);
  font-size: 14px;
  border-radius: 15px;
  padding: 5px 8px;
  gap: 4px;
  /* flex-basis: auto;
  flex: none;
  width: auto; */

  svg {
    font-size: 0;
    width: 16px;
    height: 16px;
  }
`

export const HomeStyled = styled.div.withConfig({
  componentId: 'keydi-HomeStyled',
})`
  /* padding-top: 60px; */

  --tw-gradient-stops:
    var(--color-rose-50), var(--color-amber-50), var(--color-emerald-50);
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
`
