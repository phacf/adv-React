import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/global'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React-avançado-boilerplate</title>
        <link rel="shortcut icon" href="../public/img/download.png" />
        <link rel="apple-touch-icon" href="../public/img/download.png" />
        <meta name="description" content="A simple project starter to work with typescript, react, next and styled components" />
      </Head>
      <GlobalStyles/>
      <Component {...pageProps} />
    </>
  )
}

export default App
