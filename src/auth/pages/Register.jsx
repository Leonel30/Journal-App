
import { Grid, Typography,TextField, Button,Link} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout';

export const Register = () => {
  return (
    <AuthLayout title="Crear Cuenta">
    <form>
      <Grid container>
      <Grid item xs= {12} sx={{mt:2}}>
          <TextField
            label="Nombre"
            type="text"
            placeholder='Nombre Completo'
            fullWidth
          >
          </TextField>
        </Grid>
        <Grid item xs= {12} sx={{mt:2}}>
          <TextField
            label="Correo"
            type="email"
            placeholder='leo@apple.com.us'
            fullWidth
          >
          </TextField>
        </Grid>
        <Grid item xs={12} sx={{mt:2}}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder='Contraseña'
            fullWidth
          >
          </TextField>
        </Grid>
        <Grid container spacing={2} sx={{mb:2, mt:1}}>
          <Grid item xs={12} sm={12}>
            <Button 
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
