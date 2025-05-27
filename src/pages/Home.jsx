import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from "../assets/Loading_2.gif"


const Home = ({ cart, productos, cargando, agregarCarrito, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />

      <main>
        <h1>TU CAMISETA</h1>

        <p>Desde los clásicos retro que nunca pasan de moda hasta ediciones especiales que marcan tendencia.</p>
        <p>Conseguí la camiseta de fútbol que representa tu pasión y llevála con orgullo.</p>

        {
          // Si cargando es verdadero vamos a ver el loading. En caso de ser falso, se reproduce la lista de productos.
          cargando ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', transform: 'translateY(-30vh)' }}>
              <img src={loading} alt='loading' />
            </div>
          ) : (
            <ProductList agregarCarrito={agregarCarrito} productos={productos} />
          )
        }


      </main>
      <Footer />
    </>
  )
}

export default Home
