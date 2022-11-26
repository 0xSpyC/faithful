import React from 'react'
import {createUseStyles} from 'react-jss'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ClassNames } from '@emotion/react';

const useStyles = createUseStyles({
    header: {
      "background-color": 'green',
      margin: '20px',
      }
  })

const Header = () => {
    const classes = useStyles()
  return (
    <div className={classes.header}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Faithful
              </Typography>
              <Button color="inherit">Connect Wallet</Button>
            </Toolbar>
          </AppBar>
        </Box>
    </div>
  )
}

export default Header