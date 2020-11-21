import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';


const Navigation = styled.nav`
    padding-left: 2rem;

    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gray2);
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

        &:last-of-type{
            margin-right: 0;
        }
    }
`;

const Nav = () => {
    return ( 
        <Navigation>
            <Link href='/'>Inicio</Link>
            <Link href='/'>Populares</Link>
            <Link href='/'>Nuevo Producto</Link>
        </Navigation>
     );
}
 
export default Nav;