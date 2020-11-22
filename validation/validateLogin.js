export default function validarLogin(valores){
    let errors = {};

    //validate email

    if(!valores.email){
        errors.email = 'El email es obligatorio'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
        errors.email = 'Email no valido';
    }

    //validar el password
    if (!valores.password) {
        errors.password = 'El password es obligatorio'
    } else if(valores.password.length < 6) {
        errors.password = 'El password debe ser de al menos 6 caracteres'
    }

    return errors;
}