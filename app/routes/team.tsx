import type { MetaFunction } from 'react-router'
import { TeamPage } from '../Custom/components/pages/Team'
export const meta: MetaFunction = () => [
  { title: 'Команда' },
  {
    name: 'description',
    content: 'Команда — информационный сайт системы Кейди.',
  },
  { tagName: 'link', rel: 'canonical', href: 'https://keydi.ru/team' },
]
export default TeamPage
