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
    <div  >
      <React.Fragment>
      <Box className='menuicon'  >
      <img src={require('../logo-header.png')} alt='' />
        <IconButton  className='iconbtn'  onClick={() => setOpenMenu(true)} >
          <MenuIcon  className='iconbtn'   />
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
    </div>
  )
}

export default Drawers
