import React from 'react'
import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectView } from '../view/NothingSelectView'
import { NoteView } from '../view/NoteView'
import { AddOutlined } from '@mui/icons-material'

const view = true
export const Journal = () => {
  return (
    <JournalLayout>
    {/*     <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex incidunt, eum corporis ut placeat. Ipsa ab rerum vel! Assumenda consequuntur perspiciatis enim quasi dignissimos iste magni id et ex.</Typography> */}
    {/* <NothingSelectView/> */}
    {
    (view) ?  <NoteView/> : <NothingSelectView/>
    }
    <IconButton
    size='large'
    sx={{
      color:'white',
      backgroundColor: 'error.main',
      ':hover': {backgroundColor:'error.main', opacity: 0.9},
      position:'fixed',
      right:50,
      bottom:50
    }}
    >
      <AddOutlined sx={{ fontSize:30}} />

    </IconButton>
    </JournalLayout>
  )
}
