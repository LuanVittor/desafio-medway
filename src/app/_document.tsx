// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR"> 
      <Head>
        {/* Fonte externa */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Meta tags de SEO */}
        <meta charSet="UTF-8" />
        <meta name="description" content="Apresentação pessoal de Luan Vitor Coelho, desenvolvedor Full Stack com paixão por tecnologia, automobilismo e esportes." />
        <meta name="keywords" content="Luan Vitor Coelho, desenvolvedor Full Stack, tecnologia, automobilismo, esportes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph para redes sociais */}
        <meta property="og:title" content="Luan Vitor Coelho - Desenvolvedor Full Stack" />
        <meta property="og:description" content="Conheça Luan Vitor Coelho, um desenvolvedor Full Stack com paixão por tecnologia, automobilismo e esportes." />
        <meta property="og:image" content="/images/eu.jpg" />
        <meta property="og:url" content="https://seusite.com" />
        {/* Twitter Card para compartilhamento no Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luan Vitor Coelho - Desenvolvedor Full Stack" />
        <meta name="twitter:description" content="Conheça Luan Vitor Coelho, um desenvolvedor Full Stack com paixão por tecnologia, automobilismo e esportes." />
        <meta name="twitter:image" content="/images/eu.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
