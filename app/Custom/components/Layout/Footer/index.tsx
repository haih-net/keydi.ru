import {
  FooterColumnsStyled,
  FooterColumnStyled,
  FooterCopyStyled,
  FooterCopyWrapperStyled,
  FooterNavStyled,
  FooterStyled,
  FooterWrapperStyled,
  FooterLogoContainerStyled,
  FooterDescriptionStyled,
  FooterNavLinkStyled,
  FooterHeadingStyled,
  FooterContactListStyled,
  FooterContactItemStyled,
  FooterContactLinkStyled,
  FooterButtonStyled,
} from './styles'

export const Footer: React.FC = () => {
  return (
    <>
      <FooterWrapperStyled>
        <FooterStyled>
          <FooterColumnsStyled>
            <FooterColumnStyled>
              <FooterLogoContainerStyled>
                <img src="/img/logo-big.jpg" alt="Кейди Логотип" />
              </FooterLogoContainerStyled>
              <FooterDescriptionStyled>
                Передовая технология для обеспечения безопасности транспорта.
                Защита жизни через инновации.
              </FooterDescriptionStyled>
            </FooterColumnStyled>

            <FooterColumnStyled>
              <FooterHeadingStyled>Навигация</FooterHeadingStyled>
              <FooterNavStyled>
                <FooterNavLinkStyled href="/">Главная</FooterNavLinkStyled>
                <FooterNavLinkStyled href="/technology">
                  О технологии
                </FooterNavLinkStyled>
                <FooterNavLinkStyled href="/video">Видео</FooterNavLinkStyled>
                <FooterNavLinkStyled href="/team">Команда</FooterNavLinkStyled>
                <FooterNavLinkStyled href="/gallery">
                  Галерея
                </FooterNavLinkStyled>
                <FooterNavLinkStyled href="/patents">
                  Наши Патенты
                </FooterNavLinkStyled>
                <FooterNavLinkStyled href="/investor">
                  Для инвестора
                </FooterNavLinkStyled>
                <FooterNavLinkStyled href="/contacts">
                  Контакты
                </FooterNavLinkStyled>
              </FooterNavStyled>
            </FooterColumnStyled>

            <FooterColumnStyled>
              <FooterHeadingStyled>Свяжитесь с нами</FooterHeadingStyled>
              <FooterContactListStyled>
                <FooterContactItemStyled>
                  Email:{' '}
                  <FooterContactLinkStyled href="mailto:keyditech@yandex.ru">
                    keyditech@yandex.ru
                  </FooterContactLinkStyled>
                </FooterContactItemStyled>
                <FooterContactItemStyled>
                  Телефон:{' '}
                  <FooterContactLinkStyled href="tel:+79276362004">
                    +7 927 636 2004
                  </FooterContactLinkStyled>
                </FooterContactItemStyled>
                <FooterContactItemStyled>
                  Telegram:{' '}
                  <FooterContactLinkStyled
                    href="https://t.me/keyditech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @keyditech
                  </FooterContactLinkStyled>
                </FooterContactItemStyled>
              </FooterContactListStyled>
              <FooterButtonStyled href="/contacts">
                Больше информации →
              </FooterButtonStyled>
            </FooterColumnStyled>
          </FooterColumnsStyled>
        </FooterStyled>
      </FooterWrapperStyled>
      <FooterCopyWrapperStyled>
        <FooterCopyStyled>© 2026 Кейди. Все права защищены.</FooterCopyStyled>
        <FooterCopyStyled>
          Техническая архитектура и разработка{' '}
          <a target="_blank" href="https://fi1osof.ru">
            By 𝕱
          </a>
        </FooterCopyStyled>
      </FooterCopyWrapperStyled>
    </>
  )
}
