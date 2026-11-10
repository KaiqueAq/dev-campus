import React from 'react';
import './styles.css';
import './formas.css'; // <- novo arquivo (ou cole o conteúdo dele no styles.css)
import imgLogo from '../../assets/logo2.jpg';
import imgEstudante from '../../assets/garoto.png';

// Troque pelas suas imagens
import imgSimplificado from '../../assets/imgSimplificado.png';
import imgEnem from '../../assets/imgEnem.png';
import imgSegunda from '../../assets/imgSegunda.png';
import imgTransferencia from '../../assets/imgTransferencia.png';


// Dados da nova seção: edite aqui para o seu cenário.
// botoes[].tipo: 'primario' (rosa) | 'contorno' (borda branca) | 'branco'
const formas = [
    {
        id: 'simplificado',
        titulo: 'Ingresso simplificado',
        subtitulo: 'Se você deseja ingressar na graduação de uma forma simples, então, a Estácio é pra você!',
        itens: [
            'Envie sua carta de apresentação agora e comece a estudar.',
            'Acesso rápido e fácil, sem esperar o próximo semestre.',
        ],
        botoes: [{ texto: 'Inscreva-se', tipo: 'primario', href: '#' }],
        imagem: imgSimplificado,
        alt: 'Estudante sorrindo segurando um caderno',
    },
    {
        id: 'enem',
        titulo: 'Enem',
        subtitulo: 'Use sua nota do Enem dos últimos dez anos e estude no maior do Brasil!',
        itens: [
            'Entre na Estácio com sua nota do Enem, sem precisar fazer o vestibular.',
            'Garanta bolsa de até 100% no curso todo.',
        ],
        botoes: [
            { texto: 'Conheça o Enem', tipo: 'contorno', href: '#' },
            { texto: 'Calcule sua média', tipo: 'branco', href: '#' },
        ],
        imagem: imgEnem,
        alt: 'Estudante sorrindo com mochila',
    },
    {
        id: 'segunda-graduacao',
        titulo: 'Segunda graduação',
        subtitulo: 'Você pode complementar sua primeira graduação e abrir portas para uma mudança de carreira.',
        itens: [
            'Use o diploma da sua primeira graduação para ingressar.',
            'Aproveite os créditos das disciplinas anteriores.',
        ],
        botoes: [{ texto: 'Inscreva-se', tipo: 'primario', href: '#' }],
        imagem: imgSegunda,
        alt: 'Estudante com cadernos nos braços',
    },
    {
        id: 'transferencia',
        titulo: 'Transferência externa',
        subtitulo: 'Mude para a Estácio e conclua seu curso, com condições especiais.',
        itens: [
            'Faça a transferência de faculdade sem custos.',
            'Aproveite os créditos de disciplinas que você já cursou.',
        ],
        botoes: [{ texto: 'Inscreva-se', tipo: 'primario', href: '#' }],
        imagem: imgTransferencia,
        alt: 'Estudantes sorrindo em sala de aula',
    },
    {
        id: 'transferencia',
        titulo: 'Histórias que inspiram',
        subtitulo: 'Descubra o que os nossos alunos falam sobre nós, suas experiências e aprendizados de sobra para colocar no currículo.',
        itens: [
            
        ],
        botoes: [{ texto: 'Inscreva-se', tipo: 'primario', href: '#' }],
        video: 'https://anonmp4.art/embed/cBNAGmKSh49VZzc',
        alt: 'Estudantes sorrindo em sala de aula',
    },
];

export default function Ingresso() {
    return (
        <div className="pagina-vagas">
            {/* 1. HERO / BANNER PRINCIPAL */}
            <header className="hero-banner">
                <div className="hero-conteudo">
                    <div className="logo-container">
                        <img src={imgLogo} alt="Logo Novo Horizonte" className="logo-badge" />
                    </div>
                    <h1>Viação Novo Horizonte</h1>
                </div>
            </header>

            {/* Faixa azul */}
            <div className="hero">
                <div className="hero__container">
                    <h2 className="hero__titulo">Formas de Ingresso</h2>
                    <p className="hero__subtitulo">Conheça nossas formas de ingresso e saiba qual combina mais com você!</p>
                </div>
            </div>

            <main>
                <section className="ingresso">
                    <figure className="ingresso__imagem">
                        <img src={imgEstudante} alt="Estudante sorrindo com mochila e cadernos" />
                    </figure>

                    <div className="ingresso__conteudo">
                        <h2 className="ingresso__titulo">Escolha a melhor opção para você</h2>
                        <p className="ingresso__descricao">Explore as possibilidades de realizar o seu sonho.</p>

                        <div className="carrossel">
                            <div className="carrossel__trilho">
                                <article className="card card--ativo">
                                    <h3 className="card__titulo">Ingresso simplificado</h3>
                                    <p className="card__texto">Entre com uma carta de apresentação.</p>
                                    <a className="card__link" href="#simplificado">Confira detalhes <span aria-hidden="true">→</span></a>
                                </article>

                                <article className="card">
                                    <h3 className="card__titulo">Enem</h3>
                                    <p className="card__texto">Use sua nota para entrar na Graduação Estácio.</p>
                                    <a className="card__link" href="#enem">Confira detalhes <span aria-hidden="true">→</span></a>
                                </article>

                                <article className="card">
                                    <h3 className="card__titulo">Segunda graduação</h3>
                                    <p className="card__texto">Aproveite suas disciplinas já cursadas.</p>
                                    <a className="card__link" href="#segunda-graduacao">Confira detalhes <span aria-hidden="true">→</span></a>
                                </article>
                            </div>

                            <div className="carrossel__controles">
                                <div className="carrossel__pontos">
                                    <button className="ponto ponto--ativo" aria-label="Item 1"></button>
                                    <button className="ponto" aria-label="Item 2"></button>
                                    <button className="ponto" aria-label="Item 3"></button>
                                    <button className="ponto" aria-label="Item 4"></button>
                                    <button className="ponto" aria-label="Item 5"></button>
                                    <button className="ponto" aria-label="Item 6"></button>
                                </div>

                                <div className="carrossel__setas">
                                    <button className="seta" aria-label="Anterior">‹</button>
                                    <button className="seta" aria-label="Próximo">›</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NOVA SEÇÃO: formas detalhadas, fundo alterna branco/azul */}
                <section className="formas">
                    {formas.map((forma, i) => (
                        <article
                            key={forma.id}
                            id={forma.id}
                            className={`forma ${i % 2 === 0 ? 'forma--claro' : 'forma--escuro'}`}
                        >
                            <div className="forma__inner">
                                <div className="forma__texto">
                                    <h3 className="forma__titulo">{forma.titulo}</h3>
                                    <p className="forma__subtitulo">{forma.subtitulo}</p>

                                    <ul className="forma__lista">
                                        {forma.itens.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>

                                    <div className="forma__botoes">
                                        {forma.botoes.map((b) => (
                                            <a key={b.texto} href={b.href} className={`btn btn--${b.tipo}`}>
                                                {b.texto}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="forma__imagem">
                                    {forma.video ? (
                                        <iframe
                                            src={forma.video}
                                            title={forma.alt}
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <img src={forma.imagem} alt={forma.alt} />
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
}
