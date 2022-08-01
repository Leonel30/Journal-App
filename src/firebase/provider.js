import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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