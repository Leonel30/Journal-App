import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGalery } from '../components/ImageGalery'

export const NoteView = () => {
  return (
   <Grid container direction='row' justifyContent='space-between' sx={{mb:1}}
   className ="animate__animated animate__zoomInLeft">
    <Grid item>
        <Typography fontSize={ 39 } fontWeight= 'light' >
            30 Julio 2022
        </Typography>
    </Grid>
    <Grid item>
       <Button color="primary">
        <SaveOutlined sx={{ fontSize:30, mr:1}}/>
        Guardar
       </Button>
    </Grid>
    <Grid container>
        <TextField
            type='text'
            variant='filled'
            fullWidth
            placeholder="ingrese título"
            label="Título"
            sx={{border:'none',mb:1}}
        />
         <TextField
            type='text'
            variant='filled'
            fullWidth
            multiline
            placeholder="¿Qué sucedío en el día de hoy?"
            minRows={5}
        />
    </Grid>
    <ImageGalery/>

   </Grid>
  )
}
