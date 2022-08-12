import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectView = () => {
  return (
    <Grid
    className ="animate__animated animate__zoomInLeft"
    container
    spacing={ 0 }
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight:'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius:3}}
   >
    <Grid item xs={12}>
        <StarOutline sx={{ fontSize:100 , color: '#ffff'}}/>
    </Grid>
    <Grid item xs={12}>
        <Typography color="white" variant='h5'>Selecciona o Crea una entrada</Typography>
    </Grid>
    </Grid>
  )
}
