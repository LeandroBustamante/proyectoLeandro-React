import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from "../assets/Loading_2.gif"


const Home = ({ cart, productos, cargando, agregarCarrito, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto = {borrarProducto} cartItems = {cart}/>

      <main>
        <h1>Bienvenidos a mi tienda</h1>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut eum laboriosam quaerat labore! Pariatur, excepturi. Exercitationem fugiat fugit voluptatibus fuga iure! Tempore ut neque dolorem reprehenderit ratione reiciendis est facere.</p>

        {
          // Si cargando es verdadero vamos a ver el loading. En caso de ser falso, se reproduce la lista de productos.
          cargando ? <img src={loading} alt='loading' /> :

          <ProductList agregarCarrito={agregarCarrito} productos={productos}/>
        }


      </main>
      <Footer />
    </>
  )
}

export default Home
