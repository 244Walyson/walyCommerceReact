import { Route, Routes } from 'react-router-dom'
import ProductDetails from './routes/ClientHome/ProductDetails'
import ClientHome from './routes/ClientHome'
import Catalog from './routes/ClientHome/Catalog'
import NotFound from './components/NotFound'
import Cart from './routes/ClientHome/Cart'
import { useEffect, useState } from 'react'
import { ContextCartCount } from './utils/context-cart'
import Login from './routes/ClientHome/Login'
import Admin from './routes/Admin'
import AdminHome from './routes/Admin/AdminHome'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { history } from './utils/history'
import PrivateRoute from './components/PrivateRoute'
import { AccessTokenPayloadDTO } from './models/auth'
import { ContextToken } from './utils/context-token'
import { getAccessTokenPaylod, isAuthenticated } from './services/auth-service'
import { getCart } from './services/cartService'

function App() {

  const [contextCartCount, setContextCartCount] = useState<number>()
  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>()

  useEffect(()=>{
    setContextCartCount(getCart().items.length)

    if(isAuthenticated()){
      setContextTokenPayload(getAccessTokenPaylod())
    }
  }, [])

  return (
    <ContextToken.Provider value={{contextTokenPayload, setContextTokenPayload}}>
    <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path='/' element={<ClientHome></ClientHome>}>
            <Route path='/' element={<Catalog></Catalog>}></Route>
            <Route path='/catalog' element={<Catalog></Catalog>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='product-details/:productId' element={<ProductDetails></ProductDetails>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
          </Route>
          <Route path='/admin/' element={<PrivateRoute roles={["ROLE_ADMIN"]}><Admin/></PrivateRoute>}>
            <Route index element={<AdminHome/>}></Route>
          </Route>
        </Routes>
      </HistoryRouter>
    </ContextCartCount.Provider>
    </ContextToken.Provider>
  )
}

export default App
