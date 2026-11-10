import { Link } from 'react-router-dom'
import './styles.css'

export function Sobre() {
  const pilares = [
    {
      id: 1,
      titulo: 'Missão',
      descricao:
        'Promover uma educação superior de excelência, conectando teoria e prática para formar profissionais éticos, inovadores e preparados para transformar o mercado.'
    },
    {
      id: 2,
      titulo: 'Visão',
      descricao:
        'Ser reconhecida nacionalmente como referência em ensino inovador, empregabilidade e desenvolvimento acadêmico e tecnológico.'
    },
    {
      id: 3,
      titulo: 'Valores',
      descricao:
        'Ética e transparência, compromisso com o aluno, inovação constante, excelência acadêmica e responsabilidade social.'
    }
  ]

  const estrutura = [
    {
      id: 1,
      titulo: 'Laboratórios Especializados',
      descricao:
        'Espaços equipados com tecnologias atuais para práticas reais de cada área de formação.'
    },
    {
      id: 2,
      titulo: 'Biblioteca Física e Digital',
      descricao:
        'Acervo atualizado com milhares de títulos, periódicos científicos e salas de estudo individuais e em grupo.'
    },
    {
      id: 3,
      titulo: 'Núcleo de Carreiras e Inovação',
      descricao:
        'Ambiente dedicado à conexão com empresas parceiras, programas de estágio e mentoria profissional.'
    },
    {
      id: 4,
      titulo: 'Salas Interativas',
      descricao:
        'Ambientes climatizados, acessíveis e projetados para metodologias ativas de aprendizagem.'
    }
  ]

  return (
    <div className="page-sobre">
      <section className="page-header">
        <div className="container">
          <span className="page-header__route">/sobre</span>
          <h1 className="page-header__title">Sobre</h1>
          <p className="page-header__description">
            Conheça nossa história, missão, valores e infraestrutura.
          </p>
        </div>
      </section>

      <section className="apresentacao">
        <div className="container apresentacao__grid">
          <div className="apresentacao__conteudo">
            <h2>Nossa História</h2>
            <p>
              Fundada com o propósito de aproximar a sala de aula da realidade
              profissional, a <strong>Faculdade Horizonte Ensino Superior</strong>{' '}
              nasceu da união de educadores e especialistas apaixonados por
              inovação e desenvolvimento humano.
            </p>
            <p>
              Ao longo de nossa trajetória, evoluímos continuamente nossas
              matrizes curriculares e investimos em tecnologia educacional,
              consolidando uma instituição acolhedora, moderna e comprometida com
              o sucesso de cada estudante.
            </p>
            <div className="apresentacao__acoes">
              <Link className="button" to="/cursos">
                Conhecer cursos <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button--outline" to="/">
                Voltar ao início
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="destaques">
        <div className="container">
          <h2 className="destaques__title">Missão, Visão e Valores</h2>
          <div className="destaques__grid">
            {pilares.map((item) => (
              <article key={item.id} className="destaque-card">
                <h3 className="destaque-card__title">{item.titulo}</h3>
                <p className="destaque-card__description">{item.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="destaques">
        <div className="container">
          <h2 className="destaques__title">Nossa Estrutura</h2>
          <div className="destaques__grid">
            {estrutura.map((item) => (
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
