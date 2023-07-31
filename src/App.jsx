import { useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import Product from './components/product_page/Product'


const App = () => {
  return (
    <div>
     <Nav></Nav>
     <Product/>
    </div>
  )
}

export default App
