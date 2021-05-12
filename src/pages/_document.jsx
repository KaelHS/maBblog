import Document, { Head, Html, Main, NextScript } from 'next/documents';

export default class MyDocument extends Document{
    render(){
        return <Html>
            <Head>

            </Head>

            <body>
                <Main />
            </body>
            

            <NextScript />
        </Html>
    }
}