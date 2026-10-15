import React from 'react'
import { Users } from 'lucide-react'
import {
  TeamStyled,
  TeamHeaderStyled,
  TeamSectionStyled,
  TeamContainerStyled,
  TeamBadgeStyled,
  TeamDescriptionStyled,
  TeamGridStyled,
  TeamMemberStyled,
  TeamMemberImageStyled,
  TeamMemberNameStyled,
  TeamMemberRoleStyled,
  TeamMissionStyled,
  TeamAboutStyled,
} from './styles'
import { BaseGradientTitleStyled } from 'app/Custom/components/Layout/styles'

const teamData = [
  {
    id: 1,
    name: 'Гимранов А.Э.',
    role: 'Руководитель проекта',
    bio: 'Руководит разработкой и реализацией проекта, координирует работу команды и обеспечивает достижение поставленных целей.',
    avatar: '/img/teams/1.jpg',
  },
  {
    id: 2,
    name: 'Кружков В.Н.',
    role: 'Научный руководитель, к.т.н.',
    bio: 'Кандидат технических наук, обеспечивает научное сопровождение проекта и руководит исследовательской деятельностью.',
    avatar: '/img/teams/2.jpg',
  },
  {
    id: 3,
    name: 'Миргазетдинов И.А.',
    role: 'Инженер-технолог',
    bio: 'Отвечает за техническую реализацию и внедрение инновационных решений в производственный процесс.',
    avatar: '/img/teams/3.jpg',
  },
  {
    id: 4,
    name: 'Надиршина А.К.',
    role: 'Бухгалтер',
    bio: 'Обеспечивает финансовый учет и контроль, ведет бухгалтерскую отчетность проекта.',
    avatar: '/img/teams/4.jpg',
  },
  {
    id: 5,
    name: 'Николай Ланец',
    role: 'Техлид Web-разработки',
    bio: 'Руководит командой веб-разработки, отвечает за архитектуру и качество программного обеспечения.',
    avatar: '/img/teams/nikolai-lanets.jpg',
  },
]

export const TeamPage: React.FC = () => {
  return (
    <TeamStyled>
      {/* Header Section */}
      <TeamHeaderStyled>
        <TeamBadgeStyled>
          <Users size={16} />
          Наша команда
        </TeamBadgeStyled>
        <BaseGradientTitleStyled>
          Эксперты, стоящие за <span>инновацией</span>
        </BaseGradientTitleStyled>
        <TeamDescriptionStyled>
          Познакомьтесь с командой Кейди Технолоджи, которая создала уникальную
          (подтверждено патентами РФ) систему предотвращения попутных
          столкновений ТС.
        </TeamDescriptionStyled>
      </TeamHeaderStyled>

      {/* Team Members Section */}
      <TeamSectionStyled>
        <TeamContainerStyled>
          <TeamGridStyled>
            {teamData.map((member) => (
              <TeamMemberStyled key={member.id}>
                <TeamMemberImageStyled>
                  <img src={member.avatar} alt={member.name} />
                </TeamMemberImageStyled>
                <TeamMemberNameStyled>{member.name}</TeamMemberNameStyled>
                <TeamMemberRoleStyled>{member.role}</TeamMemberRoleStyled>
              </TeamMemberStyled>
            ))}
          </TeamGridStyled>
        </TeamContainerStyled>
      </TeamSectionStyled>

      {/* Mission Section */}
      <TeamSectionStyled>
        <TeamMissionStyled>
          <div className="mission-content">
            <h2 className="mission-title">Наша миссия</h2>
            <p className="mission-description">
              Мы стремимся сделать дороги безопаснее для всех участников
              движения, используя самые современные технологии и инновационные
              подходы. Наша цель — предотвратить аварии до их возникновения и
              сохранить жизни.
            </p>
          </div>
        </TeamMissionStyled>
      </TeamSectionStyled>

      {/* About Organization Section */}
      <TeamSectionStyled>
        <TeamAboutStyled>
          <h3 className="about-title">О нашей команде</h3>
          <div className="about-grid">
            <div className="about-section">
              <h4>Организация</h4>
              <p>
                <strong>ООО "Кейди Технолоджи"</strong>
                <br />
                Россия, г. Уфа
                <br />
                Стадия проекта: MVP
                <br />
                Направление: Транспорт и логистика
              </p>
            </div>
            <div className="about-section">
              <h4>Достижения</h4>
              <ul>
                <li>
                  <a href="/Patents">Получены 2 патента РФ</a>
                </li>
                <li>Создан и испытан прототип</li>
                <li>Грант "Старт-1" от ФСИ</li>
                <li>
                  <a
                    href="/img/teams/feafa6652_IR02_16-23__.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Публикация в журнале "Изобретатель и рационализатор"
                  </a>{' '}
                  (
                  <a
                    href="http://i-r.ru/archive/3683/2923/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    архив
                  </a>
                  )
                </li>
              </ul>
            </div>
          </div>
        </TeamAboutStyled>
      </TeamSectionStyled>
    </TeamStyled>
  )
}
