
import { Grid, Typography,TextField, Button,Link, Alert} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startCreadingUserWithEmailPassword } from '../../store/authSlices/authThunks';
import { useMemo } from 'react';

const FormData = {
  email:'',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'),'El correo debe de tener una @'],
  password : [(value) => value.length >= 6 ,'la contraseña debe tener más de 6 caracteres'],
  displayName : [(value) => value.length >=1, 'El nombre es obligatorio']
}

export const Register = () => {

  const dispatch = useDispatch()

const [formSubmit, setFormSubmit] = useState(false)

const { status, errorMessage} = useSelector(state => state.auth);
const isCheckingAuthentication = useMemo(()=> status==='checking',[status]);


const {formState, displayName, email, password, onInputChange, isFormValid, displayNameValid, emailValid, passwordValid } = useForm( FormData,formValidations )


const onSubmit = (e) => {
  e.preventDefault()
  setFormSubmit(true);

  if(!isFormValid)return;

  dispatch(startCreadingUserWithEmailPassword(formState))
  
}

  return (
    <AuthLayout title="Crear Cuenta">
    <form onSubmit={onSubmit}
    className ="animate__animated animate__fadeIn animate__faster"
    >
      <Grid container>
      <Grid item xs= {12} sx={{mt:2}}>
          <TextField
            label="Nombre"
            type="text"
            placeholder='Nombre Completo'
            fullWidth
            name='displayName'
            value= { displayName }
            onChange= {onInputChange}
            error ={!!displayNameValid && formSubmit}
            helperText ={displayNameValid }
          >
          </TextField>
        </Grid>
        <Grid item xs= {12} sx={{mt:2}}>
          <TextField
            label="Correo"
            type="email"
            placeholder='leo@apple.com.us'
            fullWidth
            name='email'
            value= { email }
            onChange= {onInputChange}
            error ={!!emailValid && formSubmit}
            helperText ={emailValid}
          >
          </TextField>
        </Grid>
        <Grid item xs={12} sx={{mt:2}}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder='Contraseña'
            fullWidth
            name='password'
            value= { password }
            onChange= {onInputChange}
            error = {!!passwordValid && formSubmit}
            helperText ={passwordValid}
          >
          </TextField>
        </Grid>
        <Grid container spacing={2} sx={{mb:2, mt:1}}>
        <Grid item xs={12} sm={12} display={!!errorMessage? '': 'none'}>
           <Alert
            severity='error'>{errorMessage}</Alert>
        </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              disabled={isCheckingAuthentication}
              type="submit" 
              variant="contained"
              fullWidth
              >Crear Cuenta</Button>
          </Grid>
         
        </Grid>
        <Grid container direction="row" justifyContent='end'>
          <Typography sx={{mr:1}}>¿ Ya tienes cuenta ?</Typography> 
          <Link component={RouterLink} to="/auth/login">Ingresar</Link>
        </Grid>
      </Grid>
    </form>
    </AuthLayout>
  )
}
