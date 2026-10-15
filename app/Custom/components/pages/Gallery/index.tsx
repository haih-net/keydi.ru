import React, { useState, useCallback } from 'react'
import { Camera } from 'lucide-react'
import {
  GalleryStyled,
  GalleryHeaderStyled,
  GallerySectionStyled,
  GalleryContainerStyled,
  GalleryBadgeStyled,
  GalleryDescriptionStyled,
  GalleryGridStyled,
  GalleryTitleGradientStyled,
} from './styles'
import { ImageModal } from './components/ImageModal'
import { GalleryItem } from './components/GalleryItem'
import { galleryData } from './gallery-data'

export const GalleryPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryData)[0] | null
  >(null)

  const handleOpenModal = useCallback((image: (typeof galleryData)[0]) => {
    setIsOpen(true)
    setSelectedImage(image)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsOpen(false)
    setSelectedImage(null)
  }, [])

  return (
    <GalleryStyled>
      {/* Header Section */}
      <GalleryHeaderStyled>
        <GalleryBadgeStyled>
          <Camera size={16} />
          Фотоматериалы
        </GalleryBadgeStyled>
        <GalleryTitleGradientStyled>
          <span>Галерея</span> проекта
        </GalleryTitleGradientStyled>
        <GalleryDescriptionStyled>
          Визуальное представление системы Кейди: от электронных компонентов до
          реальных испытаний на дорогах.
        </GalleryDescriptionStyled>
      </GalleryHeaderStyled>

      {/* Gallery Grid Section */}
      <GallerySectionStyled>
        <GalleryContainerStyled>
          <GalleryGridStyled>
            {galleryData.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
                onImageClick={handleOpenModal}
              />
            ))}
          </GalleryGridStyled>
        </GalleryContainerStyled>
      </GallerySectionStyled>

      {/* Image Modal */}
      <ImageModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        image={{
          src: selectedImage?.image || '',
          alt: selectedImage?.title || '',
          title: selectedImage?.title || '',
          description: selectedImage?.description || '',
          link: selectedImage?.link,
        }}
      />
    </GalleryStyled>
  )
}
