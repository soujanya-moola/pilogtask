import React from 'react'
import { Box, Drawer, IconButton, List, ListItemButton, ListItemText, } from '@mui/material'
import  { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'


const Drawers = () => {
    const [openMenu, setOpenMenu] = useState(false);
  const closeHandler = () => {
    setOpenMenu(false);
  };
  return (
    
      <React.Fragment>
      <Box width='100%' display={'flex'} justifyContent={'space-between'} flexDirection={'row'}>
        
        <img src={require('../logo-header.png')} alt='' />
        <IconButton onClick={() => setOpenMenu(true)} >
          <MenuIcon color='white' />
        </IconButton>

        
     
      </Box>
      <Box>
        <Drawer open={openMenu}
          onClose={() => setOpenMenu(false)}>
          <List>
            <ListItemButton onClick={closeHandler}>
              {/* <AddHomeOutlinedIcon /> */}
              
            </ListItemButton>
            <ListItemButton onClick={closeHandler}>
              {/* <AddHomeOutlinedIcon /> */}
              <ListItemText>
                Value Propositions
              </ListItemText>
            </ListItemButton>
            <ListItemButton onClick={closeHandler}>
              {/* <AddHomeOutlinedIcon /> */}
              <ListItemText>
                Innovative Products
              </ListItemText>
            </ListItemButton>
            <ListItemButton onClick={closeHandler}>
              {/* <AddHomeOutlinedIcon /> */}
              <ListItemText>
                Services
              </ListItemText>
            </ListItemButton>
            <ListItemButton onClick={closeHandler}>
              {/* <AddHomeOutlinedIcon /> */}
              <ListItemText>
                Publications
              </ListItemText>
            </ListItemButton>
            <ListItemButton onClick={closeHandler}>
              {/* <AddHomeOutlinedIcon /> */}
              <ListItemText>
                SaaS
              </ListItemText>
            </ListItemButton>
            <ListItemButton onClick={closeHandler} >
              {/* <AddHomeOutlinedIcon sx={{ marginRight: '10px' }} /> */}
              <ListItemText>
                Contact Us
              </ListItemText>
            </ListItemButton>
          </List>
        </Drawer>
      </Box>
    </React.Fragment>
    
  )
}

export default Drawers
