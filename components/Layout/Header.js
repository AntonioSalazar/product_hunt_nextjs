import React, { useContext } from 'react';
import styled from '@emotion/styled';

import Search from '../UI/Search';
import Nav from './Nav'
import Link from 'next/link';
import { css } from '@emotion/react';

import Button from '../UI/Button';

import { FirebaseContext } from '../../firebase';

const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%inherit;
    margin: 0 auto;
    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin: 2rem 2rem 2rem 0;

    &:hover{
        cursor: pointer;
    }
`;

const Header = () => {

    const {user, firebase} = useContext(FirebaseContext);

    return (
        <header
            css={css`
                border-bottom: 2px solid #e1e1e1;
                padding: 1rem 0;
            `}
        >
            <HeaderContainer>
                <div
                    css={css`
                        display:flex;
                        align-items: center;
                    `}
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>

                    <Search />
                    <Nav/>
                </div>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >           
                    {
                        user ? (
                            <>
                                <p
                                    css={css`
                                        margin-right: 2rem;
                                    `}
                                >Hola {user.displayName}!</p>
                                <Button bgColor='true'
                                    onClick={() => firebase.logout()}
                                >Cerrar Sesion</Button>
                            </>
                        ) : (
                            <>
                                <Link href='/login'>
                                    <Button
                                        bgColor='true'
                                    >Login</Button>
                                </Link>
                                <Link href='/create-account'>
                                    <Button>Crear Cuenta</Button>
                                </Link>
                            </>
                        )
                    }
                
                </div>
            </HeaderContainer>
        </header>
      );
}
 
export default Header;