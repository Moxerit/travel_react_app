import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  
  return (
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" classname={classes.title}>
            Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography variant="h6" classname={classes.title}>
              Explore new places
            </Typography>
            {/* <Autocomplete> */}
              <div className={classes.search}>  
                <div classname={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }}>
                  
                </InputBase>
              </div>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
  );
}

export default Header;