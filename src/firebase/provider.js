import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./confi";

// proveedor para autenticar el login //
const googleProvider = new GoogleAuthProvider();

//armando la funcion para poder tomar los datos del proveedor//
export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
      /*const credentials = GoogleAuthProvider.credentialFromResult(result);
        console.log(credentials) */
        const {displayName, photoURL, uid, email} = result.user
//ua tengo los datos necesarios para hacer la llama async en el thunks //
        return {
            ok:true,
            displayName,
            photoURL,
            uid,
            email
        }
        
    } catch (error) {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok:false,
            errorCode,
            errorMessage
        }
    }
}
export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL }= resp.user;
        // actualiza una parametro de lo q se envio en este caso displayNAme //
        await updateProfile( FirebaseAuth.currentUser, {displayName})
        console.log(resp)
        return {
            ok:true,
            uid, photoURL,email, displayName
        }
        
    } catch (error) {
        return {
            ok:false,
            errorMessage: error.message

        }
    }
}

export const loginWithEmailPasword = async ({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL, displayName} = resp.user
        return {
            ok:true,
            uid, photoURL,displayName
        }
    } catch (error) {
        return{
            ok:false,
            errorMessage: error.message
        }
    }
}