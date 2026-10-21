/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Local.module.css";

export const metadata = {
  title: "Centro Cultural Banco do Brasil - ConectaSP",
};

export default function CCBB() {
  return (
    <>
      <header className={styles.cabecalho}>
        <div className={styles.logo}>
          <p>ConectaSP</p>
        </div>
        <nav className={styles.navegacao}>
          <Link href="/">Início</Link>
        </nav>
      </header>

      <main>
        <section className={styles.informacoesLocal}>
          <article className={styles.textoLocal}>
            <h1>Centro Cultural Banco do Brasil São Paulo</h1>
            <p className={styles.localizacao}>São Paulo, Centro</p>
            <p>
              O Centro Cultural Banco do Brasil São Paulo, também conhecido como CCBB São Paulo,
              foi inaugurado em 21 de abril de 2001, no centro histórico da cidade.
            </p>
          </article>
          <figure className={styles.imagemLocal}>
            <img src="/imagens/conectasp_ccbb.png" alt="Centro Cultural Banco do Brasil São Paulo" />
          </figure>
        </section>

        <section className={styles.informacoes}>
          <article className={styles.informacao}>
            <h3>Endereço</h3>
            <p>R. Álvares Penteado, 112 - Centro Histórico de São Paulo, São Paulo - SP, 01012-000</p>
          </article>
          <article className={styles.informacao}>
            <h3>Horário</h3>
            <p>de quarta a segunda-feira, das 10h às 18h, e fica fechada às terças-feiras<br />Até as 18:00h</p>
          </article>
          <article className={styles.informacao}>
            <h3>Entrada</h3>
            <p>todos os dias, das 9h às 20h, exceto às terças-feiras, quando permanece fechado.</p>
          </article>
          <article className={styles.informacao}>
            <h3>Contato</h3>
            <p>(11) 4297-0600</p>
          </article>
        </section>

        <section id="acessibilidade" className={styles.acessibilidade}>
          <h2>Possui total acessibilidade</h2>
          <div className={styles.recursos}>
            <article className={styles.recurso}>
              <h3>Acessibilidade física</h3>
              <ul>
                <li>Cadeiras de rodas disponíveis para utilização dos visitantes.</li>
                <li>Rampas e rotas acessíveis, elevadores</li>
                <li>Banheiros acessíveis</li>
                <li>Estacionamento acessível</li>
                <li>Bebedouros acessíveis</li>
              </ul>
              <button type="button" className={styles.verMais}>Ver mais recursos</button>
            </article>
            <article className={styles.recurso}>
              <h3>Acessibilidade visual</h3>
              <ul>
                <li>Mapas táteis</li>
                <li>Plataforma elevatória</li>
                <li>Piso tátil</li>
                <li>Informações em braile</li>
              </ul>
              <button type="button" className={styles.verMais}>Ver mais recursos</button>
            </article>
            <article className={styles.recurso}>
              <h3>Acessibilidade auditiva</h3>
              <ul>
                <li>Audiodescrição</li>
                <li>Intérprete de Libras (eventos)</li>
                <li>
                  há sessões especiais com interpretação em Libras
                  e recursos como legendas/closed caption em determinadas atividades.
                </li>
              </ul>
              <button type="button" className={styles.verMais}>Ver mais recursos</button>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
