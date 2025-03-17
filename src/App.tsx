import {QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {queryClient} from './lib/query-client'
import {UsersView} from './components/views'
import {Toaster} from './components/ui/sonner'
import {Waves} from './components/common'

const App = () => {
  const isProduction = import.meta.env.PROD
  return (
    <>
      <Waves lineColor='#eeeeee' style={{zIndex: -1, position: 'fixed'}} />
      <QueryClientProvider client={queryClient}>
        <UsersView />
        <Toaster position='top-center' />
        {!isProduction && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </>
  )
}

export default App
