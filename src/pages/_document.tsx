import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
      return <Html>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>

            <title>Kael Silva - Portfólio </title>
          </Head>
          <body>
              <Main />
              <NextScript />
          </body>
      </Html>
  }
}