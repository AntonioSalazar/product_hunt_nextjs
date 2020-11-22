import '../styles/globals.css';
import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';
import useAutenticacion from '../Hooks/useAutenticacion';


const MyApp = props => {
  const user = useAutenticacion();
  const { Component, pageProps } = props;
  return(
      <FirebaseContext.Provider
        value={{
          firebase,
          user
        }}
      >
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    )
}

export default MyApp
