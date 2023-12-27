import React from 'react'
import { AppBar, Box, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Drawer from './Drawers';



const TitleName = [
    '',
    'Home',
  
    'Value Propositions',
  
    'Innovative Products',
  
    'Services',
  
    'Publications',
  
    'SaaS',
    'Contact Us',

  ];
const Header = () => {
    const isMatch = useMediaQuery(useTheme().breakpoints.down('md'))
  return (
    <div>
        <AppBar
        className='app-bar'
        elevation={1}
       
       
      >
        <Toolbar sx={{ display: 'flex',color:'white', justifyContent: 'space-between' }}>
        
          {isMatch ? (
            <>
              <Drawer />
            </>
          ) : (
            <>
              
              <img src={require('../logo-header.png')} alt='' />
              
              <Box>
                <Tabs>
                  {TitleName.map((item) => (
                    <Tab sx={{color:'white'}} label={item} key={item} />
                    
                    
                  ))}
                
                </Tabs>
                
              </Box>
              

            </>
          )}
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Header
