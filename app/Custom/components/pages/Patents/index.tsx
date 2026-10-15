import React from 'react'
import { Award, FileText, Users, Shield } from 'lucide-react'
import {
  PatentsStyled,
  PatentsHeaderStyled,
  PatentsBadgeStyled,
  PatentsDescriptionStyled,
  PatentsSectionStyled,
  PatentsContainerStyled,
  PatentsGridStyled,
  PatentItemStyled,
  PatentContentStyled,
  PatentHeaderStyled,
  PatentIconContainerStyled,
  PatentIconStyled,
  PatentNumberStyled,
  PatentTitleStyled,
  PatentDescriptionStyled as PatentDescStyled,
  PatentButtonStyled,
  PatentsAuthorsSectionStyled,
  PatentsAuthorsContainerStyled,
  PatentsAuthorsGridStyled,
  PatentsAuthorsColumnStyled,
  PatentsAuthorsTitleStyled,
  PatentsAuthorsListStyled,
  PatentsAuthorItemStyled,
  PatentsOwnerTitleStyled,
  PatentsOwnerCardStyled,
  PatentsOwnerNameStyled,
  PatentsOwnerInfoStyled,
  PatentsFooterStyled,
  PatentsFooterContainerStyled,
  PatentsFooterCardStyled,
  PatentsFooterTitleStyled,
  PatentsFooterDescriptionStyled,
  AuthorPatentItemStyled,
  AuthorPatentContentStyled,
  AuthorPatentInfoStyled,
  PatentsTitleGradientStyled,
  PatentsAuthorTitleCenteredStyled,
} from './styles'

const patentsData = [
  {
    id: 1,
    number: '№ 2822940',
    title:
      'СПОСОБ ПРЕДОТВРАЩЕНИЯ СТОЛКНОВЕНИЙ ТРАНСПОРТНЫХ СРЕДСТВ, ДВИЖУЩИХСЯ ДРУГ ЗА ДРУГОМ ПО ОДНОЙ ПОЛОСЕ',
    description:
      'Усовершенствованный метод расчета безопасной дистанции с учетом скорости, времени реакции водителя, времени суток и погодных условий.',
    buttonText: 'Смотреть PDF',
    pdfUrl:
      'https://new.fips.ru/ofpstorage/Doc/IZPM/RUNWC1/000/000/002/822/940/%D0%98%D0%97-02822940-00001/document.pdf',
  },
  {
    id: 2,
    number: '№ 2844333',
    title:
      'СПОСОБ ПРЕДОТВРАЩЕНИЯ СТОЛКНОВЕНИЙ ТРАНСПОРТНЫХ СРЕДСТВ, ОСТАНАВЛИВАЮЩИХСЯ ДРУГ ЗА ДРУГОМ В ОДНОЙ ПОЛОСЕ',
    description:
      'Система переключает стоп-сигналы в прерывистый режим при сближении автомобилей на дистанцию менее 20 м и относительной скорости более 5 км/ч.',
    buttonText: 'Смотреть PDF',
    pdfUrl:
      'https://new.fips.ru/ofpstorage/Doc/IZPM/RUNWC1/000/000/002/844/333/%D0%98%D0%97-02844333-00001/document.pdf',
  },
]

const authorsData = [
  'Гимранов Артем Эрнстович',
  'Кружков Вячеслав Николаевич',
  'Миргазетдинов Ильяс Ахметшарифович',
]

const authorPatentsData = [
  {
    id: 3,
    number: '№ 2616114',
    title: 'Способ предотвращения столкновения транспортных средств',
    buttonText: 'Смотреть PDF',
    pdfUrl:
      'https://new.fips.ru/ofpstorage/Doc/IZPM/RUNWC1/000/000/002/616/114/%D0%98%D0%97-02616114-00001/document.pdf',
    badgeColor: 'blue',
  },
  {
    id: 4,
    number: '№ 2772292',
    title: 'Способ предотвращения столкновения транспортных средств',
    buttonText: 'Смотреть PDF',
    pdfUrl:
      'https://new.fips.ru/ofpstorage/Doc/IZPM/RUNWC1/000/000/002/772/292/%D0%98%D0%97-02772292-00001/document.pdf',
    badgeColor: 'blue',
  },
]

export const PatentsPage: React.FC = () => {
  return (
    <PatentsStyled>
      {/* Header Section */}
      <PatentsHeaderStyled>
        <PatentsBadgeStyled>
          <Award size={16} />
          Интеллектуальная собственность
        </PatentsBadgeStyled>
        <PatentsTitleGradientStyled>
          <span>Наши Патенты</span>
        </PatentsTitleGradientStyled>
        <PatentsDescriptionStyled>
          Инновационные решения в области безопасности транспорта, защищенные
          патентами Российской Федерации. Наша интеллектуальная собственность -
          основа технологического преимущества системы Кейди.
        </PatentsDescriptionStyled>
      </PatentsHeaderStyled>

      {/* Patents Grid Section */}
      <PatentsSectionStyled>
        <PatentsContainerStyled>
          <PatentsGridStyled>
            {patentsData.map((patent) => (
              <PatentItemStyled key={patent.id}>
                <PatentContentStyled>
                  <PatentHeaderStyled>
                    <PatentIconContainerStyled>
                      <PatentIconStyled>
                        <Shield size={24} color="white" />
                      </PatentIconStyled>
                      <div>
                        <PatentNumberStyled>{patent.number}</PatentNumberStyled>
                      </div>
                    </PatentIconContainerStyled>
                    <a
                      href={patent.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <PatentButtonStyled>
                        <FileText size={16} />
                        {patent.buttonText}
                      </PatentButtonStyled>
                    </a>
                  </PatentHeaderStyled>
                  <PatentTitleStyled>{patent.title}</PatentTitleStyled>
                </PatentContentStyled>
                <div
                  style={{
                    padding: '0 1.5rem 1.5rem',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <PatentDescStyled>{patent.description}</PatentDescStyled>
                </div>
              </PatentItemStyled>
            ))}
          </PatentsGridStyled>
        </PatentsContainerStyled>
      </PatentsSectionStyled>

      {/* Authors Section */}
      <PatentsAuthorsSectionStyled>
        <PatentsAuthorsContainerStyled>
          <PatentsAuthorsGridStyled>
            <PatentsAuthorsColumnStyled>
              <PatentsAuthorsTitleStyled>
                <Users size={24} />
                Авторы патентов
              </PatentsAuthorsTitleStyled>
              <PatentsAuthorsListStyled>
                {authorsData.map((author) => (
                  <PatentsAuthorItemStyled
                    key={`author-${author.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {author}
                  </PatentsAuthorItemStyled>
                ))}
              </PatentsAuthorsListStyled>
            </PatentsAuthorsColumnStyled>
            <PatentsAuthorsColumnStyled>
              <PatentsOwnerTitleStyled>
                Патентообладатель
              </PatentsOwnerTitleStyled>
              <PatentsOwnerCardStyled>
                <PatentsOwnerNameStyled>
                  ООО "Кейди Технолоджи"
                </PatentsOwnerNameStyled>
                <PatentsOwnerInfoStyled>
                  Российская Федерация
                  <br />
                  Зарегистрировано в Государственном реестре изобретений
                </PatentsOwnerInfoStyled>
              </PatentsOwnerCardStyled>
            </PatentsAuthorsColumnStyled>
          </PatentsAuthorsGridStyled>
        </PatentsAuthorsContainerStyled>
      </PatentsAuthorsSectionStyled>

      {/* Author Patents Section */}
      <PatentsSectionStyled>
        <PatentsContainerStyled>
          <PatentsAuthorTitleCenteredStyled>
            Патенты автора проекта
          </PatentsAuthorTitleCenteredStyled>
          <PatentsGridStyled>
            {authorPatentsData.map((patent) => (
              <AuthorPatentItemStyled key={patent.id}>
                <AuthorPatentContentStyled>
                  <AuthorPatentInfoStyled>
                    <PatentNumberStyled $color="blue">
                      {patent.number}
                    </PatentNumberStyled>
                    <PatentTitleStyled>{patent.title}</PatentTitleStyled>
                  </AuthorPatentInfoStyled>
                  <a
                    href={patent.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <PatentButtonStyled>
                      <FileText size={16} />
                      {patent.buttonText}
                    </PatentButtonStyled>
                  </a>
                </AuthorPatentContentStyled>
              </AuthorPatentItemStyled>
            ))}
          </PatentsGridStyled>
        </PatentsContainerStyled>
      </PatentsSectionStyled>

      {/* Footer Section */}
      <PatentsFooterStyled>
        <PatentsFooterContainerStyled>
          <PatentsFooterCardStyled>
            <PatentsFooterTitleStyled>
              Защищенные инновации
            </PatentsFooterTitleStyled>
            <PatentsFooterDescriptionStyled>
              Наши патенты подтверждают уникальность и новизну технологических
              решений системы Кейди. Это обеспечивает конкурентное преимущество
              и защиту интеллектуальной собственности на долгосрочную
              перспективу.
            </PatentsFooterDescriptionStyled>
          </PatentsFooterCardStyled>
        </PatentsFooterContainerStyled>
      </PatentsFooterStyled>
    </PatentsStyled>
  )
}
