import {Route, Switch} from 'react-router-dom'

import Head from './components/Header'

import Home from './components/Home'

import About from './components/About'

import Contact from './components/Contact'

import Not from './components/NotFound'

const App = () => (
  <div className="background ">
    <Head />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={Not} />
    </Switch>
  </div>
)

export default App
