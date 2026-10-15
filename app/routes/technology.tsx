import type { MetaFunction } from 'react-router'
import { TechnologyPage } from '../Custom/components/pages/Technology'
export const meta: MetaFunction = () => [
  { title: 'О технологии' },
  {
    name: 'description',
    content: 'О технологии — информационный сайт системы Кейди.',
  },
  { tagName: 'link', rel: 'canonical', href: 'https://keydi.ru/technology' },
]
export default TechnologyPage
