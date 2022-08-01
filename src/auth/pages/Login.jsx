import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout } from '../layout/AuthLayout';
import { Link as RouterLink } from 'react-router-dom'
import { Grid, Typography,TextField, Button,Link} from '@mui/material';
import { Google } from '@mui/icons-material'
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication, startGoogleSingInt } from '../../store/authSlices/authThunks';

export const Login = () => {
  /* const navigate = useNavigate() */
 /*  const onLogin=() => {
    console.log('entradando')
    navigate('/')
  } */

  //llamar a los metodos del authSlice ()store //
  const dispatch = useDispatch();

  //tomando una propiedad del estado inicial del authSlice//
  const { status } = useSelector(state => state.auth)


  const {onInputChange, formState} = useForm({
    email:'leo@google.com',
    password:'1234',
    name:'leo'
  })
  const {email,password} = formState
  const isAuthenticating = useMemo(() => status === "checking", [status])

  const onSubmit=(e)=> {
    e.preventDefault();
    dispatch( checkingAuthentication() )
  }

  const onGoogleSignIn = () => {
    console.log("entrando con goole")
    dispatch ( startGoogleSingInt() )
  }


  return (
      <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs= {12} sx={{mt:2}} >
            <TextField
              label="Correo"
              type="email"
              placeholder='leo@apple.com.us'
              fullWidth
              name='email'
              value= {email}
              onChange= {onInputChange}
            >
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{mt:2}} >
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name='password'
              value= { password }
              onChange= {onInputChange}
            >
            </TextField>
          </Grid>
          <Grid container spacing={2} sx={{mb:2, mt:1}} >
            <Grid item xs={12} sm={6}>
              <Button 
                variant="contained"
                fullWidth
                type="submit"
                disabled ={isAuthenticating}
                >Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
                disabled ={isAuthenticating}
                >
                <Google/>
                <Typography sx={{ml:1}}>Google</Typography>
                </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end"  > 
            <Link component={RouterLink} to="/auth/register">Crear Cuenta</Link>
          </Grid>
        </Grid>
      </form>
      </AuthLayout>
  )
}
