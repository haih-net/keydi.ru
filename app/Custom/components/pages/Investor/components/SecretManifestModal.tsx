import React from 'react'
import {
  Heart,
  Shield,
  Users,
  Target,
  HandHeart,
  Mail,
  Phone,
} from 'lucide-react'
import {
  SecretManifestModalContainer,
  SecretManifestModalStyled,
  SecretManifestCloseStyled,
  SecretManifestHeaderStyled,
  SecretManifestBadgeStyled,
  SecretManifestTitleStyled,
  SecretManifestSectionStyled,
  SecretManifestAccidentSectionStyled,
  SecretManifestSectionTitleStyled,
  SecretManifestImagesGridStyled,
  SecretManifestImageStyled,
  SecretManifestCaptionStyled,
  SecretManifestMissionSectionStyled,
  SecretManifestHelpContentStyled,
  SecretManifestHelpParagraphStyled,
  SecretManifestHelpLinkStyled,
  SecretManifestMissionTitleStyled,
  SecretManifestTextStyled,
  SecretManifestGridStyled,
  SecretManifestCardStyled,
  SecretManifestCardTitleStyled,
  SecretManifestListStyled,
  SecretManifestListItemStyled,
  SecretManifestHelpSectionStyled,
  SecretManifestTestBlockStyled,
  SecretManifestTestBlockTitleStyled,
  SecretManifestTestBlockDescriptionStyled,
  SecretManifestTestBlockCardStyled,
  SecretManifestTestBlockCardTitleStyled,
  SecretManifestTestBlockListStyled,
  SecretManifestTestBlockListItemStyled,
  SecretManifestTestBlockRequirementsStyled,
  SecretManifestTestBlockRequirementsTitleStyled,
  SecretManifestTestBlockRequirementsListStyled,
  SecretManifestTestBlockFinalTextStyled,
  SecretManifestVolunteerBlockStyled,
  SecretManifestVolunteerBlockTitleStyled,
  SecretManifestVolunteerBlockDescriptionStyled,
  SecretManifestVolunteerBlockCardStyled,
  SecretManifestVolunteerBlockCardTitleStyled,
  SecretManifestVolunteerBlockListStyled,
  SecretManifestVolunteerBlockListItemStyled,
  SecretManifestFinalCtaStyled,
  SecretManifestFinalCtaTextStyled,
  SecretManifestFinalCtaCardStyled,
  SecretManifestFinalCtaCardTitleStyled,
  SecretManifestFinalCtaContactListStyled,
  SecretManifestFinalCtaContactItemStyled,
  SecretManifestFinalCtaNoteStyled,
  SecretManifestLanguageToggleStyled,
  SecretManifestLanguageContainerStyled,
  SecretManifestLanguageButtonStyled,
} from './SecretManifestModal.styles'

interface SecretManifestModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SecretManifestModal: React.FC<SecretManifestModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleOverlayClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    },
    [onClose],
  )

  return (
    <SecretManifestModalContainer
      className={isOpen ? 'open' : ''}
      onClick={handleOverlayClick}
    >
      <SecretManifestModalStyled>
        <SecretManifestLanguageToggleStyled>
          <SecretManifestLanguageContainerStyled>
            <SecretManifestLanguageButtonStyled $active>
              🇷🇺 RU
            </SecretManifestLanguageButtonStyled>
            <SecretManifestLanguageButtonStyled>
              🇬🇧 EN
            </SecretManifestLanguageButtonStyled>
          </SecretManifestLanguageContainerStyled>
        </SecretManifestLanguageToggleStyled>

        <SecretManifestCloseStyled onClick={onClose}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </SecretManifestCloseStyled>

        <SecretManifestHeaderStyled>
          <SecretManifestBadgeStyled>
            <Heart size={16} />
            Секретный манифест
          </SecretManifestBadgeStyled>
          <SecretManifestTitleStyled>
            Манифест для всех кто не равнодушен к статистике ДТП и хочет помочь
            в развитии проекта
          </SecretManifestTitleStyled>
        </SecretManifestHeaderStyled>

        <SecretManifestSectionStyled>
          <SecretManifestAccidentSectionStyled>
            <SecretManifestSectionTitleStyled>
              Это не просто статистика — это реальность наших дорог
            </SecretManifestSectionTitleStyled>
            <SecretManifestImagesGridStyled>
              <SecretManifestImageStyled>
                <img
                  src="/img/investor/1-secr-71c9a7e72_image.png"
                  alt="Accident 1"
                />
              </SecretManifestImageStyled>
              <SecretManifestImageStyled>
                <img
                  src="/img/investor/2-secr-b7d239ed7_image.png"
                  alt="Accident 2"
                />
              </SecretManifestImageStyled>
              <SecretManifestImageStyled>
                <img
                  src="/img/investor/3-secr-756030708_image.png"
                  alt="Accident 3"
                />
              </SecretManifestImageStyled>
            </SecretManifestImagesGridStyled>
            <SecretManifestCaptionStyled>
              Каждая из этих аварий могла быть предотвращена системой Кейди
            </SecretManifestCaptionStyled>
          </SecretManifestAccidentSectionStyled>
        </SecretManifestSectionStyled>

        <SecretManifestSectionStyled>
          <SecretManifestMissionSectionStyled>
            <SecretManifestMissionTitleStyled>
              <Shield size={20} />
              Наша миссия
            </SecretManifestMissionTitleStyled>
            <SecretManifestTextStyled>
              Каждый день на дорогах России происходят тысячи аварий. Каждый
              день десятки семей теряют своих близких. Эти цифры — не просто
              статистика. Это реальные люди, реальные жизни, реальные трагедии.
            </SecretManifestTextStyled>
          </SecretManifestMissionSectionStyled>
        </SecretManifestSectionStyled>

        <SecretManifestSectionStyled>
          <SecretManifestGridStyled>
            <SecretManifestCardStyled>
              <SecretManifestCardTitleStyled>
                <Users size={16} style={{ color: '#059669' }} />
                Мы верим
              </SecretManifestCardTitleStyled>
              <SecretManifestListStyled>
                <SecretManifestListItemStyled>
                  <span style={{ color: '#059669', fontWeight: 'bold' }}>
                    •
                  </span>
                  <span>Что технологии должны служить людям</span>
                </SecretManifestListItemStyled>
                <SecretManifestListItemStyled>
                  <span style={{ color: '#059669', fontWeight: 'bold' }}>
                    •
                  </span>
                  <span>Что каждая спасенная жизнь бесценна</span>
                </SecretManifestListItemStyled>
                <SecretManifestListItemStyled>
                  <span style={{ color: '#059669', fontWeight: 'bold' }}>
                    •
                  </span>
                  <span>Что безопасность не должна быть привилегией</span>
                </SecretManifestListItemStyled>
                <SecretManifestListItemStyled>
                  <span style={{ color: '#059669', fontWeight: 'bold' }}>
                    •
                  </span>
                  <span>Что вместе мы сильнее</span>
                </SecretManifestListItemStyled>
              </SecretManifestListStyled>
            </SecretManifestCardStyled>

            <SecretManifestCardStyled>
              <SecretManifestCardTitleStyled>
                <Target size={16} style={{ color: '#e11d48' }} />
                Наша цель
              </SecretManifestCardTitleStyled>
              <SecretManifestListStyled>
                <SecretManifestListItemStyled>
                  <span style={{ color: '#e11d48', fontWeight: 'bold' }}>
                    •
                  </span>
                  <span>Сократить количество попутных ДТП на 30%</span>
                </SecretManifestListItemStyled>
                <SecretManifestListItemStyled>
                  <span style={{ color: '#e11d48', fontWeight: 'bold' }}>
                    •
                  </span>
                  <span>Сделать технологию доступной каждому</span>
                </SecretManifestListItemStyled>
                <SecretManifestListItemStyled>
                  <span style={{ color: '#e11d48', fontWeight: 'bold' }}>
                    •
                  </span>
                  <span>Изменить культуру вождения в России</span>
                </SecretManifestListItemStyled>
                <SecretManifestListItemStyled>
                  <span style={{ color: '#e11d48', fontWeight: 'bold' }}>
                    •
                  </span>
                  <span>Создать новый стандарт безопасности</span>
                </SecretManifestListItemStyled>
              </SecretManifestListStyled>
            </SecretManifestCardStyled>
          </SecretManifestGridStyled>
        </SecretManifestSectionStyled>

        <SecretManifestSectionStyled>
          <SecretManifestHelpSectionStyled>
            <SecretManifestSectionTitleStyled>
              Как вы можете помочь?
            </SecretManifestSectionTitleStyled>
            <SecretManifestHelpContentStyled>
              <SecretManifestHelpParagraphStyled>
                <strong>Инвестируйте.</strong> Даже небольшой вклад приближает
                нас к цели. Ваши инвестиции спасут жизни.
              </SecretManifestHelpParagraphStyled>
              <SecretManifestHelpParagraphStyled>
                <strong>Распространяйте информацию.</strong> Расскажите о
                проекте друзьям, коллегам, в социальных сетях. Чем больше людей
                узнает — тем быстрее мы сможем реализовать наши планы.
                <br />
                <SecretManifestHelpLinkStyled
                  href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a445ec51f563cc73b23dea/4d3de97db_2025English.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📄 Читайте научную статью о системе Кейди (RU/EN/CN)
                </SecretManifestHelpLinkStyled>
              </SecretManifestHelpParagraphStyled>
              <SecretManifestHelpParagraphStyled>
                <strong>Становитесь партнерами.</strong> Если у вас автосервис,
                автошкола, транспортная компания — присоединяйтесь к нашему
                проекту.
              </SecretManifestHelpParagraphStyled>
              <SecretManifestHelpParagraphStyled>
                <strong>Предлагайте идеи.</strong> У вас есть опыт, знания,
                связи? Мы открыты для сотрудничества и всегда рады новым идеям.
              </SecretManifestHelpParagraphStyled>
            </SecretManifestHelpContentStyled>
          </SecretManifestHelpSectionStyled>
        </SecretManifestSectionStyled>

        <SecretManifestTestBlockStyled>
          <SecretManifestTestBlockTitleStyled>
            Хотите сами стать обладателями системы для тестирования и
            демонстрации другим?
          </SecretManifestTestBlockTitleStyled>
          <SecretManifestTestBlockDescriptionStyled>
            Предоставьте свое транспортное средство для пилотной установки
            Кейди. Вы получите бесплатную установку системы, возможность
            протестировать ее в реальных условиях и стать частью проекта,
            который меняет дорожную безопасность в России.
          </SecretManifestTestBlockDescriptionStyled>
          <SecretManifestTestBlockCardStyled>
            <SecretManifestTestBlockCardTitleStyled>
              Особенно нам нужны:
            </SecretManifestTestBlockCardTitleStyled>
            <SecretManifestTestBlockListStyled>
              <SecretManifestTestBlockListItemStyled>
                <span>•</span>
                <span>
                  <strong>Коммуникаторы и инфлюенсеры</strong> — для большего
                  охвата аудитории
                </span>
              </SecretManifestTestBlockListItemStyled>
              <SecretManifestTestBlockListItemStyled>
                <span>•</span>
                <span>
                  <strong>Блогеры</strong> — которые могут рассказать о системе
                  своим подписчикам
                </span>
              </SecretManifestTestBlockListItemStyled>
              <SecretManifestTestBlockListItemStyled>
                <span>•</span>
                <span>
                  <strong>Владельцы информационных ресурсов</strong> — для
                  публикации материалов о проекте
                </span>
              </SecretManifestTestBlockListItemStyled>
            </SecretManifestTestBlockListStyled>
            <SecretManifestTestBlockRequirementsStyled>
              <SecretManifestTestBlockRequirementsTitleStyled>
                <strong>Что нам нужно от вас:</strong>
              </SecretManifestTestBlockRequirementsTitleStyled>
              <SecretManifestTestBlockRequirementsListStyled>
                <div>
                  <span>•</span>
                  <span>Марка вашего автомобиля</span>
                </div>
                <div>
                  <span>•</span>
                  <span>
                    Ссылка на ваш профиль в социальных сетях или информационный
                    ресурс
                  </span>
                </div>
              </SecretManifestTestBlockRequirementsListStyled>
              <SecretManifestTestBlockFinalTextStyled>
                Мы очень нуждаемся в этом! Вместе мы сможем сделать дороги
                безопаснее. 🙏
              </SecretManifestTestBlockFinalTextStyled>
            </SecretManifestTestBlockRequirementsStyled>
          </SecretManifestTestBlockCardStyled>
        </SecretManifestTestBlockStyled>
        <SecretManifestVolunteerBlockStyled>
          <SecretManifestVolunteerBlockTitleStyled>
            <HandHeart />
            Хотите помочь безвозмездно?
          </SecretManifestVolunteerBlockTitleStyled>
          <SecretManifestVolunteerBlockDescriptionStyled>
            Мы — небольшая команда энтузиастов с большой мечтой. У нас пока нет
            больших бюджетов и крупных инвесторов, но есть работающая
            технология, патенты и огромное желание сделать дороги безопаснее.
          </SecretManifestVolunteerBlockDescriptionStyled>
          <SecretManifestVolunteerBlockCardStyled>
            <SecretManifestVolunteerBlockCardTitleStyled>
              Мы будем благодарны за любую помощь:
            </SecretManifestVolunteerBlockCardTitleStyled>
            <SecretManifestVolunteerBlockListStyled>
              <SecretManifestVolunteerBlockListItemStyled>
                <span>→</span>
                <span>
                  <strong>Экспертиза:</strong> консультации по юридическим,
                  техническим, маркетинговым вопросам
                </span>
              </SecretManifestVolunteerBlockListItemStyled>
              <SecretManifestVolunteerBlockListItemStyled>
                <span>→</span>
                <span>
                  <strong>Связи:</strong> помощь в поиске партнеров, инвесторов,
                  дилеров
                </span>
              </SecretManifestVolunteerBlockListItemStyled>
              <SecretManifestVolunteerBlockListItemStyled>
                <span>→</span>
                <span>
                  <strong>Информационная поддержка:</strong> публикации,
                  интервью, упоминания в СМИ
                </span>
              </SecretManifestVolunteerBlockListItemStyled>
              <SecretManifestVolunteerBlockListItemStyled>
                <span>→</span>
                <span>
                  <strong>Профессиональные навыки:</strong> дизайн, копирайтинг,
                  видеопроизводство, IT
                </span>
              </SecretManifestVolunteerBlockListItemStyled>
              <SecretManifestVolunteerBlockListItemStyled>
                <span>→</span>
                <span>
                  <strong>Площадки для тестирования:</strong> автопарки,
                  таксопарки, автошколы
                </span>
              </SecretManifestVolunteerBlockListItemStyled>
            </SecretManifestVolunteerBlockListStyled>
          </SecretManifestVolunteerBlockCardStyled>
        </SecretManifestVolunteerBlockStyled>

        <SecretManifestFinalCtaStyled>
          <SecretManifestFinalCtaTextStyled>
            Каждый ваш шаг — это шаг к дорогам без трагедий. Каждое ваше
            действие — это вклад в спасение жизней.
          </SecretManifestFinalCtaTextStyled>
          <SecretManifestFinalCtaCardStyled>
            <SecretManifestFinalCtaCardTitleStyled>
              Свяжитесь с нами прямо сейчас:
            </SecretManifestFinalCtaCardTitleStyled>
            <SecretManifestFinalCtaContactListStyled>
              <SecretManifestFinalCtaContactItemStyled>
                <Mail />
                <a href="mailto:keyditech@yandex.ru">keyditech@yandex.ru</a>
              </SecretManifestFinalCtaContactItemStyled>
              <SecretManifestFinalCtaContactItemStyled>
                <Phone />
                <span>+7 927 636 2004 (WhatsApp, Telegram)</span>
              </SecretManifestFinalCtaContactItemStyled>
              <SecretManifestFinalCtaContactItemStyled>
                <span className="emoji">📱</span>
                <a
                  href="https://t.me/keyditech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @keyditech
                </a>
              </SecretManifestFinalCtaContactItemStyled>
            </SecretManifestFinalCtaContactListStyled>
            <SecretManifestFinalCtaNoteStyled>
              Не стесняйтесь писать! Мы рады любой помощи и сотрудничеству.
            </SecretManifestFinalCtaNoteStyled>
          </SecretManifestFinalCtaCardStyled>
        </SecretManifestFinalCtaStyled>
      </SecretManifestModalStyled>
    </SecretManifestModalContainer>
  )
}
