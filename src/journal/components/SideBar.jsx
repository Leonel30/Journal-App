import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const SideBar = ({drawerWidth}) => {
    const { displayName } = useSelector( state => state.auth)
  return (
   <Box
    component='nav'
    sx={{ width:{sm: drawerWidth} , flexShrink:{sm :0}}}
   >
    <Drawer
        variant='permanent' // o temporary para mostarlo condicionalmente
        open
        sx={{ display:{xs:'block'},'& .MuiDrawer-paper':{boxSizing:'border-box',  width:{sm: drawerWidth}}}}
        
    >
        <Toolbar>
            <Typography variant='h6' noWrap component='div'>
                {displayName}
            </Typography>
        </Toolbar>
        <Divider/>
        <List>
            {
                ['Enero','Febrero','Marzo','Abril','Mayo'].map(text => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                            </ListItemIcon>
                            <Grid>
                                <ListItemText primary ={text}/>
                                <ListItemText secondary={'escirbie aqui la reseña de lo q deseas'}/>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>

    </Drawer>

   </Box>
  )
}
