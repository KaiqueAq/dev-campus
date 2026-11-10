import './styles.css'


export default function Noticias() {
    return (
        <main class="grid-noticias">
            <div class="meu-container"> 
                <article class="card card-principal" style="background-image: url('assets/80bf90ffed.jpg');"> 
                    <div class="card-conteudo"> 
                        <h2>Professor da Faculdade Horizonte toma posse na Academia Cascavelense de Letras.</h2> 
                    </div> 
                </article> 
                
                <article class="card card-meio" style="background-image: url('assets/409a7b8f0a.jpg');"> 
                    <div class="card-conteudo"> 
                        <h2>Faculdade Focus celebra o Dia das Mulheres com momento especial para colaboradoras</h2> 
                    </div> 
                </article> 
                
                <article class="card" style="background-image: url('assets/95836ef68c.jpg');"> 
                    <div class="card-conteudo"> 
                        <h2>Faculdade Horizonte celebra o Dia das Mulheres com momento especial para colaboradoras</h2> 
                    </div> 
                </article> 
                
                <article class="card" style="background-image: url('assets/ad095dc5e0.jpg');"> 
                    <div class="card-conteudo"> 
                        <h2>Pós-doutor Alexandre Mazza agora faz parte do corpo docente da Faculdade Focus</h2> 
                    </div> 
                </article> 
             </div>

            <div>
                
                    <img src="assets/logo2.jpg" alt="logo" />
                    <h2>A faculdade é um espaço essencial para o crescimento acadêmico,
                     profissional e pessoal, oferecendo conhecimento,
                      experiências e oportunidades para construir o futuro.</h2>
            </div>

        </main>
    )
}