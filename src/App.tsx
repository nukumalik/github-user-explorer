import {QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {queryClient} from './lib/query-client'
import {Toaster} from './components/ui/sonner'
import {Waves} from './components/common'
import {UsersViewContainer} from './components/containers'

const App = () => {
  const isProduction = import.meta.env.PROD
  return (
    <>
      <Waves lineColor='#eeeeee' style={{zIndex: -1, position: 'fixed'}} />
      <QueryClientProvider client={queryClient}>
        <UsersViewContainer />
        <Toaster position='top-center' />
        {!isProduction && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </>
  )
}

export default App
