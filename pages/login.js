import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Forms, Field, InputSubmit, Error } from '../components/UI/Forms';
import { css } from '@emotion/react';
import Router from 'next/router';

//validaciones
import useValidacion from '../Hooks/useValidacion';
import validarLogin from '../validation/validateLogin';

import firebase from '../firebase';


const INITIAL_STATE = {
  email: '',
  password: ''
}


const Login = () =>   {

  const [ error, setError ] = useState(false);

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur
   } = useValidacion(INITIAL_STATE, validarLogin, loginFn);

   const {  email, password }= valores;

  // async function createAccount() {
  //   try {
  //     await firebase.registrarUsuario( email, password);
  //     Router.push('/');
  //   } catch (error) {
  //     console.error('Hubo un error al crear el usuario', error.message)
  //     setError(error.message)
  //   }
  // }

  function loginFn() {
    console.log('login in')
  }

  return (
    (
      <div>
        <Layout>
          <>
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >Login</h1>
            <Forms
              onSubmit={handleSubmit}
              noValidate
            >
              {
                error && <Error>{error}</Error>
              }
              <Field>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  placeholder='Tu email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}

                />
              </Field>
    
              {
                errores.email && <Error>{errores.email}</Error>
              }
              <Field>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  placeholder='Tu Password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}

                />
              </Field>
              
              {
                errores.password && <Error>{errores.password}</Error>
              }
    
              <InputSubmit 
                type='submit'
                value='Login'
              />
            </Forms>
          </>
        </Layout>
      </div>
    )
  )
}

export default Login;