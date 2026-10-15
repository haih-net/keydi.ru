import { styled } from 'styled-components'

export const VideoStyled = styled.div.withConfig({
  componentId: 'keydi-VideoStyled',
})`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;
`

export const VideoHeaderStyled = styled.div.withConfig({
  componentId: 'keydi-VideoHeaderStyled',
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

export const VideoSectionStyled = styled.div.withConfig({
  componentId: 'keydi-VideoSectionStyled',
})`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  margin-bottom: 64px;
`

export const VideoContainerStyled = styled.div.withConfig({
  componentId: 'keydi-VideoContainerStyled',
})`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid #e9d5ff;
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

export const VideoPlayerStyled = styled.div.withConfig({
  componentId: 'keydi-VideoPlayerStyled',
})`
  position: relative;
  aspect-ratio: 16/9;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  /* margin-bottom: 32px; */
`

export const VideoThumbnailStyled = styled.div.withConfig({
  componentId: 'keydi-VideoThumbnailStyled',
})`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #6d28d9 0%, #1d4ed8 100%);
  }
`

export const VideoPlayButtonStyled = styled.div.withConfig({
  componentId: 'keydi-VideoPlayButtonStyled',
})`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  svg {
    width: 32px;
    height: 32px;
    color: #7c3aed;
    margin-left: 4px;
  }
`

export const VideoGridStyled = styled.div.withConfig({
  componentId: 'keydi-VideoGridStyled',
})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

export const VideoCardStyled = styled.div.withConfig({
  componentId: 'keydi-VideoCardStyled',
})`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`

export const VideoCardThumbnailStyled = styled.div.withConfig({
  componentId: 'keydi-VideoCardThumbnailStyled',
})`
  position: relative;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const VideoCardPlayButtonStyled = styled.div.withConfig({
  componentId: 'keydi-VideoCardPlayButtonStyled',
})`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  svg {
    width: 20px;
    height: 20px;
    color: #7c3aed;
    margin-left: 2px;
  }
`

export const VideoCardContentStyled = styled.div.withConfig({
  componentId: 'keydi-VideoCardContentStyled',
})`
  padding: 20px;
`

export const VideoCardTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-VideoCardTitleStyled',
})`
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
`

export const VideoCardDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-VideoCardDescriptionStyled',
})`
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
`

export const VideoBadgeStyled = styled.div.withConfig({
  componentId: 'keydi-VideoBadgeStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f3e8ff;
  color: #7c3aed;
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

export const VideoTitleStyled = styled.div.withConfig({
  componentId: 'keydi-VideoTitleStyled',
})`
  font-size: 48px;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 16px;

  span {
    background: linear-gradient(to right, #7c3aed, #2563eb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

export const VideoDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-VideoDescriptionStyled',
})`
  font-size: 20px;
  color: #475569;
  max-width: 768px;
  margin: 0 auto 32px;
  line-height: 1.6;
`

export const VideoInfoStyled = styled.div.withConfig({
  componentId: 'keydi-VideoInfoStyled',
})`
  text-align: center;
`

export const VideoTitleMainStyled = styled.h3.withConfig({
  componentId: 'keydi-VideoTitleMainStyled',
})`
  font-size: 24px;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 8px;
`

export const VideoDescMainStyled = styled.p.withConfig({
  componentId: 'keydi-VideoDescMainStyled',
})`
  color: #64748b;
  margin-bottom: 16px;
  line-height: 1.6;
`

export const VideoStatsStyled = styled.div.withConfig({
  componentId: 'keydi-VideoStatsStyled',
})`
  display: flex;
  gap: 16px;
  justify-content: center;
  font-size: 14px;
  color: #64748b;
`

export const VideoStatItemStyled = styled.div.withConfig({
  componentId: 'keydi-VideoStatItemStyled',
})`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    width: 14px;
    height: 14px;
  }
`

export const VideoCardStatsStyled = styled.div.withConfig({
  componentId: 'keydi-VideoCardStatsStyled',
})`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  font-size: 12px;
  color: #64748b;
`

export const VideoCardStatItemStyled = styled.div.withConfig({
  componentId: 'keydi-VideoCardStatItemStyled',
})`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    width: 12px;
    height: 12px;
  }
`

export const VideoSectionTitleStyled = styled.h2.withConfig({
  componentId: 'keydi-VideoSectionTitleStyled',
})`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 48px;
`
