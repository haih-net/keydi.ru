import type { MetaFunction } from 'react-router'
import { ContactPage } from '../Custom/components/pages/Contact'
export const meta: MetaFunction = () => [
  { title: 'Контакты' },
  {
    name: 'description',
    content: 'Контакты — информационный сайт системы Кейди.',
  },
  { tagName: 'link', rel: 'canonical', href: 'https://keydi.ru/contacts' },
]
export default ContactPage
