import { Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { isIE } from 'react-device-detect'

import Layout from './components/Layout'
import Home from './views/Home'
import Wishlist from './views/Wishlist'
import Guestbook from './views/Guestbook'
import BetterCallHannah from './views/Hannah'

const App = () => {
  const queryClient = new QueryClient()

  if (isIE) {
    return (
      <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', textAlign: 'center' }}>
        <div>
          <img
            src='https://media.giphy.com/media/vPN3zK9dNL236/giphy.gif'
            alt='Nope GIF'
            style={{ maxWidth: '100%' }}
          />
          <h1
            style={{
              fontFamily: 'sans-serif',
              lineHeight: '1.2',
              maxWidth: '768px',
              margin: '40px auto 0',
            }}>
            Sorry, aber mitm Internet Explorer funktioniert das hier nicht. Bitte benutz einen aktuelleren Browser, wie
            Chrome, Firefox oder Edge.
          </h1>
        </div>
      </div>
    )
  }

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
