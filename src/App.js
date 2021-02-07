import { Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from './components/Layout'
import Home from './views/Home'
import Wishlist from './views/Wishlist'
import Guestbook from './views/Guestbook'
import BetterCallHannah from './views/Hannah'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Switch>
          <Route path='/gästebuch'>
            <Guestbook />
          </Route>
          <Route path='/wunschliste'>
            <Wishlist />
          </Route>
          <Route path='/festleiterin'>
            <BetterCallHannah />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </QueryClientProvider>
  )
}

export default App
