import React from 'react';
import Layout from '../components/Layout/Layout';
import { Forms, Field, InputSubmit, Error } from '../components/UI/Forms';
import { css } from '@emotion/react';


//validaciones
import useValidacion from '../Hooks/useValidacion';
import validarCrearCuenta from '../validation/validateCreateAccount';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}
 

const CreateAccount = () =>  {

  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBlur
   } = useValidacion(INITIAL_STATE, validarCrearCuenta, createAccount);

   const { name, email, password }= valores;

  function createAccount() {
    console.log('creando cuenta...')
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
            >Create Account</h1>
            <Forms
              onSubmit={handleSubmit}
              noValidate
            >
              <Field>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  placeholder='Tu nombre'
                  name='name'
                  value={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              {
                errores.name && <Error>{errores.name}</Error>
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
                value='Crear Cuenta'
              />
            </Forms>
          </>
        </Layout>
      </div>
    )
  )
}

export default CreateAccount;