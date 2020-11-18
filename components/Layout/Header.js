import React from 'react';
import styled from '@emotion/styled';

import Search from '../UI/Search';



const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <p>P</p>

                    <Search />
                    {/* navegacion aqui */}
                </div>
                <div>           
                    {/* Menu de administracion */}
                </div>
            </div>
        </header>
      );
}
 
export default Header;