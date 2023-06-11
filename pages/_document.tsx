import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: App => props => sheet.collectStyles(<App {...props}/>)
            })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }
    
    render () {
        return (
            <Html lang="pt-BR">
                <Head>
                    {/* Google Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
                    <link href="https://fonts.googleapis.com/css2?family=Changa:wght@200;300;400;500;600;700;800&family=Press+Start+2P&display=swap" rel="stylesheet"/>
                    {/* Favicon */}
                    <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon"/>
                    {/* SEO */}
                    <title>Game Online</title>
                    <meta name="twitter:site" content="@MglPenha"/>
                    <meta name="twitter:creator" content="@MglPenha"/>
                    <meta property="og:title" content="Game Online"/>
                    <meta name="description" content="Um Game Online"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="og:description" content="Um Game Online"/>
                    <meta property="og:url" content="https://game-online.vercel.app"/>
                    <meta property="og:image" content="https://game-online.vercel.app/img/thumbnail.png"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}