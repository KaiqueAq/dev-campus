import './styles.css';

export default function Contatos() {
  return (
    <main>
     <div class="header">
        <h1>Contatos</h1>
    </div>

    <div class="container">
        {/* <!-- Seção Comercial --> */}
        <div class="section">
            <h2>Comercial</h2>
            <ul>
                <li>(71) 3206-7800 (WhatsApp) - <span class="highlight">8h às 19h</span></li>
            </ul>
            <p><span class="highlight">Horário de funcionamento:</span></p>
            <p>Atendimento presencial:</p>
            <ul>
                <li>Segunda a sexta-feira - <span class="highlight">8h às 19h</span></li>
                <li>Sábado - <span class="highlight">8h às 12h</span></li>
            </ul>
        </div>

        {/* <!-- Central de Relacionamento ao Aluno --> */}
        <div class="section">
            <h2>Central de Relacionamento ao Aluno – CRA</h2>
            <ul>
                <li><span class="highlight">Presencial:</span> Segunda a sexta das 07hrs às 20:30hrs e aos sábados das 07hrs às 11hrs</li>
                <li><span class="highlight">Whatsapp: (71) 3206-7800</span> Segunda a sexta das 07hrs às 21hrs e aos sábados das 07hrs às 11hrs (para atendimento humano)</li>
            </ul>
        </div>

        {/* <!-- Centro de Educação A Distância --> */}
        <div class="section">
            <h2>Centro de Educação A Distância – CEAD</h2>
            <p>Para atendimento referente às disciplinas à distância ofertadas regularmente nos cursos presenciais e cursos de educação à distância</p>
            <ul>
                <li>E-mail: contatocead@Horizonte.br</li>
                <li>(71) 3206-7844 (WhatsApp) – <span class="highlight">8h às 17h</span></li>
            </ul>
        </div>

        {/* <!-- Apoio Horizonte --> */}
        <div class="section">
            <h2>Apoio Horizonte</h2>
            <p>Contato específico sobre algum problema na oferta dos serviços educacionais que, em função da excepcionalidade estabelecida pela pandemia, foram adaptados (realização das aulas mediadas por tecnologia, demandas financeiras e demais sugestões)</p>
            <ul>
                <li>E-mail: apoio@Horizonte.br</li>
            </ul>
        </div>

        {/* <!-- Assessoria de Tecnologia da Informação --> */}
        <div class="section">
            <h2>Assessoria de Tecnologia da Informação – TI</h2>
            <p>Suporte técnico voltado a sites, portal do aluno, AVA, acesso às ferramentas, problema com a senha entre outros.</p>
            <ul>
                <li>E-mail: saiadesuporte@Horizonte.br</li>
            </ul>
        </div>
    </div>
    </main>    
  )
}
