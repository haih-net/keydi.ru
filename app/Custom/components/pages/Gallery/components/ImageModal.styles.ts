import { styled } from 'styled-components'

export const ImageModalOverlayStyled = styled.div.withConfig({
  componentId: 'keydi-ImageModalOverlayStyled',
})`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

export const ImageModalStyled = styled.div.withConfig({
  componentId: 'keydi-ImageModalStyled',
})`
  position: relative;
  max-width: 4xl;
  max-height: 90vh;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
`

export const ImageModalCloseStyled = styled.button.withConfig({
  componentId: 'keydi-ImageModalCloseStyled',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: colors 0.2s ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  height: 2.25rem;
  width: 2.25rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  svg {
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`

export const ImageModalImageStyled = styled.img.withConfig({
  componentId: 'keydi-ImageModalImageStyled',
})`
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
`

export const ImageModalContentStyled = styled.div.withConfig({
  componentId: 'keydi-ImageModalContentStyled',
})`
  padding: 1.5rem;
`

export const ImageModalTitleStyled = styled.h3.withConfig({
  componentId: 'keydi-ImageModalTitleStyled',
})`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 0.5rem;
`

export const ImageModalDescriptionStyled = styled.p.withConfig({
  componentId: 'keydi-ImageModalDescriptionStyled',
})`
  color: #475569;
  margin-bottom: 0;
`

export const ImageModalLinkStyled = styled.a.withConfig({
  componentId: 'keydi-ImageModalLinkStyled',
})`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  color: #059669;
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #047857;
  }
`
