import React, { useCallback } from 'react'
import { ZoomIn } from 'lucide-react'
import {
  GalleryItemStyled,
  GalleryImageStyled,
  GalleryOverlayStyled,
  GalleryButtonStyled,
} from '../styles'

interface GalleryItemProps {
  item: {
    id: number
    title: string
    category: string
    image: string
    views: string
  }
  onImageClick: (item: GalleryItemProps['item']) => void
}

export const GalleryItem: React.FC<GalleryItemProps> = ({
  item,
  onImageClick,
}) => {
  const handleClick = useCallback(() => {
    onImageClick(item)
  }, [onImageClick, item])

  return (
    <GalleryItemStyled key={item.id}>
      <GalleryImageStyled onClick={handleClick}>
        <img src={item.image} alt={item.title} />
        <GalleryOverlayStyled>
          <GalleryButtonStyled>
            <ZoomIn size={16} />
            Увеличить
          </GalleryButtonStyled>
        </GalleryOverlayStyled>
      </GalleryImageStyled>
    </GalleryItemStyled>
  )
}
