import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '@/components/Sidebar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

/** Create a Client */
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Sidebar>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Sidebar>
    </QueryClientProvider>
  )
}
