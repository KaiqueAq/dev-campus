import './styles.css'
import { Link } from 'react-router-dom'

export function Card(props) {
  return (
    <article className="course-card">
      <img className="course-card__image" src={props.imagem} alt={props.titulo} />
      
      <div className="course-card__body">
        <div className="course-card__meta">
          <span className="course-card__badge">{props.modalidade}</span>
          <span className="course-card__duration">{props.duracao}</span>
        </div>

        <div className="course-card__heading">
          <h3 className="course-card__title">{props.titulo}</h3>
          <svg
            className="course-card__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m2 9 10-5 10 5-10 5L2 9Z" />
            <path d="M6 11v5c3.5 2.5 8.5 2.5 12 0v-5M22 9v6" />
          </svg>
        </div>
        <p className="course-card__description">{props.descricao}</p>

        <Link className="button course-card__button" to={props.link}>
          Ver curso <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
