import app from 'firebase';
import firebaseConfig from './config';
import 'firebase/auth';

class Firebase {
    constructor(){
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig)
        }

        this.auth = app.auth();
        
    }

    //registrar un usuario

    async registrarUsuario(name, email, password){
        const nuevoUsuauario = await this.auth.createUserWithEmailAndPassword(email, password);
        return await nuevoUsuauario.user.updateProfile({
            displayName : name
        })
    }

    //login fn
    async loginFn(email, password){
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    //logout
    async logout(){
        await this.auth.signOut();
    }
}

const firebase = new Firebase();

export default firebase;