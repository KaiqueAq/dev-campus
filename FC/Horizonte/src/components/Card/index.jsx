import './styles.css'
import { Link } from 'react-router-dom'

export function CardCurso(props) {
    return (
        <article className="course-card">
            <img className="course-card__image" src={props.imagem} alt={props.titulo} />
            
            <div className="course-card__body">
                <div className="course-card__meta">
                    <span className="course-card__badge">{props.modalidade}</span>
                    <span className="course-card__duration">{props.duracao}</span>
                </div>

                <h3 className="course-card__title">{props.titulo}</h3>
                <p className="course-card__description">{props.descricao}</p>

                <Link className="button course-card__button" to={props.link}>
                    Ver curso <span aria-hidden="true">→</span>
                </Link>
            </div>
        </article>
    )
}
