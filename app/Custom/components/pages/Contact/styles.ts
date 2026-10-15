import { styled } from 'styled-components'

export const ContactPageStyled = styled.main.withConfig({
  componentId: 'keydi-ContactPageStyled',
})`
  min-height: 100vh;
`

export const ContactContainerStyled = styled.div.withConfig({
  componentId: 'keydi-ContactContainerStyled',
})`
  min-height: 100vh;
  padding: 80px 0;
`

export const ContactMaxWidthStyled = styled.div.withConfig({
  componentId: 'keydi-ContactMaxWidthStyled',
})`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 640px) {
    padding: 0 24px;
  }

  @media (min-width: 1024px) {
    padding: 0 32px;
  }
`

export const ContactHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-ContactHeaderStyled',
})`
  text-align: center;
  margin-bottom: 64px;
`

export const ContactBadgeStyled = styled.div.withConfig({
  componentId: 'keydi-ContactBadgeStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f0fdf4;
  color: #15803d;
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
`

export const ContactTitleStyled = styled.h1.withConfig({
  componentId: 'keydi-ContactTitleStyled',
})`
  font-size: 48px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 24px;

  span {
    background: linear-gradient(to right, #16a34a, #2563eb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`

export const ContactDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-ContactDescriptionStyled',
})`
  font-size: 20px;
  color: #475569;
  max-width: 768px;
  margin: 0 auto;
  line-height: 1.75;
`

export const ContactGridStyled = styled.div.withConfig({
  componentId: 'keydi-ContactGridStyled',
})`
  display: grid;
  gap: 64px;
  align-items: start;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const ContactLeftStyled = styled.div.withConfig({
  componentId: 'keydi-ContactLeftStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const CompanyCardStyled = styled.div.withConfig({
  componentId: 'keydi-CompanyCardStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid #bbf7d0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 16px;
  }
`

export const CompanyBadgesStyled = styled.div.withConfig({
  componentId: 'keydi-CompanyBadgesStyled',
})`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  margin-bottom: 16px;

  p {
    color: #000000;
    font-weight: 700;
    font-size: 14px;
  }
`

export const CompanyInfoStyled = styled.div.withConfig({
  componentId: 'keydi-CompanyInfoStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
`

export const CompanyInfoRowStyled = styled.div.withConfig({
  componentId: 'keydi-CompanyInfoRowStyled',
})`
  display: flex;
  justify-content: space-between;
`

export const CompanyInfoLabelStyled = styled.span.withConfig({
  componentId: 'keydi-CompanyInfoLabelStyled',
})`
  color: #475569;
`

export const CompanyInfoValueStyled = styled.span.withConfig({
  componentId: 'keydi-CompanyInfoValueStyled',
})`
  font-weight: 700;
`

export const CompanyInfoDividerStyled = styled.div.withConfig({
  componentId: 'keydi-CompanyInfoDividerStyled',
})`
  padding-top: 12px;
  border-top: 1px solid #e5e7eb;
`

export const CompanyInfoDirectorLabelStyled = styled.p.withConfig({
  componentId: 'keydi-CompanyInfoDirectorLabelStyled',
})`
  color: #475569;
  margin-bottom: 4px;
`

export const CompanyInfoDirectorNameStyled = styled.p.withConfig({
  componentId: 'keydi-CompanyInfoDirectorNameStyled',
})`
  color: #1e293b;
  font-weight: 500;
`

export const TelegramCardStyled = styled.div.withConfig({
  componentId: 'keydi-TelegramCardStyled',
})`
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border: none;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`

export const TelegramHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-TelegramHeaderStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px;
`

export const TelegramTitleStyled = styled.div.withConfig({
  componentId: 'keydi-TelegramTitleStyled',
})`
  font-weight: 600;
  letter-spacing: -0.025em;
  font-size: 24px;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 12px;
`

export const TelegramContentStyled = styled.div.withConfig({
  componentId: 'keydi-TelegramContentStyled',
})`
  padding: 0 24px 24px;

  p {
    color: #475569;
    margin-bottom: 24px;
  }
`

export const TelegramButtonStyled = styled.a.withConfig({
  componentId: 'keydi-TelegramButtonStyled',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  transition: all 0.2s;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  height: 36px;
  padding: 0 16px;
  width: 100%;
  background: #2563eb;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 16px;
  text-decoration: none;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-left: 8px;
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`

export const ContactRightStyled = styled.div.withConfig({
  componentId: 'keydi-ContactRightStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const ContactSectionStyled = styled.div.withConfig({
  componentId: 'keydi-ContactSectionStyled',
})`
  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    color: #475569;
    line-height: 1.75;
  }
`

export const ContactMethodsStyled = styled.div.withConfig({
  componentId: 'keydi-ContactMethodsStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const ContactMethodCardStyled = styled.div.withConfig({
  componentId: 'keydi-ContactMethodCardStyled',
})`
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border: none;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`

export const ContactMethodLinkStyled = styled.a.withConfig({
  componentId: 'keydi-ContactMethodLinkStyled',
})`
  text-decoration: none;
  color: inherit;
  display: block;
`

export const ContactMethodContentStyled = styled.div.withConfig({
  componentId: 'keydi-ContactMethodContentStyled',
})`
  padding: 24px;
`

export const ContactMethodInnerStyled = styled.div.withConfig({
  componentId: 'keydi-ContactMethodInnerStyled',
})`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`

export const ContactMethodIconStyled = styled.div.withConfig({
  componentId: 'keydi-ContactMethodIconStyled',
})`
  width: 48px;
  height: 48px;
  background: linear-gradient(to bottom right, #3b82f6, #1d4ed8);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;

  ${ContactMethodCardStyled}:hover & {
    transform: scale(1.1);
  }

  svg {
    color: white;
  }
`

export const ContactMethodInfoStyled = styled.div.withConfig({
  componentId: 'keydi-ContactMethodInfoStyled',
})`
  h3 {
    font-weight: 700;
    color: #0f172a;
    font-size: 18px;
    margin-bottom: 4px;
  }

  .contact-value {
    color: #2563eb;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    color: #475569;
    font-size: 14px;
  }
`
