
import Header from './Compounents/header/header'
import { useState } from 'react'
import './App.css'
import Cards from './Compounents/cards/cards'
import Portfolio from './Compounents/portfolio/portfolio'
import Footer from './Compounents/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Cards/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default App
