import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {GcontextProvider} from '../context/Gcontext'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <GcontextProvider>
   <Component {...pageProps} />
    </GcontextProvider>
  )
}

export default MyApp
