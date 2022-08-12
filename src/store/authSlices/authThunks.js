import { loginWithEmailPasword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/provider"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email,password) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials())
    }
} 

//funcion async para traer los datos del proveedor configurado el firebase, se pasa el dispatch para usar las funciones puras de la store //
export const startGoogleSingInt = ()=> {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const resultProvider = await singInWithGoogle()

        if(!resultProvider.ok) {
            return dispatch( logout(resultProvider.errorMessage));
        }
        dispatch(login(resultProvider))
    }
}

export const startCreadingUserWithEmailPassword = ({email, password, displayName})=> {
    return async ( dispatch ) => {
        dispatch(checkingCredentials());

        const respProvider = await registerUserWithEmailPassword({email, password, displayName})
        const { ok, uid, photoURL, errorMessage } = respProvider

        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login({uid, displayName, email, photoURL}))
        console.log(respProvider)
    }

}
export const startLoginWithEmailPassword = ({email,password}) => {
    return async ( dispatch ) => {
        dispatch(checkingCredentials());

        const respProvider = await loginWithEmailPasword({email,password})
        console.log(respProvider)

        if(!respProvider.ok) return dispatch( logout(respProvider));
        dispatch(login(respProvider))
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        const respProvider = await logoutFirebase()
        console.log(respProvider)
        dispatch(logout())
    }
}