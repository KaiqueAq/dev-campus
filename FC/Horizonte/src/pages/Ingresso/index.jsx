import './styles.css';
import imgLogo from '../../assets//logo2.jpg';


export default function Ingresso() {
    return (
        <div className="pagina-vagas">
            {/* 1. HERO / BANNER PRINCIPAL */}
            <header className="hero-banner">
                <div className="hero-conteudo">
                    {/* Aqui vai a logo centralizada se sobrepondo ao banner */}
                    <div className="logo-container">
                        <img src={imgLogo} alt="Logo Novo Horizonte" className="logo-badge" />
                    </div>
                    <h1>Viação Novo Horizonte</h1>
                </div>
            </header>

            {/* CONTAINER PRINCIPAL (Centraliza o conteúdo da página) */}
            <div className="vagas-container">
                
                {/* 2. TEXTO INSTITUCIONAL / QUEM SOMOS */}
                <section className="secao-institucional">
                    <h2>Junte-se ao nosso time!</h2>
                    <p>A Viação Novo Horizonte está em constante crescimento e busca profissionais talentosos...</p>
                    
                    <div className="lista-requisitos">
                        <h3>O que buscamos:</h3>
                        <ul>
                            <li>Comprometimento com a segurança</li>
                            <li>Excelência no atendimento ao cliente</li>
                            <li>Trabalho em equipe e dinamismo</li>
                        </ul>
                    </div>
                </section>

                {/* 3. GALERIA DE IMAGENS INSTITUCIONAIS */}
                <section className="galeria-fotos">
                    <div className="foto-grande">
                        <img src="assets/onibus-principal.jpg" alt="Ônibus da frota" />
                    </div>
                    <div className="fotos-pequenas">
                        <img src="assets/equipe.jpg" alt="Nossa equipe" />
                        <img src="assets/garagem.jpg" alt="Nossas instalações" />
                    </div>
                </section>

                {/* 4. FILTROS DE BUSCA DE VAGAS */}
                <section className="secao-filtros">
                    <h3>Vagas Disponíveis</h3>
                    <div className="filtros-grid">
                        <div className="campo-busca">
                            <label>Pesquisar por cargo</label>
                            <input type="text" placeholder="Ex: Motorista, Mecânico..." />
                        </div>
                        <div className="campo-busca">
                            <label>Cidade / Estado</label>
                            <select>
                                <option value="">Todos</option>
                                <option value="ba">Bahia</option>
                                <option value="sp">São Paulo</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* 5. TABELA DE VAGAS DISPONÍVEIS */}
                <section className="secao-tabela-vagas">
                    <table className="tabela-vagas">
                        <thead>
                            <tr>
                                <th>Cargo</th>
                                <th>Localidade</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="vaga-titulo">Motorista de Ônibus Rodoviário</td>
                                <td>Vitória da Conquista - BA</td>
                                <td><button className="btn-candidatar">Ver Vaga</button></td>
                            </tr>
                            <tr>
                                <td className="vaga-titulo">Mecânico de Manutenção Diesel</td>
                                <td>Guanambi - BA</td>
                                <td><button className="btn-candidatar">Ver Vaga</button></td>
                            </tr>
                            <tr>
                                <td className="vaga-titulo">Agente de Vendas / Bilheteiro</td>
                                <td>Salvador - BA</td>
                                <td><button className="btn-candidatar">Ver Vaga</button></td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Paginação simples da tabela */}
                    <div className="paginacao">
                        <button disabled>&lt;</button>
                        <button className="ativo">1</button>
                        <button>2</button>
                        <button>&gt;</button>
                    </div>
                </section>

                {/* 6. SEÇÃO DE DEPOIMENTOS / QUEM FAZ PARTE */}
                <section className="secao-depoimentos">
                    <h3>Quem faz parte do nosso time</h3>
                    <div className="grid-depoimentos">
                        <div className="card-depoimento">
                            <img src="assets/colaborador1.jpg" alt="Foto Colaborador" className="foto-perfil" />
                            <h4>Adriano Silva</h4>
                            <span className="cargo-tempo">Motorista - 5 anos de casa</span>
                            <p>"Trabalhar aqui me proporcionou crescimento profissional e orgulho em conectar pessoas todos os dias."</p>
                        </div>

                        <div className="card-depoimento">
                            <img src="assets/colaborador2.jpg" alt="Foto Colaborador" className="foto-perfil" />
                            <h4>Juliana Santos</h4>
                            <span className="cargo-tempo">Atendente - 2 anos de casa</span>
                            <p>"O ambiente acolhedor e focado no trabalho em equipe torna o dia a dia motivador."</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
