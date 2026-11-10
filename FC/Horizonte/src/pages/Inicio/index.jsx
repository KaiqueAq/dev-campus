import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './styles.css'

export function Inicio() {
  const destaques = [
    {
      id: 1,
      titulo: 'Ensino conectado ao mercado',
      descricao: 'Matriz curricular atualizada com foco na prática profissional.'
    },
    {
      id: 2,
      titulo: 'Corpo docente qualificado',
      descricao: 'Professores com sólida experiência acadêmica e atuação no mercado.'
    },
    {
      id: 3,
      titulo: 'Infraestrutura moderna',
      descricao: 'Ambientes preparados para o aprendizado dinâmico e inovador.'
    },
    {
      id: 4,
      titulo: 'Foco na empregabilidade',
      descricao: 'Apoio contínuo ao desenvolvimento de carreira e novas oportunidades.'
    }
  ]

  return (
    <div className="page-inicio">
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Início</h1>
          <p className="page-header__description">
            Apresentação da faculdade e destaques do site.
          </p>
        </div>
      </section>

      <section className="apresentacao">
        <div className="container apresentacao__grid">
          <div className="apresentacao__conteudo">
            <h2>Faculdade Horizonte Ensino Superior</h2>
            <p>
              A Faculdade Horizonte Ensino Superior é uma instituição focada na formação de
              profissionais preparados para os desafios atuais do mercado de trabalho.
            </p>
            <p>
              Combinamos ensino teórico atualizado e vivência prática, contando com infraestrutura
              moderna e corpo docente qualificado. Nossa missão é impulsionar o desenvolvimento
              acadêmico, incentivar a inovação e ampliar as oportunidades de carreira dos nossos
              estudantes.
            </p>
            <div className="apresentacao__acoes">
              <Link className="button" to="/cursos">
                Conhecer cursos <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button--outline" to="/sobre">
                Sobre a instituição
              </Link>
            </div>
          </div>
          <figure className="apresentacao__marca">
            <img src={logo} alt="Logo da Faculdade Horizonte" />
          </figure>
        </div>
      </section>

      <section className="destaques">
        <div className="container">
          <h2 className="destaques__title">Destaques</h2>
          <div className="destaques__grid">
            {destaques.map((item) => (
              <article key={item.id} className="destaque-card">
                <h3 className="destaque-card__title">{item.titulo}</h3>
                <p className="destaque-card__description">{item.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
