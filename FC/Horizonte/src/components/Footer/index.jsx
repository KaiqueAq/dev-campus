import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './styles.css'

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="container site-footer__main">
               
                <div className="site-footer__col site-footer__about">
                    <Link className="site-footer__brand" to="/" aria-label="Página inicial">
                        <img className="site-footer__logo" src={logo} alt="" />
                        <span>Faculdade Horizonte</span>
                    </Link>
                    <div className="site-footer__socials" aria-label="Redes sociais">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">YouTube</a>
                    </div>
                </div>
                <div className="site-footer__col">
                    <h4 className="site-footer__heading">Ensino & Ingresso</h4>
                    <nav className="site-footer__nav" aria-label="Links de Ensino e Ingresso">
                        <Link to="/cursos">Graduação</Link>
                        <Link to="/cursos">Pós-Graduação</Link>
                        <Link to="/cursos">Extensão</Link>
                        <Link to="/ingresso">Vestibular Agendado</Link>
                        <Link to="/ingresso">Nota do ENEM</Link>
                    </nav>
                </div>

                {/* Coluna 3: Área do Aluno */}
                <div className="site-footer__col">
                    <h4 className="site-footer__heading">Área do Aluno</h4>
                    <nav className="site-footer__nav" aria-label="Links da Área do Aluno">
                        <Link to="/sobre">Sobre a Instituição</Link>
                        <Link to="/noticias">Notícias e Eventos</Link>
                        <a href="#portal-aluno">Portal do Aluno</a>
                        <a href="#secretaria">Secretaria Virtual</a>
                        <a href="#biblioteca">Biblioteca</a>
                    </nav>
                </div>

                {/* Coluna 4: Contato & Endereço */}
                <div className="site-footer__col">
                    <h4 className="site-footer__heading">Contato & Endereço</h4>
                    <address className="site-footer__contact">
                        <span>Av. Principal, 1000 - Centro, Cidade - UF</span>
                        <span>Telefone: (00) 3000-0000</span>
                        <span>WhatsApp Matrículas: (00) 99000-0000</span>
                        <a href="mailto:contato@horizonte.edu.br">contato@horizonte.edu.br</a>
                        <Link className="site-footer__contact-link" to="/contato">Fale conosco →</Link>
                    </address>
                </div>
            </div>

            {/* Linha Inferior: Footer Bottom */}
            <div className="container site-footer__bottom">
                <div className="site-footer__legal">
                    <span>&copy; {new Date().getFullYear()} Faculdade Horizonte. Todos os direitos reservados.</span>
                    <span>CNPJ: 00.000.000/0001-00 | Instituição Credenciada pelo MEC.</span>
                </div>
                <nav className="site-footer__policies" aria-label="Links legais">
                    <Link to="/privacidade">Políticas de Privacidade</Link>
                    <Link to="/termos">Termos de Uso</Link>
                </nav>
            </div>
        </footer>
    )
}
