import React, { useState } from 'react'
import { Play } from 'lucide-react'
import {
  VideoStyled,
  VideoHeaderStyled,
  VideoSectionStyled,
  VideoContainerStyled,
  VideoPlayerStyled,
  VideoThumbnailStyled,
  VideoPlayButtonStyled,
  VideoBadgeStyled,
  VideoDescriptionStyled,
  VideoGridStyled,
} from './styles'
import { BaseGradientTitleStyled } from 'app/Custom/components/Layout/styles'

const videoData = [
  {
    id: 1,
    title: 'Система Кейди - Демонстрация работы на RuTube',
    description: 'Демонстрация работы системы в реальных дорожных условиях',
    rutubeId: 'd4753d32fa3254c6e47346ff1c1dacb0',
    thumbnail: '/img/video/1.jpg',
  },
  {
    id: 2,
    title: 'Демонстрация работы системы Кейди 1',
    description: 'Результаты тестирования прототипа в г. Уфа',
    rutubeId: 'c78b7adb768dc190a5628233534f1ed7',
    thumbnail: '/img/video-thumb-2.jpg',
  },
  {
    id: 3,
    title: 'Демонстрация работы системы Кейди 2',
    description: 'Подробное объяснение алгоритма работы Кейди',
    rutubeId: 'ba55e9b803522c828d144650237c9ae8',
    thumbnail: '/img/video-thumb-3.jpg',
  },
]

export const VideoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = React.useCallback(() => {
    setIsPlaying(true)
  }, [])
  return (
    <VideoStyled>
      {/* Header Section */}
      <VideoHeaderStyled>
        <VideoBadgeStyled>
          <Play size={16} />
          Демонстрация технологии
        </VideoBadgeStyled>
        <BaseGradientTitleStyled>
          Видео <span>презентация</span>
        </BaseGradientTitleStyled>
        <VideoDescriptionStyled>
          Посмотрите, как работает наша технология безопасности транспорта в
          реальных условиях. Демонстрация ключевых возможностей и преимуществ
          системы.
        </VideoDescriptionStyled>
      </VideoHeaderStyled>

      {/* Main Video Section */}
      <VideoSectionStyled>
        <VideoContainerStyled>
          <VideoPlayerStyled>
            {!isPlaying ? (
              <VideoThumbnailStyled
                style={{ backgroundImage: `url(${videoData[0].thumbnail})` }}
                onClick={handlePlayClick}
              >
                <VideoPlayButtonStyled>
                  <Play size={32} />
                </VideoPlayButtonStyled>
              </VideoThumbnailStyled>
            ) : (
              <iframe
                src={`https://rutube.ru/play/embed/${videoData[0].rutubeId}`}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '16px',
                }}
                allow="clipboard-write; autoplay; fullscreen"
                allowFullScreen
                title={videoData[0].title}
              />
            )}
          </VideoPlayerStyled>
        </VideoContainerStyled>
      </VideoSectionStyled>

      {/* Video Grid Section */}
      <VideoSectionStyled>
        <VideoGridStyled>
          {videoData.slice(1).map((video) => (
            <VideoContainerStyled key={video.id}>
              <VideoPlayerStyled>
                <iframe
                  src={`https://rutube.ru/play/embed/${video.rutubeId}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '16px',
                  }}
                  allow="clipboard-write; autoplay; fullscreen"
                  allowFullScreen
                  title={video.title}
                />
              </VideoPlayerStyled>
            </VideoContainerStyled>
          ))}
        </VideoGridStyled>
      </VideoSectionStyled>
    </VideoStyled>
  )
}
