import './styles.css';

// Importando as imagens corretamente da pasta src/assets
import imgPrincipal from '../../assets/Noticias/80bf90ffed.jpg'; 
import imgMeio from '../../assets/Noticias/409a7b8f0a.jpg';
import imgTerceira from '../../assets/Noticias/95836ef68c.jpg';
import imgQuarta from '../../assets/Noticias/ad095dc5e0.jpg';
import imgQuinta from '../../assets/Noticias/b2467e28ee.jpg';
import logo2 from '../../assets/logo2.jpg';

export default function Noticias() {
    return (
        <main className="grid-noticias">
            {/* Título Principal da Página */}
            <header className="noticias-header">
                <h1>Principais Notícias</h1>
                <p>Fique por dentro de tudo o que acontece na nossa comunidade acadêmica</p>
            </header>
             {/* princiapis noticias */}
            <div className="meu-container"> 
                <article className="card card-principal" style={{ backgroundImage: `url(${imgPrincipal})` }}> 
                    <div className="card-conteudo"> 
                        <h2>Faculdade Horizonte apresenta: um projeto sobre experiências significativas na formação acadêmica</h2> 
                    </div> 
                </article> 
                
                <article className="card card-meio" style={{ backgroundImage: `url(${imgMeio})` }}> 
                    <div className="card-conteudo"> 
                        <h2>Professor da Faculdade Horizonte toma posse na Academia Cascavelense de Letras.</h2> 
                    </div> 
                </article> 
                
                <article className="card" style={{ backgroundImage: `url(${imgTerceira})` }}> 
                    <div className="card-conteudo"> 
                        <h2>Faculdade Horizonte celebra o Dia das Mulheres com momento especial para colaboradoras</h2> 
                    </div> 
                </article> 
                
                <article className="card" style={{ backgroundImage: `url(${imgQuarta})` }}> 
                    <div className="card-conteudo"> 
                        <h2>VEM AÍ A IV SEMANA ACADÊMICA!</h2> 
                    </div> 
                </article> 

                <article className="card" style={{ backgroundImage: `url(${imgQuinta})` }}> 
                    <div className="card-conteudo"> 
                        <h2>Pós-doutor Alexandre Mazza agora faz parte do corpo docente da Faculdade Horizonte</h2> 
                    </div> 
                </article> 
                
             </div>
             <button className="btn-ver-mais" onClick={() => console.log('Carregar mais notícias...')}>
                    Ver Mais 
                </button>

            <div>
                 {/* logo final da pagina  */}
                <img src={logo2} alt="logo" />
                <h2>A faculdade é um espaço essencial para o crescimento acadêmico,
                 profissional e pessoal, oferecendo conhecimento,
                  experiências e oportunidades para construir o futuro.</h2>
            </div>
        </main>
    );
}
