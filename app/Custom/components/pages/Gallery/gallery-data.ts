export interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  views: string
  description?: string
  link?: string
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: 'Электронный блок управления',
    category: 'Электроника',
    image: '/img/gallery/1-78b8babf6_1.JPG',
    views: '1.2K',
    description:
      'Внутреннее устройство ЭБУ системы Кейди с микроконтроллером и компонентами',
  },
  {
    id: 2,
    title: 'Лидар-датчик дистанции',
    category: 'Датчики',
    image: '/img/gallery/2-168e7c6e4_3.jpg',
    views: '986',
    description:
      'Прецизионный датчик для измерения расстояния до заднего транспортного средства',
    link: 'https://hlktech.net/index.php?id=1282',
  },
  {
    id: 3,
    title: 'Лазерный излучатель',
    category: 'Электроника',
    image: '/img/gallery/3-bce40f4d4_IMG_1987.jpg',
    views: '1.1K',
    description: 'Матрица лазерного излучателя, являющаяся частью лидара',
  },
  {
    id: 4,
    title: 'ГЛОНАСС/GPS антенна',
    category: 'Навигация',
    image: '/img/gallery/4-566688f01_2.jpg',
    views: '897',
    description:
      'Высокоточная антенна для определения скорости транспортного средства',
  },
  {
    id: 5,
    title: 'GPS модуль',
    category: 'Навигация',
    image: '/img/gallery/5-03734bf08_3-3.jpg',
    views: '923',
    description: 'Компактный GPS-модуль, работающий в паре с антенной',
    link: 'https://example.com/gps-module',
  },
  {
    id: 6,
    title: 'Антенный модуль',
    category: 'Связь',
    image: '/img/gallery/7-70319bf39_2.jpg',
    views: '756',
    description: 'Обратная сторона модуля с патч-антенной',
    link: 'https://example.com/antenna-module',
  },
  {
    id: 7,
    title: 'Плата оповещения',
    category: 'Электроника',
    image: '/img/gallery/8-804391e23_IMG_1333.jpg',
    views: '1.3K',
    description:
      'Печатная плата системы оповещения водителя о потенциальных опасностях',
  },
  {
    id: 8,
    title: 'Материал для корпуса',
    category: 'Проектирование',
    image: '/img/gallery/9-bc77035c0_IMG_1610.jpg',
    views: '1.5K',
    description:
      'Пластилиновый слепок заднего бампера испытательного транспортного средства для сканирования на 3D сканере и создания крепежной консоли лидара',
  },
  {
    id: 9,
    title: '3D-сканирование',
    category: 'Проектирование',
    image: '/img/gallery/10-3462d1c87_IMG_1623.jpg',
    views: '2.1K',
    description: 'Использование 3D-сканера для оцифровки модели корпуса',
  },
  {
    id: 10,
    title: 'Процесс сканирования',
    category: 'Проектирование',
    image: '/img/gallery/11-b69ff8e7c_IMG_1626.jpg',
    views: '1.8K',
    description: 'Процесс 3D-сканирования прототипа корпуса датчика',
  },
  {
    id: 11,
    title: 'Цифровая 3D-модель',
    category: 'Проектирование',
    image: '/img/gallery/12-036db93f4_IMG_1631.jpg',
    views: '2.4K',
    description:
      'Результат сканирования - цифровая 3D-модель на экране компьютера',
  },
  {
    id: 12,
    title: 'Обработка 3D-модели',
    category: 'Проектирование',
    image: '/img/gallery/13-b5a623244_IMG_1633.jpg',
    views: '1.9K',
    description: 'Обработка и доработка полученной 3D-модели корпуса',
  },
  {
    id: 13,
    title: 'Корпус системы Кейди',
    category: 'Производство',
    image: '/img/gallery/14-086c0e6b1_IMG_1737.jpg',
    views: '2.2K',
    description: 'Напечатанный на 3D-принтере корпус системы с логотипом',
  },
  {
    id: 14,
    title: 'Готовый корпус датчика',
    category: 'Производство',
    image: '/img/gallery/15-435c75340_IMG_1907.jpg',
    views: '1.7K',
    description:
      'Корпус датчика, напечатанный на 3D-принтере, на рабочем столе',
  },
  {
    id: 15,
    title: 'Компоненты датчика',
    category: 'Электроника',
    image: '/img/gallery/16-41c74280f_IMG_1934.jpg',
    views: '1.4K',
    description: 'Внутреннее устройство корпуса с лидаром и разъемами.',
  },
  {
    id: 16,
    title: 'Разработка ПО',
    category: 'Программирование',
    image: '/img/gallery/17-c9dc3435c_IMG_1908.jpg',
    views: '1.6K',
    description:
      'Инженер в процессе разработки программного обеспечения для системы',
  },
  {
    id: 17,
    title: 'Автомобиль в сервисе',
    category: 'Тестирование',
    image: '/img/gallery/18-9049904b8_8-2.jpg',
    views: '1.1K',
    description:
      'Процесс установки системы Кейди на автомобиль в сервисном центре',
  },
  {
    id: 18,
    title: 'Установка системы в багажник',
    category: 'Установка',
    image: '/img/gallery/19-b6da3e049_-.jpg',
    views: '1.3K',
    description:
      'Инженер устанавливает компоненты системы Кейди в багажнике автомобиля',
  },
  {
    id: 19,
    title: 'Прокладка проводки',
    category: 'Установка',
    image: '/img/gallery/20-9711d80evcxva-6358d4cc92ac.jpg.jpg',
    views: '987',
    description: 'Аккуратная укладка проводки системы в багажнике автомобиля',
  },
  {
    id: 20,
    title: 'Подключение ЭБУ',
    category: 'Установка',
    image: '/img/gallery/21-c06095601_4-2.jpg',
    views: '1.2K',
    description: 'Подсоединение разъемов к электронному блоку управления',
  },
  {
    id: 21,
    title: 'Крепление датчика',
    category: 'Установка',
    image: '/img/gallery/22-f6854ccf6_5.jpg',
    views: '1.0K',
    description: 'Надежное крепление датчика на кузове автомобиля',
  },
  {
    id: 22,
    title: 'Датчик в сборе на автомобиле',
    category: 'Установка',
    image: '/img/gallery/23-7ea67622e_.jpg',
    views: '1.4K',
    description:
      'Собранный и установленный на бампер автомобиля датчик системы Кейди',
  },
  {
    id: 23,
    title: 'Корпус датчика с логотипом',
    category: 'Производство',
    image: '/img/gallery/24-ff4dcac69_.jpg',
    views: '1.8K',
    description:
      'Внешний вид корпуса датчика Keydi, установленного на бампере автомобиля',
  },
  {
    id: 24,
    title: 'GPS-антенна в салоне',
    category: 'Установка',
    image: '/img/gallery/25-016165175_6.jpg',
    views: '823',
    description: 'Установка GPS-антенны на приборную панель',
  },
  {
    id: 25,
    title: 'GPS-антенна на крыше',
    category: 'Установка',
    image: '/img/gallery/26-951809282_IMG_2533.jpg',
    views: '945',
    description:
      'Внешняя GPS-антенна, установленная на крыше автомобиля для тестов',
  },
  {
    id: 26,
    title: 'Крепление GPS-антенны',
    category: 'Установка',
    image: '/img/gallery/27-bf305f907_IMG_2534.jpg',
    views: '767',
    description: 'Крупный план крепления GPS-антенны на крыше автомобиля',
  },
  {
    id: 27,
    title: 'Питание системы',
    category: 'Электроника',
    image: '/img/gallery/28-952caeaa7_IMG_2213.jpg',
    views: '1.1K',
    description:
      'Подключение питания системы через стандартный автомобильный прикуриватель',
  },
  {
    id: 28,
    title: 'Фирменные рамки',
    category: 'Производство',
    image: '/img/gallery/29-66565409e_IMG_2573.jpg',
    views: '1.6K',
    description:
      'Брендированные рамки для номерных знаков "Соблюдай KEYDI дистанцию"',
  },
  {
    id: 29,
    title: 'Тестирование на осциллографе',
    category: 'Тестирование',
    image: '/img/gallery/30-82859aef7_IMG_2596.jpg',
    views: '1.3K',
    description:
      'Проверка и отладка электронных компонентов системы с помощью осциллографа',
  },
  {
    id: 30,
    title: 'Настройка прототипа',
    category: 'Тестирование',
    image: '/img/gallery/31-5695d5c16_IMG_1933.jpg',
    views: '1.2K',
    description:
      'Ручная настройка и отладка компонентов прототипа системы на стенде',
  },
  {
    id: 31,
    title: 'Стенд для отладки',
    category: 'Тестирование',
    image: '/img/gallery/32-1fc123c8a_2017.jpg',
    views: '989',
    description: 'Специализированный стенд для отладки и тестирования системы',
  },
  {
    id: 32,
    title: 'Калибровка дистанции',
    category: 'Тестирование',
    image: '/img/gallery/33-ad50eb516_IMG_1911.jpg',
    views: '1.0K',
    description:
      'Разметка для калибровки и тестирования точности измерения дистанции',
  },
  {
    id: 33,
    title: 'Анализ данных лидара',
    category: 'Тестирование',
    image: '/img/gallery/34-bd14fdbf5_IMG_1914.jpg',
    views: '1.4K',
    description:
      'Анализ данных, полученных с лидара, и построение графика калибровки',
  },
  {
    id: 34,
    title: 'Работа платы оповещения',
    category: 'Тестирование',
    image: '/img/gallery/35-580f22bc2_IMG_2449.PNG',
    views: '1.1K',
    description:
      'Светодиодный индикатор на плате оповещения в активном состоянии во время тестов',
  },
  {
    id: 35,
    title: 'Комплекс для тестирования в авто',
    category: 'Тестирование',
    image: '/img/gallery/36-fc392ad62_1.jpg',
    views: '1.7K',
    description:
      'Набор оборудования в салоне автомобиля для проведения комплексных испытаний',
  },
  {
    id: 36,
    title: 'Настройка системы в авто',
    category: 'Тестирование',
    image: '/img/gallery/37-e67d2298b_4-1.jpg',
    views: '1.3K',
    description:
      'Процесс калибровки и настройки системы Кейди с помощью программного обеспечения в автомобиле',
  },
  {
    id: 37,
    title: 'Отладка системы в авто',
    category: 'Тестирование',
    image: '/img/gallery/38-e2616e9e0_7-2.JPG',
    views: '1.2K',
    description:
      'Настройка и калибровка системы Кейди с помощью ноутбука в полевых условиях',
  },
  {
    id: 38,
    title: 'Сбор данных в автомобиле',
    category: 'Тестирование',
    image: '/img/gallery/39-ada8f9448_IMG_1921.jpg',
    views: '1.5K',
    description:
      'Ноутбук с запущенным ПО для сбора данных во время дорожных испытаний',
  },
  {
    id: 39,
    title: 'Видеорегистратор для тестов',
    category: 'Тестирование',
    image: '/img/gallery/40-aa6cfc6f8_IMG_2215.jpg',
    views: '1.0K',
    description:
      'Использование видеорегистратора для фиксации дорожной обстановки во время испытаний',
  },
  {
    id: 40,
    title: 'Расположение видеорегистратора',
    category: 'Тестирование',
    image: '/img/gallery/41-c147ed423_IMG_2264.jpg',
    views: '856',
    description: 'Боковой вид на установленный для тестов видеорегистратор',
  },
  {
    id: 41,
    title: 'Работа системы в реальном времени',
    category: 'Тестирование',
    image: '/img/gallery/42-95875eee9_.jpg',
    views: '2.1K',
    description:
      'Демонстрация работы системы Кейди в реальных дорожных условиях',
  },
]
