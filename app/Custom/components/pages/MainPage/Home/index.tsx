import React, { useCallback, useState } from 'react'
import {
  Shield,
  ArrowRight,
  // CheckCircle,
  Play,
  Users,
  Award,
  Settings,
  AlertTriangle,
  Car,
} from 'lucide-react'
// import AboutModal from '../components/AboutModal' // Import the AboutModal component
// import { LanguageToggle } from './components/LanguageToggle'
import { SiteLink as Link } from 'app/Custom/components/SiteLink'
import { Button } from 'app/Custom/ui-kit/Button'

import {
  HomeBlockAdvantagesCardIconStyled,
  HomeBlockAdvantagesCardStyled,
  HomeBlockAdvantagesCardsStyled,
  HomeBlockStyled,
  HomeBlockSupportStyled,
  HomeButtonsStyled,
  HomeFlexColumnStyled,
  HomeRowCarsStyled,
  HomeRowColumnsStyled,
  HomeSupportContentStyled,
  HomeSupportLinkStyled,
  HomeSupportAwardStyled,
  HomeSystemStyled,
  HomeStyled,
  HomeBlockAdvantagesStyled,
  MarketProblemSectionStyled,
  MarketProblemCardStyled,
  MarketProblemContentStyled,
  MarketProblemDangerStyled,
  MarketProblemItemStyled,
  MarketProblemStatsStyled,
  MarketProblemStatsGridStyled,
  MarketProblemStatItemStyled,
} from './styles'
import {
  BaseGradientTitleStyled,
  // LayoutBlockStyled,
} from 'app/Custom/components/Layout/styles'
import { ComponentSize, ComponentVariant } from 'app/Custom/ui-kit/interfaces'

const features = [
  {
    icon: Award,
    title: 'Система не имеет аналогов',
    description: 'Базируется на современных технологиях',
  },
  {
    icon: Users,
    title: 'Основана на естественной реакции водителей',
    description: 'Использует привычные для водителя сигналы и реакции',
  },
  {
    icon: AlertTriangle,
    title: 'Одновременно действует, оповещает и предупреждает',
    description: 'Комплексный подход к обеспечению безопасности водителей',
  },
  {
    icon: Settings,
    title: 'Свободно устанавливается в любое ТС',
    description: 'Подходит для транспортных средств любого года выпуска',
  },
  {
    icon: Car,
    title: 'Значительно повышает уровень общей автобезопасности',
    description: 'Эффективное снижение риска попутных столкновений',
  },
]

const marketData = [
  { label: 'ДТП с пострадавшими в России (2024)', value: '116 190' },
  { label: 'Погибших в ДТП', value: '12 748' },
  { label: 'Получили травмы', value: '159 635' },
  {
    label:
      'ДТП из-за несоблюдения безопасной дистанции (на основании статистики ГИБДД РФ)!',
    value: '~10%',
  },
]

export const Home: React.FC = () => {
  const [, setIsModalOpen] = useState(false) // Add state for modal visibility
  // const [currentLanguage, setCurrentLanguage] = useState<'ru' | 'en'>('ru')

  // const handleLanguageChange = React.useCallback((language: 'ru' | 'en') => {
  //   setCurrentLanguage(language)
  // }, [])

  return (
    <>
      {/* <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />{' '} */}
      {/* Render the modal */}
      <HomeStyled>
        {/* Language Toggle Section */}
        {/* <LayoutBlockStyled>
          <LanguageToggle
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </LayoutBlockStyled> */}

        {/* Hero Section */}
        <HomeRowCarsStyled>
          <HomeBlockStyled>
            <div></div>
            <div>
              <HomeRowColumnsStyled>
                <HomeFlexColumnStyled>
                  <HomeSystemStyled>
                    <Shield />
                    Система предотвращения попутных столкновений
                  </HomeSystemStyled>

                  <BaseGradientTitleStyled>
                    Система <span>Кейди</span>: безопасность в движении
                  </BaseGradientTitleStyled>

                  <p>
                    Keydi — следующий шаг в эволюции безопасности. Российская
                    разработка, которая усиливает безопасность транспортного
                    средства на дороге, превращая стоп-сигналы в
                    интеллектуальный маяк, предотвращающий попутные столкновения
                    до момента торможения.
                  </p>

                  <HomeButtonsStyled>
                    {/* Changed Link to Button to open modal */}
                    <Button
                      hidden
                      style={{ display: 'none' }}
                      onClick={useCallback(() => setIsModalOpen(true), [])}
                      size={ComponentSize.SM}
                      variant={ComponentVariant.SUCCESS}
                    >
                      Узнать больше
                      <ArrowRight />
                    </Button>

                    <Link href="/video">
                      <Button
                        // variant="outline"
                        size={ComponentSize.SM}
                        variant={ComponentVariant.SECONDARY}
                      >
                        <Play />
                        Смотреть видео
                      </Button>
                    </Link>
                  </HomeButtonsStyled>
                </HomeFlexColumnStyled>

                <div>
                  <div></div>
                  <div>
                    <div>
                      <img
                        src="/img/home/0-8820bba87_.jpg"
                        alt="Система безопасности движения автомобилей"
                        className="car"
                      />
                    </div>
                  </div>
                </div>
              </HomeRowColumnsStyled>
            </div>
          </HomeBlockStyled>
        </HomeRowCarsStyled>

        {/* Features Section */}
        <HomeBlockAdvantagesStyled>
          <div>
            <h2>Ключевые преимущества</h2>
          </div>

          <HomeBlockAdvantagesCardsStyled>
            {features.map((feature) => (
              <HomeBlockAdvantagesCardStyled
                key={feature.title}
                //
              >
                {/* <CardContent > */}
                <HomeBlockAdvantagesCardIconStyled>
                  <feature.icon />
                </HomeBlockAdvantagesCardIconStyled>
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
                {/* </CardContent> */}
              </HomeBlockAdvantagesCardStyled>
            ))}
          </HomeBlockAdvantagesCardsStyled>
        </HomeBlockAdvantagesStyled>

        {/* Grant Support Section */}
        <HomeBlockSupportStyled>
          <h3>Проект реализован при поддержке</h3>

          <HomeSupportContentStyled>
            <HomeSupportLinkStyled
              href="https://fasie.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/home/1-343f34e5c_.jpg"
                alt="Логотип Фонда содействия инновациям"
              />
              <span>Фонда содействия инновациям</span>
            </HomeSupportLinkStyled>

            <HomeSupportAwardStyled>
              <img
                src="/img/home/2-4a6fc24fa_IMG_1523.jpg"
                alt="Диплом победителя программы Старт 2023"
              />
            </HomeSupportAwardStyled>
          </HomeSupportContentStyled>

          <p style={{ textAlign: 'center' }}>
            Прототип системы "Кейди" (аппаратно-программый комплекс
            предотвращения попутных столкновений траспортных средств) создан в
            2024 году по программе «Старт-1»
          </p>
        </HomeBlockSupportStyled>

        {/* Market Problem Section */}
        <MarketProblemSectionStyled>
          <h2>Масштаб проблемы попутных столкновений</h2>
          <p className="centered-text">
            Более 20% (на основании исследований статистики ДТП в мире) аварий
            на дорогах начинаются с одной ошибки — несоблюдения дистанции. Но
            это лишь верхушка айсберга. Несоблюдение дистанции часто становится
            спусковым крючком для самых тяжелых ДТП.
          </p>

          <MarketProblemCardStyled>
            <MarketProblemContentStyled>
              <MarketProblemDangerStyled>
                <h3>Цепная реакция опасности</h3>
                <MarketProblemItemStyled>
                  <AlertTriangle />
                  <div>
                    <h4>Вывод на встречную полосу</h4>
                    <p>
                      Резкое торможение для избежания столкновения сзади может
                      привести к заносу и выезду на встречную полосу, что
                      чревато лобовым столкновением.
                    </p>
                  </div>
                </MarketProblemItemStyled>
                <MarketProblemItemStyled>
                  <Car />
                  <div>
                    <h4>Опрокидывание</h4>
                    <p>
                      Попытка увернуться от внезапно тормозящего автомобиля на
                      высокой скорости часто заканчивается потерей управления и
                      опрокидыванием.
                    </p>
                  </div>
                </MarketProblemItemStyled>
                <MarketProblemItemStyled>
                  <Users />
                  <div>
                    <h4>Наезды на пешеходов</h4>
                    <p>
                      Водитель, отвлекшийся на опасное сближение, может не
                      заметить пешехода, что приводит к трагическим
                      последствиям.
                    </p>
                  </div>
                </MarketProblemItemStyled>
              </MarketProblemDangerStyled>

              <MarketProblemStatsStyled>
                <h3>Статистика ДТП в России</h3>
                <MarketProblemStatsGridStyled>
                  {marketData.map((item) => (
                    <MarketProblemStatItemStyled key={item.label}>
                      <div>{item.value}</div>
                      <p>{item.label}</p>
                    </MarketProblemStatItemStyled>
                  ))}
                </MarketProblemStatsGridStyled>
              </MarketProblemStatsStyled>
            </MarketProblemContentStyled>
          </MarketProblemCardStyled>
        </MarketProblemSectionStyled>
      </HomeStyled>
    </>
  )
}
