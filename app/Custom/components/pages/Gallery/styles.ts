import { styled } from 'styled-components'

export const GalleryStyled = styled.div.withConfig({
  componentId: 'keydi-GalleryStyled',
})`
  min-height: 100vh;
  padding: 80px 0;

  @media (min-width: 1200px) {
    margin: auto;
    max-width: 1200px;
  }
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
  margin: 24px;
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
  padding: 4rem 0;
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
  gap: 2rem;
  margin-bottom: 4rem;
`

export const GalleryItemStyled = styled.div.withConfig({
  componentId: 'keydi-GalleryItemStyled',
})`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`

export const GalleryImageStyled = styled.div.withConfig({
  componentId: 'keydi-GalleryImageStyled',
})`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`

export const GalleryOverlayStyled = styled.div.withConfig({
  componentId: 'keydi-GalleryOverlayStyled',
})`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${GalleryItemStyled}:hover & {
    opacity: 1;
  }
`

export const GalleryButtonStyled = styled.button.withConfig({
  componentId: 'keydi-GalleryButtonStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`

export const GalleryInfoStyled = styled.div.withConfig({
  componentId: 'keydi-GalleryInfoStyled',
})`
  padding: 1rem;
`

export const GalleryTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-GalleryTitleStyled',
})`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
`

export const GalleryCategoryStyled = styled.p.withConfig({
  componentId: 'keydi-GalleryCategoryStyled',
})`
  font-size: 0.875rem;
  color: #64748b;
`

export const GalleryStatsStyled = styled.div.withConfig({
  componentId: 'keydi-GalleryStatsStyled',
})`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #64748b;
`

export const GalleryTitleGradientStyled = styled.h1.withConfig({
  componentId: 'keydi-GalleryTitleGradientStyled',
})`
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;

  span {
    background: linear-gradient(to right, #9333ea, #2563eb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const GalleryStatItemStyled = styled.div.withConfig({
  componentId: 'keydi-GalleryStatItemStyled',
})`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`
