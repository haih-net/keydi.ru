import React from 'react'
import { MessageCircle, Send, Mail, Phone } from 'lucide-react'
import {
  ContactPageStyled,
  ContactContainerStyled,
  ContactMaxWidthStyled,
  ContactHeaderStyled,
  ContactBadgeStyled,
  ContactTitleStyled,
  ContactDescriptionStyled,
  ContactGridStyled,
  ContactLeftStyled,
  CompanyCardStyled,
  CompanyBadgesStyled,
  CompanyInfoStyled,
  CompanyInfoRowStyled,
  CompanyInfoLabelStyled,
  CompanyInfoValueStyled,
  CompanyInfoDividerStyled,
  CompanyInfoDirectorLabelStyled,
  CompanyInfoDirectorNameStyled,
  TelegramCardStyled,
  TelegramHeaderStyled,
  TelegramTitleStyled,
  TelegramContentStyled,
  TelegramButtonStyled,
  ContactRightStyled,
  ContactSectionStyled,
  ContactMethodsStyled,
  ContactMethodCardStyled,
  ContactMethodLinkStyled,
  ContactMethodContentStyled,
  ContactMethodInnerStyled,
  ContactMethodIconStyled,
  ContactMethodInfoStyled,
} from './styles'

export const ContactPage: React.FC = () => {
  return (
    <ContactPageStyled>
      <ContactContainerStyled>
        <ContactMaxWidthStyled>
          {/* Header Section */}
          <ContactHeaderStyled>
            <ContactBadgeStyled>
              <MessageCircle size={16} />
              Свяжитесь с нами
            </ContactBadgeStyled>
            <ContactTitleStyled>
              Готовы к <span>сотрудничеству</span>
            </ContactTitleStyled>
            <ContactDescriptionStyled>
              Обсудим возможности внедрения нашей технологии в ваши транспортные
              системы. Мы открыты для партнерства и готовы адаптировать решение
              под ваши потребности.
            </ContactDescriptionStyled>
          </ContactHeaderStyled>

          {/* Main Content Grid */}
          <ContactGridStyled>
            {/* Left Column */}
            <ContactLeftStyled>
              {/* Company Information Card */}
              <CompanyCardStyled>
                <h3>ООО "КЕЙДИ ТЕХНОЛОДЖИ"</h3>
                <CompanyBadgesStyled>
                  <p>Малое предприятие (МСП) № ЮЭ9965-25-30026079</p>
                  <p>Малая технологическая компания (МТК) № 2617</p>
                </CompanyBadgesStyled>
                <CompanyInfoStyled>
                  <CompanyInfoRowStyled>
                    <CompanyInfoLabelStyled>ИНН:</CompanyInfoLabelStyled>
                    <CompanyInfoValueStyled>0274978948</CompanyInfoValueStyled>
                  </CompanyInfoRowStyled>
                  <CompanyInfoRowStyled>
                    <CompanyInfoLabelStyled>ОГРН:</CompanyInfoLabelStyled>
                    <CompanyInfoValueStyled>
                      1230200017200
                    </CompanyInfoValueStyled>
                  </CompanyInfoRowStyled>
                  <CompanyInfoDividerStyled>
                    <CompanyInfoDirectorLabelStyled>
                      Директор:
                    </CompanyInfoDirectorLabelStyled>
                    <CompanyInfoDirectorNameStyled>
                      Гимранов Артем Эрнстович
                    </CompanyInfoDirectorNameStyled>
                  </CompanyInfoDividerStyled>
                </CompanyInfoStyled>
              </CompanyCardStyled>

              {/* Telegram Card */}
              <TelegramCardStyled>
                <TelegramHeaderStyled>
                  <TelegramTitleStyled>
                    <Send size={24} style={{ color: '#2563eb' }} />
                    Связаться в Telegram
                  </TelegramTitleStyled>
                </TelegramHeaderStyled>
                <TelegramContentStyled>
                  <p>
                    Для быстрой связи и обсуждения деталей, напишите нам
                    напрямую в Telegram. Мы оперативно ответим на все ваши
                    вопросы.
                  </p>
                  <TelegramButtonStyled
                    href="https://t.me/keyditech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Написать в Telegram
                    <Send size={20} />
                  </TelegramButtonStyled>
                </TelegramContentStyled>
              </TelegramCardStyled>
            </ContactLeftStyled>

            {/* Right Column */}
            <ContactRightStyled>
              <ContactSectionStyled>
                <h2>Как с нами связаться</h2>
                <p>
                  Мы всегда готовы обсудить возможности применения нашей
                  технологии. Свяжитесь с нами удобным для вас способом.
                </p>
              </ContactSectionStyled>

              <ContactMethodsStyled>
                {/* Email Method */}
                <ContactMethodCardStyled>
                  <ContactMethodLinkStyled
                    href="mailto:keyditech@yandex.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ContactMethodContentStyled>
                      <ContactMethodInnerStyled>
                        <ContactMethodIconStyled>
                          <Mail size={24} />
                        </ContactMethodIconStyled>
                        <ContactMethodInfoStyled>
                          <h3>Email</h3>
                          <div className="contact-value">
                            keyditech@yandex.ru
                          </div>
                          <p>Напишите нам для получения подробной информации</p>
                        </ContactMethodInfoStyled>
                      </ContactMethodInnerStyled>
                    </ContactMethodContentStyled>
                  </ContactMethodLinkStyled>
                </ContactMethodCardStyled>

                {/* Phone Method */}
                <ContactMethodCardStyled>
                  <ContactMethodLinkStyled
                    href="tel:+79276362004"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ContactMethodContentStyled>
                      <ContactMethodInnerStyled>
                        <ContactMethodIconStyled>
                          <Phone size={24} />
                        </ContactMethodIconStyled>
                        <ContactMethodInfoStyled>
                          <h3>Телефон</h3>
                          <div className="contact-value">+7 927 636 2004</div>
                          <p>Звоните для срочных вопросов</p>
                        </ContactMethodInfoStyled>
                      </ContactMethodInnerStyled>
                    </ContactMethodContentStyled>
                  </ContactMethodLinkStyled>
                </ContactMethodCardStyled>
              </ContactMethodsStyled>
            </ContactRightStyled>
          </ContactGridStyled>
        </ContactMaxWidthStyled>
      </ContactContainerStyled>
    </ContactPageStyled>
  )
}
