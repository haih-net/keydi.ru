import type { MetaFunction } from 'react-router'
import { VideoPage } from '../Custom/components/pages/Video'
export const meta: MetaFunction = () => [
  { title: 'Видео' },
  {
    name: 'description',
    content: 'Видео — информационный сайт системы Кейди.',
  },
  { tagName: 'link', rel: 'canonical', href: 'https://keydi.ru/video' },
]
export default VideoPage
