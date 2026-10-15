import type { MetaFunction } from 'react-router'
import { PatentsPage } from '../Custom/components/pages/Patents'
export const meta: MetaFunction = () => [
  { title: 'Наши патенты' },
  {
    name: 'description',
    content: 'Наши патенты — информационный сайт системы Кейди.',
  },
  { tagName: 'link', rel: 'canonical', href: 'https://keydi.ru/patents' },
]
export default PatentsPage
