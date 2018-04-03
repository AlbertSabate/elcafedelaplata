import React from 'react'

import Header from './header/header'
import TopNavbar from './top-navbar/top-navbar'
import Footer from './footer/footer'
import About from './about/about'
import Contact from './contact/contact'

const App = () => (
  <div>
    <TopNavbar />
    <Header />
    <About />
    {/* <Facebook /> */}
    {/* <Menu /> */}
    <Contact />
    <Footer />
  </div>
)

export default App
