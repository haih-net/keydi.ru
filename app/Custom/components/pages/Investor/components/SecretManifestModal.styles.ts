import { styled } from 'styled-components'

export const SecretManifestModalContainer = styled.div.withConfig({
  componentId: 'keydi-SecretManifestModalContainer',
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

export const SecretManifestModalStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestModalStyled',
})`
  background: white;
  border-radius: 24px;
  max-width: 1200px;
  width: 95%;
  max-height: 90vh;
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

  @media (min-width: 640px) {
    padding: 32px;
  }

  @media (max-width: 639px) {
    padding: 16px;
  }
`

export const SecretManifestCloseStyled = styled.button.withConfig({
  componentId: 'keydi-SecretManifestCloseStyled',
})`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border: none;
  background: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: #e5e7eb;
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
    color: #6b7280;
  }
`

export const SecretManifestHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestHeaderStyled',
})`
  text-align: center;
  margin-bottom: 32px;

  @media (max-width: 639px) {
    margin-bottom: 24px;
  }
`

export const SecretManifestBadgeStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestBadgeStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fef2f2;
  color: #be123c;
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;

  @media (min-width: 640px) {
    padding: 8px 20px;
    font-size: 16px;
    margin-bottom: 24px;
  }

  svg {
    width: 16px;
    height: 16px;

    @media (min-width: 640px) {
      width: 20px;
      height: 20px;
    }
  }
`

export const SecretManifestTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-SecretManifestTitleStyled',
})`
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
  padding: 0 8px;

  @media (min-width: 640px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`

export const SecretManifestSectionStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestSectionStyled',
})`
  margin-bottom: 32px;

  @media (min-width: 640px) {
    margin-bottom: 40px;
  }
`

export const SecretManifestAccidentSectionStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestAccidentSectionStyled',
})`
  background: linear-gradient(to bottom right, #fef2f2, #fecaca82);
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #fca5a5;
  margin-bottom: 24px;

  @media (min-width: 640px) {
    padding: 32px;
    border-radius: 24px;
  }
`

export const SecretManifestSectionTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-SecretManifestSectionTitleStyled',
})`
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  text-align: left;

  @media (min-width: 640px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`

export const SecretManifestImagesGridStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestImagesGridStyled',
})`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 24px;
  }
`

export const SecretManifestImageStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestImageStyled',
})`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 256px;
    object-fit: cover;
  }
`

export const SecretManifestCaptionStyled = styled.p.withConfig({
  componentId: 'keydi-SecretManifestCaptionStyled',
})`
  text-align: center;
  color: #334155;
  font-size: 16px;
  font-weight: 600;
  padding: 0 8px;

  @media (min-width: 640px) {
    font-size: 18px;
  }
`

export const SecretManifestMissionSectionStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestMissionSectionStyled',
})`
  background: linear-gradient(to bottom right, #fef2f2, #fef2f2);
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #fca5a5;

  @media (min-width: 640px) {
    padding: 32px;
    border-radius: 24px;
  }
`

export const SecretManifestMissionTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-SecretManifestMissionTitleStyled',
})`
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 640px) {
    font-size: 24px;
    gap: 12px;
  }

  svg {
    color: #dc2626;
    width: 20px;
    height: 20px;

    @media (min-width: 640px) {
      width: 24px;
      height: 24px;
    }
  }
`

export const SecretManifestTextStyled = styled.p.withConfig({
  componentId: 'keydi-SecretManifestTextStyled',
})`
  color: #334155;
  line-height: 1.6;
  font-size: 16px;

  @media (min-width: 640px) {
    font-size: 18px;
  }
`

export const SecretManifestGridStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestGridStyled',
})`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    gap: 24px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const SecretManifestCardStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestCardStyled',
})`
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  @media (min-width: 640px) {
    padding: 24px;
    border-radius: 16px;
  }
`

export const SecretManifestCardTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-SecretManifestCardTitleStyled',
})`
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 4px;

  @media (min-width: 640px) {
    font-size: 20px;
    gap: 8px;
  }

  svg {
    width: 16px;
    height: 16px;

    @media (min-width: 640px) {
      width: 20px;
      height: 20px;
    }
  }
`

export const SecretManifestListStyled = styled.ul.withConfig({
  componentId: 'keydi-SecretManifestListStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 640px) {
    gap: 12px;
  }
`

export const SecretManifestListItemStyled = styled.li.withConfig({
  componentId: 'keydi-SecretManifestListItemStyled',
})`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #334155;
  font-size: 14px;
  font-weight: 400;

  @media (min-width: 640px) {
    font-size: 16px;
  }

  span:first-child {
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 2px;
  }

  span:last-child {
    strong {
      font-weight: 600;
    }
  }
`

export const SecretManifestHelpSectionStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestHelpSectionStyled',
})`
  background: linear-gradient(to bottom right, #fffbeb, #fff7ed);
  padding: 2rem;
  border-radius: 24px;
  border: 1px solid rgb(253 230 138);
`

export const SecretManifestHelpContentStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestHelpContentStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: #475569;
  line-height: 1.6;

  > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
  }
`

export const SecretManifestHelpParagraphStyled = styled.p.withConfig({
  componentId: 'keydi-SecretManifestHelpParagraphStyled',
})`
  font-size: 18px;
  margin: 0;

  strong {
    color: #1e293b;
    font-weight: 700;
  }
`

export const SecretManifestHelpLinkStyled = styled.a.withConfig({
  componentId: 'keydi-SecretManifestHelpLinkStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  color: #059669;
  font-weight: 600;
  text-decoration: underline;
`

export const SecretManifestTestSectionStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestTestSectionStyled',
})`
  background: linear-gradient(to bottom right, #f0fdf4, #dcfce7);
  padding: 32px;
  border-radius: 24px;
  border: 1px solid #86efac;
`

export const SecretManifestVolunteerSectionStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestVolunteerSectionStyled',
})`
  background: linear-gradient(to bottom right, #eff6ff, #e0e7ff);
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #c7d2fe;

  @media (min-width: 640px) {
    padding: 32px;
    border-radius: 24px;
  }
`

export const SecretManifestVolunteerCardStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestVolunteerCardStyled',
})`
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #c7d2fe;

  @media (min-width: 640px) {
    padding: 24px;
    border-radius: 16px;
  }
`

export const SecretManifestCtaSectionStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestCtaSectionStyled',
})`
  background: linear-gradient(to right, #dc2626, #ef4444);
  color: white;
  padding: 40px;
  border-radius: 24px;
  text-align: center;
`

export const SecretManifestCtaTextStyled = styled.p.withConfig({
  componentId: 'keydi-SecretManifestCtaTextStyled',
})`
  font-size: 20px;
  color: #fecaca;
  margin-bottom: 24px;
`

export const SecretManifestCtaCardStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestCtaCardStyled',
})`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 24px;
  max-width: 600px;
  margin: 0 auto;
`

export const SecretManifestCtaCardTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-SecretManifestCtaCardTitleStyled',
})`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const SecretManifestContactListStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestContactListStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 18px;
`

export const SecretManifestContactItemStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestContactItemStyled',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  svg {
    width: 20px;
    height: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;

    &:hover {
      color: #fecaca;
    }
  }
`

export const SecretManifestNoteStyled = styled.p.withConfig({
  componentId: 'keydi-SecretManifestNoteStyled',
})`
  margin-top: 24px;
  color: #fecaca;
  font-size: 14px;
`

export const SecretManifestTestBlockStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestTestBlockStyled',
})`
  background: linear-gradient(to bottom right, #ecfdf5, #d1fae5);
  padding: 32px;
  border-radius: 24px;
  border: 1px solid #34d399;
`

export const SecretManifestTestBlockTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-SecretManifestTestBlockTitleStyled',
})`
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  text-align: left;
`

export const SecretManifestTestBlockDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-SecretManifestTestBlockDescriptionStyled',
})`
  font-size: 18px;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 24px;
`

export const SecretManifestTestBlockCardStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestTestBlockCardStyled',
})`
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #34d399;
  margin-top: 16px;
`

export const SecretManifestTestBlockCardTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-SecretManifestTestBlockCardTitleStyled',
})`
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
`

export const SecretManifestTestBlockListStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestTestBlockListStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SecretManifestTestBlockListItemStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestTestBlockListItemStyled',
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

export const SecretManifestTestBlockRequirementsStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestTestBlockRequirementsStyled',
})`
  background: #ecfdf5;
  padding: 16px;
  border-radius: 12px;
  margin-top: 24px;
`

export const SecretManifestTestBlockRequirementsTitleStyled = styled.p.withConfig(
  { componentId: 'keydi-SecretManifestTestBlockRequirementsTitleStyled' },
)`
  font-size: 14px;
  color: #475569;
  margin-bottom: 8px;

  strong {
    color: #059669;
    font-weight: 700;
  }
`

export const SecretManifestTestBlockRequirementsListStyled = styled.div.withConfig(
  { componentId: 'keydi-SecretManifestTestBlockRequirementsListStyled' },
)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  color: #64748b;
  margin: 8px 0;

  div {
    display: flex;
    align-items: center;

    span:first-child {
      margin-right: 8px;
    }
  }
`

export const SecretManifestTestBlockFinalTextStyled = styled.p.withConfig({
  componentId: 'keydi-SecretManifestTestBlockFinalTextStyled',
})`
  font-size: 14px;
  color: #475569;
  font-weight: 600;
  margin-top: 12px;
`

export const SecretManifestVolunteerBlockStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestVolunteerBlockStyled',
})`
  background: linear-gradient(to bottom right, #eff6ff, #e0e7ff);
  padding: 32px;
  border-radius: 24px;
  border: 1px solid #3b82f6;
  margin: 32px 0;
`

export const SecretManifestVolunteerBlockTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-SecretManifestVolunteerBlockTitleStyled',
})`
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: #2563eb;
    width: 24px;
    height: 24px;
  }

  @media (min-width: 640px) {
    font-size: 28px;
    gap: 16px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`

export const SecretManifestVolunteerBlockDescriptionStyled = styled.p.withConfig(
  { componentId: 'keydi-SecretManifestVolunteerBlockDescriptionStyled' },
)`
  font-size: 18px;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 24px;

  @media (min-width: 640px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`

export const SecretManifestVolunteerBlockCardStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestVolunteerBlockCardStyled',
})`
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #3b82f6;

  @media (min-width: 640px) {
    padding: 32px;
    border-radius: 20px;
  }
`

export const SecretManifestVolunteerBlockCardTitleStyled = styled.h3.withConfig(
  { componentId: 'keydi-SecretManifestVolunteerBlockCardTitleStyled' },
)`
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;

  @media (min-width: 640px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`

export const SecretManifestVolunteerBlockListStyled = styled.ul.withConfig({
  componentId: 'keydi-SecretManifestVolunteerBlockListStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 640px) {
    gap: 12px;
  }
`

export const SecretManifestVolunteerBlockListItemStyled = styled.li.withConfig({
  componentId: 'keydi-SecretManifestVolunteerBlockListItemStyled',
})`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 16px;
  color: #475569;

  @media (min-width: 640px) {
    font-size: 18px;
  }

  span:first-child {
    color: #2563eb;
    font-weight: 700;
    font-size: 20px;
    flex-shrink: 0;
  }

  strong {
    color: #1e293b;
    font-weight: 700;
  }
`

export const SecretManifestFinalCtaStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestFinalCtaStyled',
})`
  background: linear-gradient(to right, #e11d48, #dc2626);
  color: white;
  padding: 40px;
  border-radius: 24px;
  text-align: center;
  margin-top: 32px;
`

export const SecretManifestFinalCtaTextStyled = styled.p.withConfig({
  componentId: 'keydi-SecretManifestFinalCtaTextStyled',
})`
  font-size: 20px;
  color: #fecaca;
  margin-bottom: 24px;

  @media (min-width: 640px) {
    font-size: 22px;
  }
`

export const SecretManifestFinalCtaCardStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestFinalCtaCardStyled',
})`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 24px;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 640px) {
    padding: 32px;
    border-radius: 20px;
    max-width: 700px;
  }
`

export const SecretManifestFinalCtaCardTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-SecretManifestFinalCtaCardTitleStyled',
})`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;

  @media (min-width: 640px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`

export const SecretManifestFinalCtaContactListStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestFinalCtaContactListStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 18px;

  @media (min-width: 640px) {
    gap: 16px;
    font-size: 20px;
  }
`

export const SecretManifestFinalCtaContactItemStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestFinalCtaContactItemStyled',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  svg {
    width: 20px;
    height: 20px;

    @media (min-width: 640px) {
      width: 24px;
      height: 24px;
    }
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;

    &:hover {
      color: #fecaca;
    }
  }

  span {
    font-weight: 600;
  }

  .emoji {
    font-size: 24px;

    @media (min-width: 640px) {
      font-size: 28px;
    }
  }
`

export const SecretManifestFinalCtaNoteStyled = styled.p.withConfig({
  componentId: 'keydi-SecretManifestFinalCtaNoteStyled',
})`
  margin-top: 24px;
  color: #fecaca;
  font-size: 14px;

  @media (min-width: 640px) {
    font-size: 16px;
  }
`

export const SecretManifestLanguageToggleStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestLanguageToggleStyled',
})`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 20;

  @media (min-width: 640px) {
    top: 16px;
    left: 16px;
  }
`

export const SecretManifestLanguageContainerStyled = styled.div.withConfig({
  componentId: 'keydi-SecretManifestLanguageContainerStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 999px;
  padding: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`

export const SecretManifestLanguageButtonStyled = styled.button.withConfig({
  componentId: 'keydi-SecretManifestLanguageButtonStyled',
})<{
  $active?: boolean
}>`
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  ${({ $active }) =>
    $active
      ? `
    background: linear-gradient(to right, #e11d48, #dc2626);
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
