import { Card } from '../../components/Card'
import imgAds from '../../assets/ads.jpg'
import imgAdm from '../../assets/adm.jpg'
import imgNutri from '../../assets/nutri.jpg'
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
      link: '/cursos/ads'
    },
    {
      id: 2,
      modalidade: 'Bacharelado',
      duracao: '4 anos',
      titulo: 'Administração',
      descricao:
        'Prepare-se para liderar equipes e gerir negócios com visão estratégica.',
      imagem: imgAdm,
      link: '/cursos/administracao'
    },
    {
      id: 3,
      modalidade: 'Bacharelado',
      duracao: '4 anos',
      titulo: 'Nutrição',
      descricao:
        'Atue na promoção da saúde e qualidade de vida por meio da alimentação equilibrada e clínica.',
      imagem: imgNutri,
      link: '/cursos/nutricao'
    }
  ]

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
