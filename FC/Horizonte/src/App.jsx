import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Inicio } from './pages/Inicio'
import { Sobre } from './pages/Sobre'
import { Cursos } from './pages/Cursos'
import Ingresso from './pages/Ingresso'
import { Contatos } from './pages/Contatos'
import Noticias from './pages/Noticias'

import './App.css'

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/cursos" element={<Cursos />} />
                    <Route path="/ingresso" element={<Ingresso/>} />
                    <Route path="/noticias" element={<Noticias/>} />
                    <Route path="/contato" element={<Contatos/>} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    )
}
