import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './assets/componentes/header'
import Escocia from './assets/componentes/escocia'
import Grand_Canyon from './assets/componentes/grand_canyon'
import Muralha from './assets/componentes/muralha'
import Aruba from './assets/componentes/aruba'
import Home from './assets/componentes/home'
import Footer from './assets/componentes/footer'
function App() {

  return (
    
    <>
      <Router>
        <Header />
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Escocia' element={<Escocia />} />
          <Route path='/Grand_Canyon' element={<Grand_Canyon />} />
          <Route path='/Muralha' element={<Muralha />} />
          <Route path='/Aruba' element={<Aruba />} />
          </Routes>
          <Footer />
      </Router>
    </>


  )
}

export default App
