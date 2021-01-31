import { Switch, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './views/Home'
import Wishlist from './views/Wishlist'
import Guestbook from './views/Guestbook'
import BetterCallHannah from './views/Hannah'

const App = () => (
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
)

export default App
