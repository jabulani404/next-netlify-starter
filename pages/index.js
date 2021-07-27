import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import Hero from '@components/Hero'
import SignUp from '@components/SignUp'
import Steps from '@components/Steps'
import Ready from '@components/Ready'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;0,800;0,900;1,200&display=swap" rel="stylesheet" />
      </Head>
      <Nav />

      <main>
        <Hero />
        <SignUp />
        <Steps />
        <Ready />
        {/* <h1>H1 Headline</h1>
        <h2>H2 Headline</h2>
        <h3>H3 Headline</h3>
        <h4>H4 Headline</h4>
        <h5>H5 Headline</h5>
        <h6>H6 Headline</h6>
        <div className="subtitle1">Subtitle 1</div>
        <div className="subtitle2">Subtitle 2</div>
        <div className="body1">Body 1</div>
        <div className="body2">Body 2</div>
        <div className="button">Button</div>
        <div className="caption">caption</div>
        <div className="overline">overline</div> */}
      </main>

      <Footer />
    </div>
  )
}
