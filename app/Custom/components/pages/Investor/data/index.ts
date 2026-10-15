import { Target, ChartColumn, DollarSign } from 'lucide-react'

// Documents data for InvestorPage
export const documentsData = [
  {
    id: 1,
    title: 'Инвестиционное заключение Московского инновационного кластера',
    description:
      'Ознакомьтесь с подробным анализом проекта, включая оценку рынка, бизнес-модель и финансовые прогнозы.',
    buttonText: 'Смотреть отчет',
    pdfUrl:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a445ec51f563cc73b23dea/3ed5fe163__KEYDI_.pdf',
    iconColor: 'emerald' as const,
  },
  {
    id: 2,
    title: 'Профиль на SberUnity',
    description:
      'Проект прошел экспертизу и представлен на платформе для технологических стартапов от Сбера.',
    buttonText: 'Перейти на SberUnity',
    pdfUrl: 'https://sberunity.ru/profile/c6a1ca30-6dd9-4e3d-a91a-7b927fa7704a',
    iconColor: 'blue' as const,
  },
]

// Development stages data
export const stagesData = [
  {
    id: 1,
    number: '1',
    title: 'Стартап',
    status: 'completed' as const,
    description: '«Старт-1»: НИОКР, прототип',
    details: 'Получен грант 2 млн. руб. + 1 млн. руб. учредителя',
    goal: 'MVP',
  },
  {
    id: 2,
    number: '2',
    title: 'Развитие',
    status: 'search' as const,
    description: '«Старт-2»: ОКР. Опытный образец',
    details: 'Планируется 10 млн. руб. от ФСИ + 1,5 млн. руб. соинвестор',
    goal: 'Эффективность системы',
  },
  {
    id: 3,
    number: '3',
    title: 'Инвестиции',
    status: 'future' as const,
    description: 'Производство и установка систем',
    details: '30 млн. руб. + 9 млн. руб. соинвестор',
    goal: 'Сокращение попутных ДТП',
  },
  {
    id: 4,
    number: '4',
    title: 'Производство',
    status: 'future' as const,
    description: 'Серийное производство',
    details: 'От 25 млн. руб. оборот в год',
    goal: 'Прибыль',
  },
]

// Business model data
export const businessModelData = [
  {
    id: 1,
    variant: 'outsourcing' as const,
    title: 'Аутсорсинг производства',
    description:
      'Серийное производство комплектов осуществляется на партнёрских заводах в Китае, что минимизирует затраты.',
  },
  {
    id: 2,
    variant: 'dealers' as const,
    title: 'Дилерская сеть',
    description:
      'Установка и обслуживание системы происходит через сеть сертифицированных автосервисов и салонов по всей России.',
  },
  {
    id: 3,
    variant: 'scaling' as const,
    title: 'Масштабирование',
    description:
      'Модель позволяет быстро охватывать все виды транспорта (легковые, грузовые, автобусы) для максимального охвата рынка.',
  },
]

// Investment scenarios data
export const scenariosData = [
  {
    id: 1,
    title: 'Соинвестирование «Старт-2»',
    details: [
      { label: 'Сумма:', value: '1,5 млн. руб.', color: 'green' },
      { label: 'Срок:', value: '18 месяцев', color: 'default' },
      { label: 'Результат:', value: 'Опытный образец', color: 'default' },
      { label: 'Доля в компании:', value: 'до 30%', color: 'emerald' },
    ],
  },
  {
    id: 2,
    title: 'Инвестирование без грантов',
    details: [
      { label: 'Сумма:', value: '25 млн. руб.', color: 'green' },
      { label: 'Срок:', value: 'до 24 месяцев', color: 'default' },
      {
        label: 'Результат:',
        value: 'Пробная партия 50-100 шт.',
        color: 'default',
      },
      { label: 'Доля в компании:', value: 'от 30%', color: 'emerald' },
    ],
  },
]

// Market opportunities data
export const opportunitiesData = [
  {
    id: 1,
    variant: 'market' as const,
    title: 'Российский рынок',
    description: '55 млн. транспортных средств',
    icon: Target,
  },
  {
    id: 2,
    variant: 'global' as const,
    title: 'Глобальный рынок',
    description: '$15,6 млрд к 2027 году',
    icon: ChartColumn,
  },
  {
    id: 3,
    variant: 'revenue' as const,
    title: 'Потенциальный оборот',
    description: 'От 25 млн. руб./год',
    icon: DollarSign,
  },
]

// Priority directions data
export const priorityData = [
  {
    id: 1,
    variant: 'bus' as const,
    title: 'Городские автобусы',
    image: '/img/investor/1-3e5647f2c_.jpg',
  },
  {
    id: 2,
    variant: 'school' as const,
    title: 'Школьные автобусы',
    image: '/img/investor/2-74236626c_.jpg',
  },
  {
    id: 3,
    variant: 'ambulance' as const,
    title: 'Кареты скорой помощи',
    image: '/img/investor/3-369a787ba_.png',
  },
]

// Competitive advantages data
export const advantagesData = [
  'Уникальность и патенты РФ',
  'Низкая стоимость производства',
  'Установка на любые ТС любого года выпуска',
  'Государственная поддержка (гранты)',
  'Интуитивно понятна для водителей',
]

// Comparison data
export const comparisonData = [
  { label: 'Стоимость Кейди:', value: 'От $50', variant: 'keydi' as const },
  {
    label: 'Стоимость ACC/AEB:',
    value: 'От $2000 до $6000',
    variant: 'acc' as const,
  },
]
