import React, { useCallback } from 'react'
import { X } from 'lucide-react'
import {
  ImageModalOverlayStyled,
  ImageModalStyled,
  ImageModalCloseStyled,
  ImageModalImageStyled,
  ImageModalContentStyled,
  ImageModalTitleStyled,
  ImageModalDescriptionStyled,
  ImageModalLinkStyled,
} from './ImageModal.styles'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  image: {
    src: string
    alt: string
    title: string
    description?: string
    link?: string
  }
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  image,
}) => {
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    },
    [onClose],
  )

  const handleEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose],
  )

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleEscapeKey])

  if (!isOpen) {
    return null
  }

  return (
    <ImageModalOverlayStyled onClick={handleOverlayClick}>
      <ImageModalStyled>
        <ImageModalCloseStyled onClick={onClose}>
          <X size={16} />
        </ImageModalCloseStyled>
        <ImageModalImageStyled src={image.src} alt={image.alt} />
        <ImageModalContentStyled>
          <ImageModalTitleStyled>{image.title}</ImageModalTitleStyled>
          {image.description && (
            <ImageModalDescriptionStyled>
              {image.description}
            </ImageModalDescriptionStyled>
          )}
          {image.link && (
            <ImageModalLinkStyled
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Подробнее на сайте производителя
            </ImageModalLinkStyled>
          )}
        </ImageModalContentStyled>
      </ImageModalStyled>
    </ImageModalOverlayStyled>
  )
}
