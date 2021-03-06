import React from 'react';
import Header from './Header';
import { Global,css} from '@emotion/react';
import Head from 'next/head';

const Layout = props => {
    return ( 

        <>
            <Global
                styles={css`
                    :root {
                        --gray: #3d3d3d;
                        --gray2: #6f6f6f;
                        --orange: #da552f;
                    }

                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                        font-family: 'Poppins', sans-serif;
                    }

                    *, *:before, *:after{
                        box-sizing: inherit;
                    }

                    body {
                        /* 1.6rem == 16px */
                        font-size: 1.6rem;
                        line-height: 1.5;
                        font-family: 'Poppins', sans-serif;
                    }

                    h1,h2,h3 {
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                        font-family: 'Poppins', sans-serif;

                    }

                    h1, h2 {
                        font-weight: 500;
                    }

                    h3{
                        font-weight: 400;
                    }


                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }

                    a {
                        text-decoration: none;
                    }
                 `}
            />
            <Head>
                <title>Product Hunt, Firebase, Next</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
                <link href='./static/css/app.css' rel='stylesheet'/>
            </Head>
            <Header />
            <main>
                {props.children}
            </main>
        </>

     );
}
 
export default Layout;