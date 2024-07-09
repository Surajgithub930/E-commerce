import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AdminPannel from './Components/AdminPannel.jsx'
import AddProduct from './Components/AddProduct.jsx'
import ViewProduct from './Components/ViewProduct.jsx'
import UpdateProduct from './Components/UpdateProduct.jsx'
import ClientApp from './Components/ClientApp.jsx'
import Home from './Components/Client/Home.jsx'
import AdminLogin from './Components/AdminLogin.jsx'
import Protected from './Components/Protected.jsx'
import Cart from './Components/Client/Cart.jsx'
import ClientLogin from './Components/Client/ClientLogin.jsx'
import ClientRegister from './Components/Client/ClientRegister.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<ClientApp />}>
        <Route path='' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/clientLogin' element={<ClientLogin />} />
        <Route path='/clientRegister' element={<ClientRegister />} />
      </Route>


      <Route path='/admin' element={<App />}>

        <Route path='' element={
          <Protected>
            <AdminPannel />
          </Protected>
        } />


        <Route path='/admin/AddProduct' element={
          <Protected>
            <AddProduct />
          </Protected>
        } />

        <Route path='/admin/ViewProduct/:id' element={<ViewProduct />} />
        <Route path='/admin/UpdateProduct/:id' element={<UpdateProduct />} />
        <Route path='/admin/AdminLogin' element={<AdminLogin />} />

      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
