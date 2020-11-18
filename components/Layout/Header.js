import React from 'react';
import styled from '@emotion/styled';

import Search from '../UI/Search';
import Nav from './Nav'
import Link from 'next/link';



const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <p>P</p>

                    <Search />
                    <Nav/>
                </div>
                <div>           
                    {/* Menu de administracion */}  
                    <p>Hola Antonio!</p>
                    <button type='button'>Cerrar Sesion</button>
                    <Link href='/'>Login</Link>
                    <Link href='/'>Crear Cuenta</Link>
                
                </div>
            </div>
        </header>
      );
}
 
export default Header;