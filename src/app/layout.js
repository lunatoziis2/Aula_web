/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import "@/styles/globals.css";

export const metadata = {
  title: "Conecta SP",
  description: "Conectando pessoas a lugares acessíveis em São Paulo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}