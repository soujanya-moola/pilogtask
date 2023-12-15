import { Box, Grid, Input, Typography } from '@mui/material'
import React from 'react'
import { Button, Container } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4} lg={3}>
          <Container>
            <img src={require('./logo-header.png')}/>
            
            <Box sx={{marginTop:'2rem'}}>
              <FacebookIcon
                sx={{ marginLeft: "15px", fontSize: "35px" }}
              />
              <InstagramIcon sx={{ marginRight: "15px", fontSize: "25px" }} />
              <YouTubeIcon sx={{ marginRight: "15px", fontSize: "25px" }} />
            </Box>
          </Container>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                textDecorationLine: "underline",color:'red'
              }}
            >
              Quick Links
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                fontSize: "17px",
                fontFamily: "Nunito",
                color: "gray",
              }}
            >
              Corporate{" "}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                fontSize: "17px",
                fontFamily: "Nunito",
                color: "gray",
              }}
            >
              Zonal office{" "}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                fontSize: "17px",
                fontFamily: "Nunito",
                color: "gray",
              }}
            >
              Industries/Customers
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                textDecorationLine: "underline", color:'red'
              }}
            >
              About
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                fontSize: "17px",
                fontFamily: "Nunito",
                color: "gray",
              }}
            >
              Publication{" "}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                fontSize: "17px",
                fontFamily: "Nunito",
                color: "gray",
              }}
            >
              Contact Us{" "}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                fontSize: "17px",
                fontFamily: "Nunito",
                color: "gray",
              }}
            >
            Our Services
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                textDecorationLine: "underline",color:'red'
              }}
            >
             Our Services
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                fontSize: "17px",
                fontFamily: "Nunito",
                color: "gray",
              }}
            >
              Value Proposition{" "}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                fontSize: "17px",
                fontFamily: "Nunito",
                color: "gray",
              }}
            >
              Innovate Products{" "}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                fontSize: "17px",
                fontFamily: "Nunito",
                color: "gray",
              }}
            >
              Services
            </Typography>
          </Box>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default Footer
