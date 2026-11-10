import './styles.css'

const canaisContato = [
  {
    id: 'endereco',
    rotulo: 'Endereço',
    valor: 'Av. Principal, 1000 - Centro, Cidade - UF',
    detalhe: 'Visite a Faculdade Horizonte',
    simbolo: '⌖'
  },
  {
    id: 'telefone',
    rotulo: 'Telefone',
    valor: '(00) 3000-0000',
    detalhe: 'Atendimento de segunda a sexta',
    simbolo: '☎'
  },
  {
    id: 'whatsapp',
    rotulo: 'WhatsApp Matrículas',
    valor: '(00) 99000-0000',
    detalhe: 'Tire suas dúvidas sobre os cursos',
    simbolo: '◉'
  },
  {
    id: 'email',
    rotulo: 'E-mail',
    valor: 'contato@horizonte.edu.br',
    detalhe: 'Responderemos assim que possível',
    simbolo: '@'
  }
]

export function Contatos() {
  return (
    <div className="page-contatos">
      <section className="page-header">
        <div className="container">
          <span className="page-header__route">/contato</span>
          <h1 className="page-header__title">Contato</h1>
          <p className="page-header__description">
            Estamos prontos para ajudar. Escolha um canal de atendimento ou envie
            sua mensagem.
          </p>
        </div>
      </section>

      <section className="contato-conteudo">
        <div className="container contato-conteudo__grid">
          <div className="contato-informacoes">
            <span className="contato-eyebrow">FALE COM A GENTE</span>
            <h2>Como podemos ajudar?</h2>
            <p className="contato-informacoes__intro">
              Entre em contato para saber mais sobre a faculdade, nossos cursos e
              o processo de ingresso.
            </p>

            <div className="contato-canais">
              {canaisContato.map((canal) => (
                <article className="contato-canal" key={canal.id}>
                  <span className="contato-canal__simbolo" aria-hidden="true">
                    {canal.simbolo}
                  </span>
                  <div>
                    <h3>{canal.rotulo}</h3>
                    {canal.id === 'email' ? (
                      <a href={`mailto:${canal.valor}`}>{canal.valor}</a>
                    ) : canal.id === 'telefone' || canal.id === 'whatsapp' ? (
                      <a href={`tel:${canal.valor.replace(/[^\d+]/g, '')}`}>
                        {canal.valor}
                      </a>
                    ) : (
                      <p>{canal.valor}</p>
                    )}
                    <span>{canal.detalhe}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="contato-horario">
              <span className="contato-horario__indicador" aria-hidden="true" />
              <p>
                <strong>Horário de atendimento</strong>
                <span>Segunda a sexta, das 8h às 18h</span>
              </p>
            </div>
          </div>

          <form className="contato-formulario">
            <div className="contato-formulario__cabecalho">
              <span className="contato-eyebrow">MENSAGEM</span>
              <h2>Envie sua mensagem</h2>
              <p>Preencha os campos abaixo e conte como podemos ajudar.</p>
            </div>

            <div className="contato-formulario__campos">
              <div className="contato-campo">
                <label htmlFor="contato-nome">Nome</label>
                <input
                  autoComplete="name"
                  id="contato-nome"
                  name="nome"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div className="contato-campo">
                <label htmlFor="contato-email">E-mail</label>
                <input
                  autoComplete="email"
                  id="contato-email"
                  name="email"
                  placeholder="voce@exemplo.com"
                  required
                  type="email"
                />
              </div>
              <div className="contato-campo">
                <label htmlFor="contato-assunto">Assunto</label>
                <select defaultValue="" id="contato-assunto" name="assunto" required>
                  <option disabled value="">Selecione um assunto</option>
                  <option value="cursos">Cursos</option>
                  <option value="ingresso">Processo de ingresso</option>
                  <option value="secretaria">Secretaria acadêmica</option>
                  <option value="outros">Outros assuntos</option>
                </select>
              </div>
              <div className="contato-campo">
                <label htmlFor="contato-mensagem">Mensagem</label>
                <textarea
                  id="contato-mensagem"
                  name="mensagem"
                  placeholder="Escreva sua mensagem"
                  required
                  rows="5"
                />
              </div>
            </div>

            <button className="button contato-formulario__botao" type="button" disabled>
              Enviar mensagem <span aria-hidden="true">→</span>
            </button>
            <p className="contato-formulario__aviso">
              Formulário demonstrativo. O envio de mensagens ainda não está
              disponível.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}