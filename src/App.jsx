import React from 'react'
import Head from './components/Head'
import Navbar from './components/Navbar'
import Dynamic from './components/Dynamic'
import Edynamic from './components/Edynamic'

const App = () => {
  return (
    <div>
      <Navbar />
      <Head />
      <Edynamic />
    </div>
  )
}

export default App
