import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './routes/ClientHome/ProductDetails'
import ClientHome from './routes/ClientHome'
import Catalog from './routes/ClientHome/Catalog'
import NotFound from './components/NotFound'
import Cart from './routes/ClientHome/Cart'
import { useState } from 'react'
import { ContextCartCount } from './utils/context-cart'
import Login from './routes/ClientHome/Login'
import Admin from './routes/Admin'
import AdminHome from './routes/Admin/AdminHome'

function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0)

  return (
    <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ClientHome></ClientHome>}>
            <Route path='/' element={<Catalog></Catalog>}></Route>
            <Route path='/catalog' element={<Catalog></Catalog>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='product-details/:productId' element={<ProductDetails></ProductDetails>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
          </Route>
          <Route path='/admin/' element={<Admin></Admin>}>
            <Route index element={<AdminHome></AdminHome>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextCartCount.Provider>
  )
}

export default App
