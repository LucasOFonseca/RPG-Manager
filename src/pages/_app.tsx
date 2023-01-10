import { ConfirmProvider } from 'material-ui-confirm'
import type { AppProps } from 'next/app'
import { AppTheme } from '../shared/components/AppTheme'
import { NavigationBar } from '../shared/components/NavigationBar'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppTheme>
      <ConfirmProvider
        defaultOptions={{
          title: 'Tem certeza?',
          description: 'Essa ação não poderá ser desfeita!',
          confirmationText: 'tenho certeza',
          cancellationText: 'cancelar',
        }}
      >
        <main>
          <Component {...pageProps} />
        </main>

        <NavigationBar />
      </ConfirmProvider>
    </AppTheme>
  )
}
