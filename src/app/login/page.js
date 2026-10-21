/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Login.module.css";

export const metadata = {
  title: "Login - Conecta SP",
};

export default function Login() {
  return (
    <main className={styles.container}>
      <article className={styles.colunaEsquerda}>
        <div className={styles.logo}>
          <Link href="/"><h1>Conecta SP</h1></Link>
        </div>
        <h2 className={styles.tituloBoasVindas}>SP para todos</h2>
        <p className={styles.tituloBoasVindas}>Cultura, lazer e turismo sem barreiras.</p>
        <h3 className={styles.tituloBoasVindas}>Bem-vindo(a)!</h3>
        <p className={styles.tituloBoasVindas}>
          Faça login para acessar conteúdos personalizados e salvar seus locais favoritos.
        </p>
        <img src="/imagens/foto_login.png" alt="Ilustração de pessoas visitando a cidade" />
      </article>

      <section className={styles.colunaDireita}>
        <article className={styles.cardLogin}>
          <h2>Entrar na sua conta</h2>
          <form>
            <label htmlFor="email">E-mail ou CPF</label>
            <input type="text" id="email" name="email" placeholder="Digite seu e-mail ou CPF" />
            <div className={styles.campoSenha}>
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />
            </div>
            <div id="message"></div>
            <p className={styles.esqueceuSenha}><a href="#">Esqueceu sua senha?</a></p>
            <button type="submit" className={styles.entrar}>Entrar</button>
          </form>
          <p className={styles.textoCadastro}>
            Não tem uma conta? <a href="#">Cadastre-se</a>
          </p>
          <p className={styles.divisor}>ou</p>
          <button type="button" className={styles.botaoSocial}>Entrar com Google</button>
        </article>
      </section>
    </main>
  );
}