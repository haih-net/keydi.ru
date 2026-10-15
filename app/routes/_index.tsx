import type { MetaFunction } from 'react-router'
import { Home } from '../Custom/components/pages/MainPage/Home'
export const meta: MetaFunction = () => [
  { title: 'Кейди — безопасность в движении' },
  {
    name: 'description',
    content:
      'Кейди — безопасность в движении — информационный сайт системы Кейди.',
  },
  { tagName: 'link', rel: 'canonical', href: 'https://keydi.ru/' },
]
export default Home
