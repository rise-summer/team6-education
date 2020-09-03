/*
*   Generic Material UI Nav Bar across top of page for Class Page.
*       - Has buttons for navigation between class syllabus, 
*         assignments, and grades for now.
*       - Assignments button only functional one for now since 
*         that is the only page ready to be loaded.
*
*/

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import history from '../history';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const NavBar = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAssignmentClick = () => {
        history.push("/StudentAssignments");
        window.location.reload();
    };

    return (
        <div className = {classes.root}>
            <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu" 
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Syllabus</MenuItem>
            <MenuItem onClick={handleAssignmentClick}>Assignments</MenuItem>
            <MenuItem onClick={handleClose}>Grades</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Class
          </Typography>
        </Toolbar>
      </AppBar>
 
        </div>
    )
};

export default NavBar;
