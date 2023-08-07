import Footer from '@/components/Layout/Footer/Footer'
import NavBar from '@/components/Layout/NavBar/NavBar'
import '@/styles/globals.css'
import '@/styles/Navbar.css'
import '@/styles/home.css'
import '@/styles/footer.css'
import '@/styles/estrenos.css'
import '@/styles/cartelera.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
