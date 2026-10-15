import type { MetaFunction } from 'react-router'
import { GalleryPage } from '../Custom/components/pages/Gallery'
export const meta: MetaFunction = () => [
  { title: 'Галерея' },
  {
    name: 'description',
    content: 'Галерея — информационный сайт системы Кейди.',
  },
  { tagName: 'link', rel: 'canonical', href: 'https://keydi.ru/gallery' },
]
export default GalleryPage
