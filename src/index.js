import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import CreateArticle from './components/CreateAriticle'
import Login from './components/Login'
import SingleArticle from './components/SingleArticle'
import Signup from './components/Signup'
/**
 * pass Param in Home
 */
const Home = ({match}) => {
  return (
    <h1>This's Home Page {match.params.meoID} </h1>
  )
}
const About = () => {
  return (
    <h1>This's About Page</h1>
  )
}
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Route path='/' exact component={Welcome} />
      <Route path='/about' component={About} />
      <Route path='/home/:meoID' component={Home} />
      <Route path='/Login' component={Login} />
      <Route path='/Signup' component={Signup} />
      <Route path='/article/:id' component={SingleArticle} />
      <Route path='/articles/create' component={CreateArticle} />
      <Footer />
    </div>
  </BrowserRouter>
  , document.getElementById('root'))
registerServiceWorker()
