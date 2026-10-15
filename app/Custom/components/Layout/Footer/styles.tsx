import { styled } from 'styled-components'
import { SiteLink as Link } from 'app/Custom/components/SiteLink'

export const FooterWrapperStyled = styled.div.withConfig({
  componentId: 'keydi-FooterWrapperStyled',
})``

export const FooterStyled = styled.div.withConfig({
  componentId: 'keydi-FooterStyled',
})`
  max-width: 80rem;
  margin: 0 auto;
`

export const FooterColumnsStyled = styled.div.withConfig({
  componentId: 'keydi-FooterColumnsStyled',
})`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const FooterColumnStyled = styled.div.withConfig({
  componentId: 'keydi-FooterColumnStyled',
})`
  padding: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    &:nth-child(1),
    &:nth-child(2) {
      border-right: 1px solid #d1d5db;
    }

    &:nth-child(2) {
      text-align: left;
    }

    &:nth-child(3) {
      text-align: left;
    }
  }
`

export const FooterLogoContainerStyled = styled.div.withConfig({
  componentId: 'keydi-FooterLogoContainerStyled',
})`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;

  img {
    height: 6rem;
    width: auto;
  }
`

export const FooterDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-FooterDescriptionStyled',
})`
  color: #475569;
  font-size: 0.875rem;
  line-height: 1.625;
`

export const FooterNavStyled = styled.nav.withConfig({
  componentId: 'keydi-FooterNavStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FooterNavLinkStyled = styled(Link).withConfig({
  componentId: 'keydi-FooterNavLinkStyled',
})`
  color: #475569;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #059669;
  }
`

export const FooterHeadingStyled = styled.h4.withConfig({
  componentId: 'keydi-FooterHeadingStyled',
})`
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 1rem;
`

export const FooterContactListStyled = styled.ul.withConfig({
  componentId: 'keydi-FooterContactListStyled',
})`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FooterContactItemStyled = styled.li.withConfig({
  componentId: 'keydi-FooterContactItemStyled',
})`
  color: #475569;
  font-size: 0.875rem;
`

export const FooterContactLinkStyled = styled.a.withConfig({
  componentId: 'keydi-FooterContactLinkStyled',
})`
  font-weight: 500;
  color: #1e293b;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #059669;
  }
`

export const FooterButtonStyled = styled.a.withConfig({
  componentId: 'keydi-FooterButtonStyled',
})`
  font-size: 0.875rem;
  font-weight: bold;
  color: #059669;
  text-decoration: none;
  transition: color 0.2s ease;
  margin-top: 1rem;
  display: inline-block;

  &:hover {
    color: #047857;
  }
`

export const FooterCopyWrapperStyled = styled.div.withConfig({
  componentId: 'keydi-FooterCopyWrapperStyled',
})`
  border-top: 1px solid #d1d5db;
  padding-top: 2rem;
  padding-bottom: 3rem;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const FooterCopyStyled = styled.p.withConfig({
  componentId: 'keydi-FooterCopyStyled',
})`
  color: #64748b;
  font-size: 0.875rem;
`
