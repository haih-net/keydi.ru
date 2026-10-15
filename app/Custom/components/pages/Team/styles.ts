import { styled } from 'styled-components'

export const TeamStyled = styled.div.withConfig({
  componentId: 'keydi-TeamStyled',
})`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;
`

export const TeamHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-TeamHeaderStyled',
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

export const TeamSectionStyled = styled.div.withConfig({
  componentId: 'keydi-TeamSectionStyled',
})`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  margin-bottom: 64px;
`

export const TeamContainerStyled = styled.div.withConfig({
  componentId: 'keydi-TeamContainerStyled',
})`
  padding: 48px;
`

export const TeamBadgeStyled = styled.div.withConfig({
  componentId: 'keydi-TeamBadgeStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f1f5f1;
  color: #1e293b;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  margin: 24px;

  svg {
    width: 16px;
    height: 16px;
  }
`

export const TeamDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-TeamDescriptionStyled',
})`
  font-size: 20px;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`

export const TeamGridStyled = styled.div.withConfig({
  componentId: 'keydi-TeamGridStyled',
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;

  @media (min-width: 1024px) {
    & > * {
      width: 30%;
    }
  }

  @media (min-width: 640px) and (max-width: 1023px) {
    & > * {
      width: 45%;
    }
  }

  @media (max-width: 639px) {
    & > * {
      width: 100%;
    }
  }
`

export const TeamMemberStyled = styled.div.withConfig({
  componentId: 'keydi-TeamMemberStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transform: translateY(-4px);
  }
`

export const TeamMemberImageStyled = styled.div.withConfig({
  componentId: 'keydi-TeamMemberImageStyled',
})`
  width: 192px;
  height: 192px;
  margin: 0 auto 24px auto;
  border-radius: 12px;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  svg {
    width: 48px;
    height: 48px;
    color: white;
  }
`

export const TeamMemberNameStyled = styled.h3.withConfig({
  componentId: 'keydi-TeamMemberNameStyled',
})`
  font-size: 20px;
  font-weight: bold;
  color: #1e293b;
  margin: 0 0 8px 0;
`

export const TeamMemberRoleStyled = styled.p.withConfig({
  componentId: 'keydi-TeamMemberRoleStyled',
})`
  font-size: 16px;
  color: #059669;
  font-weight: 500;
  margin: 0 0 16px 0;
`

export const TeamMemberBioStyled = styled.p.withConfig({
  componentId: 'keydi-TeamMemberBioStyled',
})`
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
`

export const TeamStatsStyled = styled.div.withConfig({
  componentId: 'keydi-TeamStatsStyled',
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  margin-top: 64px;
`

export const TeamStatStyled = styled.div.withConfig({
  componentId: 'keydi-TeamStatStyled',
})`
  text-align: center;

  .number {
    font-size: 48px;
    font-weight: bold;
    color: #0369a1;
    margin-bottom: 8px;
  }

  .label {
    font-size: 16px;
    color: #666;
  }
`

export const TeamMissionStyled = styled.div.withConfig({
  componentId: 'keydi-TeamMissionStyled',
})`
  background: white;
  border-radius: 24px;
  padding: 48px;
  position: relative;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  .mission-content {
    position: relative;
    z-index: 10;
  }

  .mission-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 24px;
    color: #1e293b;
    text-align: center;
  }

  .mission-description {
    font-size: 20px;
    color: #475569;
    max-width: 1024px;
    margin: 0 auto;
    line-height: 1.75;
    text-align: center;
  }
`

export const TeamAboutStyled = styled.div.withConfig({
  componentId: 'keydi-TeamAboutStyled',
})`
  margin-top: 64px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  padding: 32px;
  border: 1px solid #fecaca;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  .about-title {
    font-size: 24px;
    font-weight: bold;
    color: #1e293b;
    margin-bottom: 24px;
    text-align: center;
  }

  .about-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  .about-section {
    h4 {
      font-size: 18px;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 16px;
    }

    p {
      color: #334155;
      line-height: 1.75;
      margin: 0;

      strong {
        font-weight: 600;
      }
    }

    ul {
      color: #334155;
      line-height: 1.75;
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        margin-bottom: 8px;
        display: flex;
        align-items: flex-start;
        gap: 8px;

        &:before {
          content: '•';
          color: #059669;
          font-weight: bold;
          flex-shrink: 0;
        }
      }

      a {
        color: #059669;
        text-decoration: underline;
        transition: color 0.2s ease;

        &:hover {
          color: #047857;
        }
      }
    }
  }
`
