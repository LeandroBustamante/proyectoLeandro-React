import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const Contactos = ({ cart, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <h1>Contacto</h1>

      <img
        src="https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg"
        alt="Foto de contacto"
        style={{
          width: '100%',         
          maxWidth: '600px',     
          height: 'auto',        
          display: 'block',
          margin: '20px auto'
        }}
      />

      <Footer />
    </>
  )
}

export default Contactos