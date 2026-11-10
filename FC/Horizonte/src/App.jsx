import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Inicio } from './pages/Inicio'
import { Sobre } from './pages/Sobre'
import { Cursos } from './pages/Cursos'

import './App.css'

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/cursos/*" element={<Cursos />} />
                    <Route path="/ingresso" element={<h1>Página Ingresso</h1>} />
                    <Route path="/noticias" element={<h1>Página Notícias</h1>} />
                    <Route path="/contato" element={<h1>Página Contato</h1>} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    )
}
