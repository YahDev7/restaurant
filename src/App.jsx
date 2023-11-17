import { useState } from 'react'
import './App.css'
import {ROUTES} from "./routes/routes"
import { Navigate, Route, Routes } from 'react-router-dom'
import Indexhome from './pages/home/Index'
import IndexProduct from './pages/Product/Index'
import IndexCategoria from './pages/Categoria'
import IndexCarrito from './pages/Carrito/Index.carrito'

function App() {

  return (
    <>
    <Routes>
      <Route path={ROUTES.HOME} element={<Indexhome/>}></Route>
      <Route path={ROUTES.CATEGORIA} element={<IndexCategoria/>}></Route>
      <Route path={ROUTES.PRODUCTO} element={<IndexProduct/>}></Route>
      <Route path={ROUTES.CARRITO} element={<IndexCarrito/>}></Route>

   {/*
       <Route path={ROUTES.CATEGORIA} element={<Indexhome/>}></Route>
      <Route path={ROUTES.CARRITO} element={<Indexhome/>}></Route>
      <Route path={ROUTES.SEARCH} element={<Indexhome/>}></Route>
 */}
      <Route path="*" element={ <Navigate to="/home" /> }></Route>
      
    </Routes>

    </>
  )
}

export default App
