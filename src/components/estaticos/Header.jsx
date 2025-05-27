import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './styleEstatico.css'
import Cart from '../Cart'


const Header = ({cartItems,borrarProducto}) => {
const [isCartOpen, setCartOpen] = useState(false)


  return (
    <header>
      <h2><strong>3 Y 6 CUOTAS SIN INTERES</strong> CON TODOS LOS BANCOS* <strong>| ENVIO GRATIS</strong> A PARTIR DE $149.999</h2>
      <nav>
        <ul>
            <li><Link to='/' className='link'>INICIO</Link></li>
            <li><Link to='/acercade' className='link'>NOSOTROS</Link></li>
            <li><Link to='/productos' className='link'>TIENDA</Link></li>
            <li><Link to='/contacto' className='link'>CONTACTO</Link></li>
            <li className='cartnav'>
              <button className='btnCart' onClick={()=> setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
              <Cart borrarProducto={borrarProducto} cartItems={cartItems} isOpen={isCartOpen} onClose={()=> setCartOpen(false)}/>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
