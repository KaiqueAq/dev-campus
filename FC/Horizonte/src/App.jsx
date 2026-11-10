import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CardCurso } from './components/Card'
import './App.css'

function PaginaCursos() {
    const listaCursos = [
        {
            id: 1,
            modalidade: 'Graduação',
            duracao: '2,5 anos',
            titulo: 'Análise e Desenvolvimento de Sistemas',
            descricao: 'Formação focada em engenharia de software, bancos de dados e desenvolvimento web.',
            imagem: 'ads.jpg',
            link: '/cursos/ads'
        },
        {
            id: 2,
            modalidade: 'Bacharelado',
            duracao: '4 anos',
            titulo: 'Administração',
            descricao: 'Prepare-se para liderar equipes e gerir negócios com visão estratégica.',
            imagem: 'adm.jpg',
            link: '/cursos/administracao'
        },
        {
            id: 3,
            modalidade: 'Bacharelado',
            duracao: '4 anos',
            titulo: 'Nutrição',
            descricao: 'Atue na promoção da saúde e qualidade de vida por meio da alimentação equilibrada e clínica.',
            imagem: 'nutri.jpg',
            link: '/cursos/nutricao'
        }
    ]

    return (
        <section className="courses-section">
            <h1>Nossos Cursos</h1>
            <div className="courses-grid">
                {listaCursos.map((curso) => (
                    <CardCurso
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
        </section>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <main style={{ padding: '2rem' }}>
                <Routes>
                    <Route path="/" element={<h1>Página Início</h1>} />
                    <Route path="/sobre" element={<h1>Página Sobre</h1>} />
                    <Route path="/cursos" element={<PaginaCursos />} />
                    <Route path="/ingresso" element={<h1>Página Ingresso</h1>} />
                    <Route path="/noticias" element={<h1>Página Notícias</h1>} />
                    <Route path="/contato" element={<h1>Página Contato</h1>} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    )
}
