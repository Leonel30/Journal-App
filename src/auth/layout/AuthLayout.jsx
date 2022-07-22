import { Grid, Typography } from '@mui/material'
import React from 'react'

export const AuthLayout = ({children, title = ""}) => {
  return (
    <Grid
    container
    spacing={ 0 }
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight:'100vh', backgroundColor: 'primary.main', pt:4 }}
   >
        <Grid item
        className='box-shadow'
        sx={{ backgroundColor:'#ffff', padding:2, borderRadius:2, width:{sm:450}}}
        xs={3} sm={8} 
        >
        <Typography variant='h5' sx={{mb:1}} sm={8}>{title}</Typography>
        {children}
        </Grid>
    </Grid>
   )
  
}
