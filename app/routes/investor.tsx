import type { MetaFunction } from 'react-router'
import { InvestorPage } from '../Custom/components/pages/Investor'
export const meta: MetaFunction = () => [
  { title: 'Для инвестора' },
  {
    name: 'description',
    content: 'Для инвестора — информационный сайт системы Кейди.',
  },
  { tagName: 'link', rel: 'canonical', href: 'https://keydi.ru/investor' },
]
export default InvestorPage
