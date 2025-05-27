import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from "../assets/Loading_2.gif"

const GaleriaDeProductos = ({cart,productos, cargando,agregarCarrito, borrarProducto}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart}/>
      <h1>Tienda</h1>
      {
          cargando ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', transform: 'translateY(-30vh)' }}>
              <img src={loading} alt='loading' />
            </div>
          ) : (
            <ProductList agregarCarrito={agregarCarrito} productos={productos} />
          )
        }

      <Footer/>
    </>
  )
}

export default GaleriaDeProductos
