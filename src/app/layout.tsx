import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEGA Poliuretanos - Solucoes Industriais de Alta Performance",
  description:
    "MEGA Poliuretanos: revestimentos, pecas tecnicas e solucoes industriais em poliuretano com durabilidade e precisao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <a
          href="#conteudo-principal"
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-white focus-visible:px-3 focus-visible:py-2 focus-visible:text-mega-dark focus-visible:shadow-lg"
        >
          Pular para o conteudo principal
        </a>
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
