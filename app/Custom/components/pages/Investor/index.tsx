import React, { useState } from 'react'
import { TrendingUp, FileText } from 'lucide-react'
import {
  InvestorPageStyled,
  InvestorHeaderStyled,
  InvestorBadgeStyled,
  InvestorSectionStyled,
  DocumentGridStyled,
  DocumentCardStyled,
  DocumentHeaderStyled,
  DocumentTitleStyled,
  DocumentIconStyled,
  DocumentDescriptionStyled,
  DocumentButtonContainerStyled,
  DocumentButtonStyled,
  StagesGridStyled,
  StageCardStyled,
  StageHeaderStyled,
  StageNumberStyled,
  StageInfoStyled,
  StageTitleStyled,
  StageBadgeStyled,
  StageContentStyled,
  StageHeadingStyled,
  StageDescriptionStyled,
  StageGoalStyled,
  BusinessModelStyled,
  BusinessModelTitleStyled,
  BusinessModelDescriptionStyled,
  BusinessModelGridStyled,
  BusinessModelCardStyled,
  BusinessModelCardTitleStyled,
  BusinessModelCardDescriptionStyled,
  ScenariosSectionStyled,
  ScenariosTitleStyled,
  ScenariosGridStyled,
  ScenarioCardStyled,
  ScenarioTitleStyled,
  ScenarioDetailsStyled,
  ScenarioDetailStyled,
  OpportunitiesSectionStyled,
  OpportunitiesTitleStyled,
  OpportunitiesGridStyled,
  OpportunityCardStyled,
  OpportunityIconStyled,
  OpportunityTitleStyled,
  OpportunityDescriptionStyled,
  PrioritySectionStyled,
  PriorityTitleStyled,
  PriorityDescriptionStyled,
  PriorityGridStyled,
  PriorityCardStyled,
  PriorityImageStyled,
  PriorityCardTitleStyled,
  AdvantagesSectionStyled,
  AdvantagesTitleStyled,
  AdvantagesGridStyled,
  AdvantagesListStyled,
  AdvantagesItemsStyled,
  AdvantageItemStyled,
  ComparisonCardStyled,
  ComparisonTitleStyled,
  ComparisonItemsStyled,
  ComparisonItemStyled,
  ComparisonHighlightStyled,
  ComparisonNoteStyled,
  CtaSectionStyled,
  CtaCardStyled,
  CtaTitleStyled,
  CtaDescriptionStyled,
  CtaContactsStyled,
  CtaContactStyled,
  CtaContactInfoStyled,
} from './styles'
import { BaseGradientTitleStyled } from 'app/Custom/components/Layout/styles'
// import { LanguageToggle } from './components/LanguageToggle'
import { SecretButton } from './components/SecretButton'
import { SecretManifestModal } from './components/SecretManifestModal'
import {
  documentsData,
  stagesData,
  businessModelData,
  scenariosData,
  opportunitiesData,
  priorityData,
  advantagesData,
  comparisonData,
} from './data'

interface DocumentItem {
  id: number
  title: string
  description: string
  pdfUrl: string
  buttonText: string
  iconColor: 'emerald' | 'blue'
}

export const InvestorPage: React.FC = () => {
  // const [currentLanguage, setCurrentLanguage] = useState<'ru' | 'en'>('ru')
  const [isSecretModalOpen, setIsSecretModalOpen] = useState(false)

  // const handleLanguageChange = React.useCallback((language: 'ru' | 'en') => {
  //   setCurrentLanguage(language)
  // }, [])

  const handleSecretButtonClick = React.useCallback(() => {
    setIsSecretModalOpen(true)
  }, [])

  const handleSecretModalClose = React.useCallback(() => {
    setIsSecretModalOpen(false)
  }, [])

  const renderDocument = React.useCallback(
    (document: DocumentItem) => (
      <DocumentCardStyled key={document.id}>
        <DocumentHeaderStyled>
          <DocumentTitleStyled
            $color={document.iconColor}
            $bold={document.iconColor === 'blue'}
          >
            <DocumentIconStyled $color={document.iconColor}>
              <FileText size={24} />
            </DocumentIconStyled>
            {document.title}
          </DocumentTitleStyled>
        </DocumentHeaderStyled>
        <DocumentDescriptionStyled>
          {document.description}
        </DocumentDescriptionStyled>
        <DocumentButtonContainerStyled>
          <DocumentButtonStyled
            href={document.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            $color={document.iconColor}
          >
            {document.iconColor === 'emerald' && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: '8px' }}
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            )}
            {document.buttonText}
            {document.iconColor === 'blue' && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginLeft: '8px' }}
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            )}
          </DocumentButtonStyled>
        </DocumentButtonContainerStyled>
      </DocumentCardStyled>
    ),
    [],
  )

  return (
    <InvestorPageStyled>
      {/* Language Toggle - Above Header */}
      {/* <LanguageToggle
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      /> */}

      {/* Header Section */}
      <InvestorHeaderStyled>
        <InvestorBadgeStyled>
          <TrendingUp size={16} />
          Инвестиционная презентация
        </InvestorBadgeStyled>
        <BaseGradientTitleStyled>
          <span>Для инвестора</span>
        </BaseGradientTitleStyled>
        <p>
          Присоединяйтесь к революции в области транспортной безопасности.
          Инвестиции в технологию, которая спасает жизни.
        </p>
      </InvestorHeaderStyled>

      {/* Documents Section */}
      <InvestorSectionStyled>
        <DocumentGridStyled>
          {documentsData.map(renderDocument)}
        </DocumentGridStyled>
      </InvestorSectionStyled>

      {/* Development Stages Section */}
      <InvestorSectionStyled>
        <h2
          style={{
            fontSize: '30px',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          Этапы развития проекта
        </h2>
        <StagesGridStyled>
          {stagesData.map((stage) => (
            <StageCardStyled key={stage.id}>
              <StageHeaderStyled>
                <StageInfoStyled>
                  <StageNumberStyled>{stage.number}</StageNumberStyled>
                  <div>
                    <StageTitleStyled>{stage.title}</StageTitleStyled>
                    <StageBadgeStyled $status={stage.status}>
                      {stage.status === 'completed' && 'Завершен'}
                      {stage.status === 'search' && 'Поиск инвестора'}
                      {stage.status === 'future' && 'Будущее'}
                    </StageBadgeStyled>
                  </div>
                </StageInfoStyled>
              </StageHeaderStyled>
              <StageContentStyled>
                <StageHeadingStyled>{stage.description}</StageHeadingStyled>
                <StageDescriptionStyled>{stage.details}</StageDescriptionStyled>
                <StageGoalStyled>
                  <span>Цель:</span> {stage.goal}
                </StageGoalStyled>
              </StageContentStyled>
            </StageCardStyled>
          ))}
        </StagesGridStyled>
      </InvestorSectionStyled>

      {/* Business Model Section */}
      <InvestorSectionStyled>
        <BusinessModelStyled>
          <BusinessModelTitleStyled>
            Бизнес-модель DODI
          </BusinessModelTitleStyled>
          <BusinessModelDescriptionStyled>
            Наша бизнес-модель (Distributed Outsourcing with Dealer Integration)
            — это гибридный подход, сочетающий аутсорсинг производства с
            развитой дилерской сетью для установки и обслуживания.
          </BusinessModelDescriptionStyled>
          <BusinessModelGridStyled>
            {businessModelData.map((item) => (
              <BusinessModelCardStyled key={item.id} $variant={item.variant}>
                <BusinessModelCardTitleStyled>
                  {item.title}
                </BusinessModelCardTitleStyled>
                <BusinessModelCardDescriptionStyled>
                  {item.description}
                </BusinessModelCardDescriptionStyled>
              </BusinessModelCardStyled>
            ))}
          </BusinessModelGridStyled>
        </BusinessModelStyled>
      </InvestorSectionStyled>

      {/* Investment Scenarios Section */}
      <ScenariosSectionStyled>
        <ScenariosTitleStyled>Сценарии инвестирования</ScenariosTitleStyled>
        <ScenariosGridStyled>
          {scenariosData.map((scenario) => (
            <ScenarioCardStyled key={scenario.id}>
              <ScenarioTitleStyled>{scenario.title}</ScenarioTitleStyled>
              <ScenarioDetailsStyled>
                {scenario.details.map((detail) => (
                  <ScenarioDetailStyled key={`${detail.label}-${detail.value}`}>
                    <span>{detail.label}</span>
                    <span data-color={detail.color}>{detail.value}</span>
                  </ScenarioDetailStyled>
                ))}
              </ScenarioDetailsStyled>
            </ScenarioCardStyled>
          ))}
        </ScenariosGridStyled>
      </ScenariosSectionStyled>

      {/* Market Opportunities Section */}
      <OpportunitiesSectionStyled>
        <OpportunitiesTitleStyled>
          Рыночные возможности
        </OpportunitiesTitleStyled>
        <OpportunitiesGridStyled>
          {opportunitiesData.map((opportunity) => (
            <OpportunityCardStyled key={opportunity.id}>
              <OpportunityIconStyled $variant={opportunity.variant}>
                <opportunity.icon />
              </OpportunityIconStyled>
              <OpportunityTitleStyled>
                {opportunity.title}
              </OpportunityTitleStyled>
              <OpportunityDescriptionStyled>
                {opportunity.description}
              </OpportunityDescriptionStyled>
            </OpportunityCardStyled>
          ))}
        </OpportunitiesGridStyled>
        <PrioritySectionStyled>
          <PriorityTitleStyled>
            Приоритетные направления для внедрения
          </PriorityTitleStyled>
          <PriorityDescriptionStyled>
            При выходе на рынок в первую очередь планируется оснащение системами
            "Кейди" следующих видов транспорта повышенного социального риска:
          </PriorityDescriptionStyled>
          <PriorityGridStyled>
            {priorityData.map((priority) => (
              <PriorityCardStyled key={priority.id} $variant={priority.variant}>
                <PriorityImageStyled>
                  <img src={priority.image} alt={priority.title} />
                </PriorityImageStyled>
                <PriorityCardTitleStyled>
                  {priority.title}
                </PriorityCardTitleStyled>
              </PriorityCardStyled>
            ))}
          </PriorityGridStyled>
        </PrioritySectionStyled>
      </OpportunitiesSectionStyled>

      {/* Competitive Advantages Section */}
      <AdvantagesSectionStyled>
        <AdvantagesTitleStyled>Конкурентные преимущества</AdvantagesTitleStyled>
        <AdvantagesGridStyled>
          <AdvantagesListStyled>
            <h3>Ключевые преимущества:</h3>
            <AdvantagesItemsStyled>
              {advantagesData.map((advantage) => (
                <AdvantageItemStyled key={advantage}>
                  {advantage}
                </AdvantageItemStyled>
              ))}
            </AdvantagesItemsStyled>
          </AdvantagesListStyled>
          <ComparisonCardStyled>
            <ComparisonTitleStyled>Сравнение с аналогами</ComparisonTitleStyled>
            <ComparisonItemsStyled>
              {comparisonData.map((item) => (
                <ComparisonItemStyled key={item.label}>
                  <span>{item.label}</span>
                  <ComparisonHighlightStyled $variant={item.variant}>
                    {item.value}
                  </ComparisonHighlightStyled>
                </ComparisonItemStyled>
              ))}
            </ComparisonItemsStyled>
            <ComparisonNoteStyled>
              <p>
                <strong>Уникальность:</strong> Возможна установка на автомобили
                любого года выпуска, в отличие от конкурентов, устанавливаемых
                только на конвейере.
              </p>
            </ComparisonNoteStyled>
          </ComparisonCardStyled>
        </AdvantagesGridStyled>
      </AdvantagesSectionStyled>

      {/* CTA Section */}
      <CtaSectionStyled>
        <CtaCardStyled>
          <CtaTitleStyled>Готовы инвестировать в будущее?</CtaTitleStyled>
          <CtaDescriptionStyled>
            Присоединяйтесь к проекту, который может изменить транспортную
            безопасность в России и сохранить тысячи жизней.
          </CtaDescriptionStyled>
          <CtaContactsStyled>
            <CtaContactStyled>Контакты для инвесторов:</CtaContactStyled>
            <CtaContactInfoStyled>keyditech@yandex.ru</CtaContactInfoStyled>
            <CtaContactInfoStyled>+7 927 636 2004</CtaContactInfoStyled>
          </CtaContactsStyled>
        </CtaCardStyled>
      </CtaSectionStyled>

      {/* How You Can Help Section */}
      <div
        style={{
          background: 'linear-gradient(to bottom right, #fed7aa6e, #fed7aa6e)',
          padding: '2rem',
          borderRadius: '1.5rem',
          border: '1px solid #fdba7457',
          marginTop: '4rem',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif',
        }}
      >
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '1rem',
          }}
        >
          Как вы можете помочь?
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            color: '#475569',
            lineHeight: '1.625',
          }}
        >
          <p style={{ fontSize: '1.125rem', margin: 0 }}>
            <strong style={{ color: '#1e293b' }}>Инвестируйте.</strong> Даже
            небольшой вклад приближает нас к цели. Ваши инвестиции спасут жизни.
          </p>
          <p style={{ fontSize: '1.125rem', margin: 0 }}>
            <strong style={{ color: '#1e293b' }}>
              Распространяйте информацию.
            </strong>{' '}
            Расскажите о проекте друзьям, коллегам, в социальных сетях. Чем
            больше людей узнает — тем быстрее мы сможем реализовать наши планы.
            <br />
            <a
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a445ec51f563cc73b23dea/4d3de97db_2025English.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '0.5rem',
                color: '#059669',
                fontWeight: 600,
                textDecoration: 'underline',
              }}
            >
              📄 Читайте научную статью о системе Кейди (RU/EN/CN)
            </a>
          </p>
          <p style={{ fontSize: '1.125rem', margin: 0 }}>
            <strong style={{ color: '#1e293b' }}>
              Становитесь партнерами.
            </strong>{' '}
            Если у вас автосервис, автошкола, транспортная компания —
            присоединяйтесь к нашему проекту.
          </p>
          <p style={{ fontSize: '1.125rem', margin: 0 }}>
            <strong style={{ color: '#1e293b' }}>Предлагайте идеи.</strong> У
            вас есть опыт, знания, связи? Мы открыты для сотрудничества и всегда
            рады новым идеям.
          </p>
        </div>
      </div>

      {/* Secret Button Section */}
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <SecretButton onClick={handleSecretButtonClick} />
      </div>

      {/* Secret Modal */}
      <SecretManifestModal
        isOpen={isSecretModalOpen}
        onClose={handleSecretModalClose}
      />
    </InvestorPageStyled>
  )
}
