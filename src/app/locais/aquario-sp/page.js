/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Local.module.css";

export const metadata = {
  title: "Aquário de São Paulo - ConectaSP",
};

export default function AquarioSP() {
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
            <h1>Aquário de São Paulo</h1>
            <p className={styles.localizacao}>Zona Sul</p>
            <p>
              O Aquário de São Paulo é o maior aquário da América Latina e uma das atrações mais completas para famílias e turistas na capital paulista.
            </p>
          </article>
          <figure className={styles.imagemLocal}>
            <img src="/imagens/conectasp_aquariosp_2.png" alt="Aquário de São Paulo" />
          </figure>
        </section>

        <section className={styles.informacoes}>
          <article className={styles.informacao}>
            <h3>Endereço</h3>
            <p>R. Huet Bacelar, 407 - Vila São José, São Paulo</p>
          </article>
          <article className={styles.informacao}>
            <h3>Horário</h3>
            <p>Segunda a Sábado<br />9h às 17h</p>
            <p>Domingo<br />10h às 17h</p>
          </article>
          <article className={styles.informacao}>
            <h3>Entrada</h3>
            <p>R$120,00</p>
          </article>
          <article className={styles.informacao}>
            <h3>Contato</h3>
            <p>(11) 2273-5500</p>
          </article>
        </section>

        <section id="acessibilidade" className={styles.acessibilidade}>
          <h2>Recursos de acessibilidade disponíveis</h2>
          <div className={styles.recursos}>
            <article className={styles.recurso}>
              <h3>Acessibilidade física</h3>
              <ul>
                <li>Rampas e rotas acessíveis</li>
                <li>Banheiros acessíveis</li>
                <li>Estacionamento acessível</li>
                <li>Bebedouros acessíveis</li>
              </ul>
              <button type="button" className={styles.verMais}>Ver mais recursos</button>
            </article>
            <article className={styles.recurso}>
              <h3>Acessibilidade visual</h3>
              <ul>
                <li>Piso tátil</li>
                <li>Informações em braile</li>
              </ul>
            </article>
            <article className={styles.recurso}>
              <h3>Acessibilidade auditiva</h3>
              <ul>
                <li>Legendas em vídeos</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
