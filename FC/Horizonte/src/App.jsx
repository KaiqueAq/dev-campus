import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <main style={{ padding: '2rem' }}>
                <Routes>
                    <Route path="/" element={<h1>Página Início</h1>} />
                    <Route path="/sobre" element={<h1>Página Sobre</h1>} />
                    <Route path="/cursos" element={<h1>Página Cursos</h1>} />
                    <Route path="/ingresso" element={<h1>Página Ingresso</h1>} />
                    <Route path="/noticias" element={<h1>Página Notícias</h1>} />
                    <Route path="/contato" element={<h1>Página Contato</h1>} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
