/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Sobre.module.css";

export const metadata = {
  title: "Sobre o Projeto - SP para Todos",
};

export default function Sobre() {
  return (
    <>
      <header className={styles.cabecalho}>
        <div>
          <p className={styles.logo}>ConectaSP</p>
        </div>
        <nav className={styles.navegacao}>
          <Link href="/">Início</Link>
        </nav>
      </header>

      <main className={styles.conteudo}>
        <article className={styles.colunaTexto}>
          <h2>Sobre o Projeto</h2>
          <h3>Cultura e lazer são direitos de todos.</h3>
          <p>
            O ConectaSP nasceu para promover a inclusão e a acessibilidade nos espaços culturais, turísticos e de lazer da cidade de São Paulo.
          </p>
          <p>
            Acreditamos que todas as pessoas devem ter autonomia, segurança e igualdade de oportunidades para viver o melhor que a cidade pode oferecer.
          </p>
          <p>
            Oferecemos sugestões de lugares turísticos em São Paulo com acessibilidade para pessoas com deficiência física.
          </p>
        </article>
        <div className={styles.colunaImagem}>
          <img src="/imagens/foto_sobre_proj.png" alt="Pessoas com e sem deficiência em um espaço cultural" />
        </div>
      </main>

      <footer className={styles.valores}>
        <h3>Nossos valores</h3>
        <figure className={styles.valor}>
          <img src="/imagens/conectasp_inclusao_social.png" alt="" />
          <p>Inclusão social</p>
        </figure>
        <figure className={styles.valor}>
          <img src="/imagens/conectasp_autonomia.png" alt="" />
          <p>Autonomia</p>
        </figure>
        <figure className={styles.valor}>
          <img src="/imagens/conectasp_acessibilidade.png" alt="" />
          <p>Acessibilidade</p>
        </figure>
        <figure className={styles.valor}>
          <img src="/imagens/conectasp_direito_cidade.png" alt="" />
          <p>Direito à cidade</p>
        </figure>
        <figure className={styles.valor}>
          <img src="/imagens/conectasp_cultura.png" alt="" />
          <p>Cultura para todos</p>
        </figure>
        <figure className={styles.valor}>
          <img src="/imagens/conectasp_diversidade.png" alt="" />
          <p>Diversidade</p>
        </figure>
      </footer>
    </>
  );
}