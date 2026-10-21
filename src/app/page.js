/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.pagina}>
      <header className={styles.cabecalho}>
        <section className={styles.topo}>
          <div className={styles.conectasp}>
            <h1>ConectaSP</h1>
          </div>
          <nav className={styles.navegacao}>
            <Link href="/sobre">Sobre o Projeto</Link>
            <Link href="/login" className={styles.login}>Login</Link>
          </nav>
        </section>
      </header>

      <main>
        <figure className={styles.imagem}>
          <img src="/imagens/foto_menu.png" alt="Pessoas aproveitando a cidade de São Paulo com acessibilidade" />
        </figure>

        <article className={styles.conteiner}>
          <section className={styles.conteinerExplor}>
            <Link className={styles.explor} href="/pontos">Explorar Pontos Turísticos</Link>
            <p className={styles.textoExplor}>
              Descubra quais pontos turisticos estão mais<br />proximos de você!
            </p>
          </section>

          <section className={styles.conteinerAcess}>
            <article className={styles.acessibilidade}>
              <h2>Por que acessibilidade <br /> importa?</h2>
              <p className={styles.painelAcess}>
                Acessibilidade é garantir que todas as pessoas tenham
                as mesmas oportunidades de participar, aproveitar e se
                expressar na cultura e no lazer.
              </p>
              <section className={styles.topicos}>
                <article className={styles.topico}>- Inclusão social</article>
                <article className={styles.topico}>- Autonomia e liberdade</article>
                <article className={styles.topico}>- Direito à cidade</article>
                <article className={styles.topico}>- Cultura para todos</article>
              </section>
              <Link className={styles.projAcess} href="/sobre">Saiba mais sobre o projeto</Link>
            </article>

            <article className={styles.destaques}>
              <h2>Destaques acessíveis</h2>
              <article className={styles.listaDestaque}>
                <figure className={styles.lugar}>
                  <img src="/imagens/conectasp_aquariosp.png" alt="Aquário de São Paulo" />
                  <div>
                    <h3>Aquário de São Paulo</h3>
                    <div className={styles.localizacao}>Zona Sul</div>
                    <p>Acessível para cadeirantes, com recursos sensoriais e audiodescrição.</p>
                  </div>
                  <div className={styles.acaoLugar}>
                    <Link className={styles.detalhes} href="/locais/aquario-sp">Ver detalhes</Link>
                  </div>
                </figure>

                <figure className={styles.lugar}>
                  <img src="/imagens/conectasp_parque.png" alt="Parque Ibirapuera" />
                  <div>
                    <h3>Parque Ibirapuera</h3>
                    <div className={styles.localizacao}>Zona Sul</div>
                    <p>Rampas, banheiros acessíveis, cadeiras anfíbias e bicicletas adaptadas.</p>
                  </div>
                  <div className={styles.acaoLugar}>
                    <Link className={styles.detalhes} href="/locais/parque-ibirapuera">Ver detalhes</Link>
                  </div>
                </figure>

                <figure className={styles.lugar}>
                  <img src="/imagens/conectasp_pinacoteca.png" alt="Pinacoteca de São Paulo" />
                  <div>
                    <h3>Pinacoteca de São Paulo</h3>
                    <div className={styles.localizacao}>Centro</div>
                    <p>Elevadores, recursos táteis e visitas mediadas inclusivas.</p>
                  </div>
                  <div className={styles.acaoLugar}>
                    <Link className={styles.detalhes} href="/locais/pinacoteca">Ver detalhes</Link>
                  </div>
                </figure>
              </article>
            </article>
          </section>
        </article>

        <section className={styles.banner}>
          <div className={styles.dentroBanner}>
            <section>
              <h2>São Paulo é de todos e para todos!</h2>
              <p>
                Vamos juntos construir uma cidade mais inclusiva,<br />acessível e democrática na cultura e no lazer.
              </p>
            </section>
          </div>
        </section>
      </main>

      <footer id="contato" className={styles.rodape}>
        <div className={styles.conteiner}>
          <div className={styles.footer}>
            <div>
              <div className={styles.marcaFooter}>ConectaSP</div>
              <p className={styles.textoFooter}>
                Promovemos informação, acessibilidade e inclusão
                para que todas as pessoas possam viver o melhor
                da cultura e do lazer em São Paulo.
              </p>
              <div className={styles.redeSocial}>
                <img src="/imagens/conectasp_facebook.png" alt="Facebook" />
                <img src="/imagens/conectasp_insta.png" alt="Instagram" />
                <img src="/imagens/conectasp_twitter.png" alt="Twitter" />
              </div>
            </div>
            <address className={styles.contato}>
              <h3>Fale Conosco</h3>
              <p>conectasp@gmail.com.gov.br</p>
              <p>(11) 1234-5678</p>
            </address>
          </div>
        </div>
      </footer>
    </div>
  );
}