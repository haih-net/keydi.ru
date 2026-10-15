import { styled } from 'styled-components'

export const GalleryStyled = styled.div.withConfig({
  componentId: 'keydi-GalleryStyled',
})`
  min-height: 100vh;
  padding: 80px 0;
`

export const GalleryHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-GalleryHeaderStyled',
})`
  text-align: center;
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 4rem;
  margin-bottom: 4rem;
`

export const GalleryBadgeStyled = styled.div.withConfig({
  componentId: 'keydi-GalleryBadgeStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #faf5ff;
  color: rgb(126 34 206);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`

export const GalleryDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-GalleryDescriptionStyled',
})`
  font-size: 1.25rem;
  color: #475569;
  line-height: 1.6;
  max-width: 48rem;
  margin: 0 auto;
`

export const GallerySectionStyled = styled.section.withConfig({
  componentId: 'keydi-GallerySectionStyled',
})`
  /* padding: 4rem 0; */
`

export const GalleryContainerStyled = styled.div.withConfig({
  componentId: 'keydi-GalleryContainerStyled',
})`
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 1rem;
`

export const GalleryGridStyled = styled.div.withConfig({
  componentId: 'keydi-GalleryGridStyled',
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* gap: 2rem;
  margin-bottom: 4rem; */
`

export const PatentItemStyled = styled.div.withConfig({
  componentId: 'keydi-PatentItemStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: none;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`

export const PatentContentStyled = styled.div.withConfig({
  componentId: 'keydi-PatentContentStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.5rem;
`

export const PatentHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-PatentHeaderStyled',
})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
`

export const PatentIconContainerStyled = styled.div.withConfig({
  componentId: 'keydi-PatentIconContainerStyled',
})`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const PatentIconStyled = styled.div.withConfig({
  componentId: 'keydi-PatentIconStyled',
})`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #22c55e, #15803d);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  ${PatentItemStyled}:hover & {
    transform: scale(1.1);
  }
`

export const PatentNumberStyled = styled.div.withConfig({
  componentId: 'keydi-PatentNumberStyled',
})<{ $color?: 'green' | 'blue' }>`
  display: inline-flex;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  padding: 0.125rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 0.5rem;
  width: fit-content;

  ${({ $color }) =>
    $color === 'blue'
      ? `
    background: #dbeafe;
    color: #1d4ed8;

    &:hover {
      background: #bfdbfe;
    }
  `
      : `
    background: #dcfce7;
    color: #15803d;

    &:hover {
      background: #bbf7d0;
    }
  `}
`

export const PatentTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-PatentTitleStyled',
})`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.25;
  margin-bottom: 0;
`

export const PatentDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-PatentDescriptionStyled',
})`
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`

export const PatentButtonStyled = styled.button.withConfig({
  componentId: 'keydi-PatentButtonStyled',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid #e2e8f0;
  background: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: #475569;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background: #f8fafc;
    color: #1e293b;
  }
`

export const PatentsStyled = styled.div.withConfig({
  componentId: 'keydi-PatentsStyled',
})`
  min-height: 100vh;
  padding: 80px 0;

  @media (min-width: 1200px) {
    margin: auto;
    max-width: 1200px;
  }
`

export const PatentsHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-PatentsHeaderStyled',
})`
  text-align: center;
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 4rem;
  margin-bottom: 4rem;
`

export const PatentsBadgeStyled = styled.div.withConfig({
  componentId: 'keydi-PatentsBadgeStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #f0fdf4;
  color: #15803d;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 24px;
`

export const PatentsDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-PatentsDescriptionStyled',
})`
  font-size: 1.25rem;
  color: #475569;
  line-height: 1.6;
  max-width: 48rem;
  margin: 0 auto;
`

export const PatentsSectionStyled = styled.section.withConfig({
  componentId: 'keydi-PatentsSectionStyled',
})`
  /* padding: 4rem 0; */
`

export const PatentsContainerStyled = styled.div.withConfig({
  componentId: 'keydi-PatentsContainerStyled',
})`
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 1rem;
`

export const PatentsGridStyled = styled.div.withConfig({
  componentId: 'keydi-PatentsGridStyled',
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const PatentsAuthorsSectionStyled = styled.section.withConfig({
  componentId: 'keydi-PatentsAuthorsSectionStyled',
})`
  padding: 4rem 0;
  margin-top: 4rem;
`

export const PatentsAuthorsContainerStyled = styled.div.withConfig({
  componentId: 'keydi-PatentsAuthorsContainerStyled',
})`
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 1rem;
`

export const PatentsAuthorsGridStyled = styled.div.withConfig({
  componentId: 'keydi-PatentsAuthorsGridStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid #dcfce7;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

export const PatentsAuthorsColumnStyled = styled.div.withConfig({
  componentId: 'keydi-PatentsAuthorsColumnStyled',
})``

export const PatentsAuthorsTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-PatentsAuthorsTitleStyled',
})`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: #16a34a;
  }
`

export const PatentsAuthorsListStyled = styled.ul.withConfig({
  componentId: 'keydi-PatentsAuthorsListStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const PatentsAuthorItemStyled = styled.li.withConfig({
  componentId: 'keydi-PatentsAuthorItemStyled',
})`
  font-size: 1rem;
  color: #334155;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    background: #22c55e;
    border-radius: 50%;
    flex-shrink: 0;
  }
`

export const PatentsOwnerStyled = styled.div.withConfig({
  componentId: 'keydi-PatentsOwnerStyled',
})``

export const PatentsAuthorTitleCenteredStyled = styled.h2.withConfig({
  componentId: 'keydi-PatentsAuthorTitleCenteredStyled',
})`
  font-size: 1.875rem;
  font-weight: bold;
  color: #1e293b;
  text-align: center;
  margin-bottom: 3rem;
`

export const PatentsOwnerTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-PatentsOwnerTitleStyled',
})`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 1rem;
`

export const PatentsOwnerCardStyled = styled.div.withConfig({
  componentId: 'keydi-PatentsOwnerCardStyled',
})`
  background: linear-gradient(to right, #f0fdf4, #eff6ff);
  border-radius: 1rem;
  padding: 1.5rem;
`

export const PatentsOwnerNameStyled = styled.h4.withConfig({
  componentId: 'keydi-PatentsOwnerNameStyled',
})`
  font-weight: bold;
  font-size: 1.125rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
`

export const PatentsOwnerInfoStyled = styled.p.withConfig({
  componentId: 'keydi-PatentsOwnerInfoStyled',
})`
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
`

export const PatentsFooterStyled = styled.section.withConfig({
  componentId: 'keydi-PatentsFooterStyled',
})`
  text-align: center;
  padding: 4rem 0;
`

export const PatentsFooterContainerStyled = styled.div.withConfig({
  componentId: 'keydi-PatentsFooterContainerStyled',
})`
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 1rem;
`

export const PatentsFooterCardStyled = styled.div.withConfig({
  componentId: 'keydi-PatentsFooterCardStyled',
})`
  background: linear-gradient(to right, #16a34a, #2563eb);
  border-radius: 1.5rem;
  padding: 3rem;
  color: white;
`

export const PatentsFooterTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-PatentsFooterTitleStyled',
})`
  font-size: 1.875rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
`

export const PatentsFooterDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-PatentsFooterDescriptionStyled',
})`
  font-size: 1.25rem;
  color: #dcfce7;
  line-height: 1.6;
  max-width: 64rem;
  margin: 0 auto;
`

export const AuthorPatentItemStyled = styled.div.withConfig({
  componentId: 'keydi-AuthorPatentItemStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  border: none;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`

export const AuthorPatentContentStyled = styled.div.withConfig({
  componentId: 'keydi-AuthorPatentContentStyled',
})`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: flex-start;
`

export const AuthorPatentInfoStyled = styled.div.withConfig({
  componentId: 'keydi-AuthorPatentInfoStyled',
})``

export const PatentsTitleGradientStyled = styled.h1.withConfig({
  componentId: 'keydi-PatentsTitleGradientStyled',
})`
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;

  span {
    background: linear-gradient(to right, #16a34a, #2563eb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
