# ConectaSP — São Paulo para todos

**Integrantes:** Luna Tozi (RA 10771378) · Millena Maurer (RA 10771373) · Hellen Karoline (RA 10771420)

> "Conectando pessoas a lugares acessíveis."

Repositório do Projeto 1: https://github.com/lunatoziis2/Conecta-SP

---

## 1. Ideação e caráter extensionista

O ConectaSP nasceu com um objetivo: tornar São Paulo mais acessível para todos. Muitas pessoas deixam de visitar lugares porque não sabem se eles têm estrutura e recursos adequados às suas necessidades.

O site reúne essas informações em um só lugar e ajuda pessoas com deficiência, familiares e acompanhantes a encontrar opções de lazer, cultura e entretenimento com mais autonomia e segurança.

- **Missão:** facilitar o acesso à cultura, ao lazer e à cidade para todas as pessoas.
- **Visão:** uma São Paulo onde acessibilidade não seja uma dúvida, mas uma realidade.
- **Público-alvo:** pessoas com deficiência física e seus familiares e acompanhantes.

---

## 2. Projeto 2: migração para React com Next.js

O site do Projeto 1 (HTML, CSS e JavaScript puros) está sendo migrado para **Next.js (App Router)**, usando componentes React, **CSS Modules** e um CSS global em `styles/globals.css`.

### Por que migrar para componentes React?

- **Reaproveitamento:** cabeçalho, rodapé e cards de locais se repetem em várias páginas. Com componentes, escrevemos uma vez e reutilizamos.
- **Manutenção:** uma alteração no componente aparece em todas as páginas que o usam.
- **Estado e interatividade:** `useState` e `useEffect` substituem a manipulação manual do DOM (`querySelector`, `style.display`).
- **CSS isolado:** com CSS Modules, cada classe vale só para a página que a importa. Assim os estilos de uma página não quebram os de outra.
- **Rotas:** cada pasta dentro de `app/` vira uma URL, sem precisar ligar arquivos `.html` manualmente.

---
