import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: '#333' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              PRODUCT
            </Typography>
            <Link to={'/Home'}><Button sx={{ color: '#fff' }}>HOME</Button></Link>
            <Link to={'/Addproduct'}><Button sx={{ color: '#fff' }}>ADD PRODUCT</Button></Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Nav;
