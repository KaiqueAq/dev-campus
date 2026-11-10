import { Card } from '../../components/Card'
import imgAds from '../../assets/ads.jpg'
import imgAdm from '../../assets/adm.jpg'
import imgNutri from '../../assets/nutri.jpg'
import { Link, useLocation } from 'react-router-dom'
import './styles.css'

export function Cursos() {
  const listaCursos = [
    {
      id: 1,
      modalidade: 'Graduação',
      duracao: '2,5 anos',
      titulo: 'Análise e Desenvolvimento de Sistemas',
      descricao:
      'Formação focada em engenharia de software, bancos de dados e desenvolvimento web.',
      imagem: imgAds,
      link: '/cursos/ads',
      slug: 'ads',
      areasAprendizado: [
        'Lógica de programação e desenvolvimento de software',
        'Desenvolvimento de aplicações web',
        'Bancos de dados e modelagem de sistemas'
      ],
      areasAtuacao: [
        'Desenvolvimento de software e aplicações',
        'Análise e levantamento de requisitos',
        'Qualidade e testes de sistemas'
      ]
    },
    {
      id: 2,
      modalidade: 'Bacharelado',
      duracao: '4 anos',
      titulo: 'Administração',
      descricao:
        'Prepare-se para liderar equipes e gerir negócios com visão estratégica.',
      imagem: imgAdm,
      link: '/cursos/administracao',
      slug: 'administracao',
      areasAprendizado: [
        'Gestão de pessoas e liderança',
        'Planejamento estratégico e organização',
        'Fundamentos de finanças e marketing'
      ],
      areasAtuacao: [
        'Gestão de equipes e processos',
        'Planejamento e operações de negócios',
        'Empreendedorismo e consultoria'
      ]
    },
    {
      id: 3,
      modalidade: 'Bacharelado',
      duracao: '4 anos',
      titulo: 'Nutrição',
      descricao:
        'Atue na promoção da saúde e qualidade de vida por meio da alimentação equilibrada e clínica.',
      imagem: imgNutri,
      link: '/cursos/nutricao',
      slug: 'nutricao',
      areasAprendizado: [
        'Ciência dos alimentos e alimentação equilibrada',
        'Avaliação e educação nutricional',
        'Nutrição clínica e promoção da saúde'
      ],
      areasAtuacao: [
        'Atendimento e acompanhamento nutricional',
        'Nutrição em serviços de alimentação',
        'Educação alimentar e promoção da saúde'
      ]
    }
  ]

  const location = useLocation()
  const slugAtual = location.pathname.split('/').filter(Boolean)[1]
  const cursoAtual = listaCursos.find((curso) => curso.slug === slugAtual)

  if (slugAtual && cursoAtual) {
    return (
      <div className="page-cursos page-cursos--detalhe">
        <section className="page-header">
          <div className="container">
            <span className="page-header__route">{cursoAtual.link}</span>
            <h1 className="page-header__title">{cursoAtual.titulo}</h1>
            <p className="page-header__description">{cursoAtual.descricao}</p>
          </div>
        </section>

        <section className="course-detail">
          <div className="container">
            <Link className="course-detail__back" to="/cursos">
              <span aria-hidden="true">←</span> Voltar para cursos
            </Link>

            <div className="course-detail__hero">
              <img
                className="course-detail__image"
                src={cursoAtual.imagem}
                alt={`Estudantes e área de ${cursoAtual.titulo}`}
              />
              <div className="course-detail__summary">
                <div className="course-card__meta">
                  <span className="course-card__badge">{cursoAtual.modalidade}</span>
                  <span className="course-card__duration">{cursoAtual.duracao}</span>
                </div>
                <h2>Sobre o curso</h2>
                <p>{cursoAtual.descricao}</p>
                <p>
                  Desenvolva conhecimentos para conectar teoria e prática e se
                  preparar para os desafios da área.
                </p>
              </div>
            </div>

            <div className="course-detail__sections">
              <section className="course-detail__panel">
                <h2>O que você vai estudar</h2>
                <ul>
                  {cursoAtual.areasAprendizado.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </section>
              <section className="course-detail__panel">
                <h2>Possibilidades de atuação</h2>
                <p>
                  A formação pode abrir caminhos em diferentes contextos
                  profissionais, de acordo com sua trajetória e interesses:
                </p>
                <ul>
                  {cursoAtual.areasAtuacao.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="page-cursos">
      <section className="page-header">
        <div className="container">
          <span className="page-header__route">/cursos</span>
          <h1 className="page-header__title">Nossos Cursos</h1>
          <p className="page-header__description">
            Conheça nossas opções de graduação e bacharelado.
          </p>
        </div>
      </section>

      <section className="courses-section">
        <div className="container">
          <div className="courses-grid">
            {listaCursos.map((curso) => (
              <Card
                key={curso.id}
                modalidade={curso.modalidade}
                duracao={curso.duracao}
                titulo={curso.titulo}
                descricao={curso.descricao}
                imagem={curso.imagem}
                link={curso.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
