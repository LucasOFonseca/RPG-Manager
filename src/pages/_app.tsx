import type { AppProps } from 'next/app'
import { AppTheme } from '../shared/components/AppTheme'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppTheme>
      <main>
        <Component {...pageProps} />
      </main>
    </AppTheme>
  )
}
