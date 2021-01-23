import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';




const Navbar = () => {
    return ( 
        <div>
            <Nav>
                <NavLink to='/' className="NavLink">
                    <h1>Sillones<b>FB</b></h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to='/categorias' activeStyle>
                        Categorias
                    </NavLink>
                    <NavLink to='/contactos' activeStyle>
                        Contactos
                    </NavLink>
                    <NavLink to='/registrarse' activeStyle>
                        registrarse
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/inicioSesion'>inicio Sesion</NavBtnLink>
                </NavBtn>    
            </Nav>
        </div>
     );
}
 
export default Navbar;