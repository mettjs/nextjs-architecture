import Footer from '@/components/Layout/Footer/Footer'
import NavBar from '@/components/Layout/NavBar/NavBar'
import '@/styles/globals.scss'
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
