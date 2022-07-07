import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';

// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     target: window ? window() :  undefined,
//   })

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>
//   )
// }


export default function HeaderMenu(props) {

  return (
      <AppBar postiong="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            sx={{ mr: 2, color: '#F5E0F5'}}
          >
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
  )
}