import { singInWithGoogle } from "../../firebase/provider"
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