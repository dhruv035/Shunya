import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="preload"
        href="/fonts/La_Belle_Aurore/LaBelleAurore-Regular.ttf"
        as="font"
        type="font/tff"/>
         <link rel="preload"
        href="/fonts/Titillium_Web/TitilliumWeb-Regular.ttf"
        as="font"
        type="font/tff"/>
         <link rel="preload"
        href="/fonts/Lobster/Lobster-Regular.ttf"
        as="font"
        type="font/tff"/>
        
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
