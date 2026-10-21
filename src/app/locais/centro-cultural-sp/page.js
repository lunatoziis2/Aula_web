/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Local.module.css";

export const metadata = {
  title: "Centro Cultural São Paulo - ConectaSP",
};

export default function CentroCulturalSP() {
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
            <h1>Centro Cultural São Paulo</h1>
            <p className={styles.localizacao}>Zona Sul</p>
            <p>
              O Centro Cultural São Paulo (CCSP) é um dos principais equipamentos
              públicos de cultura da cidade de São Paulo, reunindo bibliotecas,
              teatros, salas de exposição, cinemas, jardins e espaços de convivência
              em um único complexo.
            </p>
          </article>
          <figure className={styles.imagemLocal}>
            <img src="/imagens/conectasp_centrosp.png" alt="Centro Cultural São Paulo" />
          </figure>
        </section>

        <section className={styles.informacoes}>
          <article className={styles.informacao}>
            <h3>Endereço</h3>
            <p>Rua Vergueiro, 1000 - Liberdade,<br />São Paulo - SP, 01504-000</p>
          </article>
          <article className={styles.informacao}>
            <h3>Horário</h3>
            <p>Terça a domingo,<br />das 10h às 22h.</p>
          </article>
          <article className={styles.informacao}>
            <h3>Entrada</h3>
            <p>Gratuita</p>
          </article>
          <article className={styles.informacao}>
            <h3>Contato</h3>
            <p>(11) 3397-4002</p>
          </article>
        </section>

        <section id="acessibilidade" className={styles.acessibilidade}>
          <h2>Recursos de acessibilidade disponíveis</h2>
          <div className={styles.recursos}>
            <article className={styles.recurso}>
              <h3>Acessibilidade física</h3>
              <ul>
                <li>Espaço aberto, integrado e sem barreiras</li>
                <li>Acesso direto pela rampa da Estação Vergueiro</li>
                <li>Áreas de circulação e convivência</li>
              </ul>
              <button type="button" className={styles.verMais}>Ver mais recursos</button>
            </article>
            <article className={styles.recurso}>
              <h3>Acessibilidade visual</h3>
              <ul>
                <li>Livros falados</li>
                <li>Computadores adaptados</li>
                <li>Biblioteca Louis Braille</li>
              </ul>
              <button type="button" className={styles.verMais}>Ver mais recursos</button>
            </article>
            <article className={styles.recurso}>
              <h3>Acessibilidade auditiva</h3>
              <ul>
                <li>Programações com recursos de Libras</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
