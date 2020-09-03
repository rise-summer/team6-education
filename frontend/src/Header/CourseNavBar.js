/*
*
* Nav bar displayed when viewing a course. Shows course name, overview tab, 
* assignments tab, and grades tab. Grades page does not exist yet so that tab 
* does not work.
* 
* The current tab is underlined so the if-else statements return the correct underlined
* tab based on which page it is currently on.
*
*/

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './CourseNavBar.css';
import history from '../history';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {withStyles} from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(4),
    },
    courseName: {
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'row'
    },
    navBarButtons:{
        marginRight: '10px',
        marginTop: '5px',
    },
    expandIcon:{
        marginTop: '5px',
        marginLeft: '2px',
    },
  }));

  const ButtonNotClicked = withStyles({
    root: {
        color: 'gray',
    },
    label: {
        textTransform: 'capitalize',
    },
  })(Button);
  const ButtonClicked = withStyles({
    label: {
        textTransform: 'capitalize',
        borderBottom: '2px solid',
        borderBottomColor: '#8dd245',
    },
  })(Button);

function CourseNavBar() {
    const classes = useStyles();
    const [pageLocation, setPageLocation] = React.useState(null);
    let location = useLocation();
    //console.log(location.pathname);

    const handleAssignmentClick = () => {
        history.push("/StudentAssignments");
        window.location.reload();
    };

    const handleOverviewClick = () => {
        history.push("/ClassPage");
        window.location.reload();
    };
    
    if(location.pathname == "/StudentAssignments" || location.pathname == "/Assignment"){
        return (
            <div className={classes.root}>
                    <main className={classes.content}>
                          <div className={classes.classHeader}>
                            <div className={classes.courseName}>
                                <Typography variant="h5">
                                    Algebra 2
                                </Typography>
                                <div className={classes.expandIcon}>
                                    < ExpandMoreIcon/>
                                </div>
                            </div>
                            <Box  display="flex" flexDirection="row">
                                <ButtonNotClicked onClick={handleOverviewClick} className={classes.navBarButtons}>
                                    Overview
                                </ButtonNotClicked>
                                <ButtonClicked onClick={handleAssignmentClick} className={classes.navBarButtons}>
                                    Assignments
                                </ButtonClicked>
                                <ButtonNotClicked className={classes.navBarButtons}>
                                    Grades
                                </ButtonNotClicked>
                            </Box>
                          </div>
                    </main>
            </div>
        );
    } else if(location.pathname == "/ClassPage"){
        return (
            <div className={classes.root}>
                    <main className={classes.content}>
                          <div className={classes.classHeader}>
                            <div className={classes.courseName}>
                                <Typography variant="h5">
                                    Algebra 2
                                </Typography>
                                <div className={classes.expandIcon}>
                                    < ExpandMoreIcon/>
                                </div>
                            </div>
                            <Box  display="flex" flexDirection="row">
                                <ButtonClicked onClick={handleOverviewClick} className={classes.navBarButtons}>
                                    Overview
                                </ButtonClicked>
                                <ButtonNotClicked onClick={handleAssignmentClick} className={classes.navBarButtons}>
                                    Assignments
                                </ButtonNotClicked>
                                <ButtonNotClicked className={classes.navBarButtons}>
                                    Grades
                                </ButtonNotClicked>
                            </Box>
                          </div>
                    </main>
            </div>
        );
    } else {
        return (
            <div className={classes.root}>
                    <main className={classes.content}>
                          <div className={classes.classHeader}>
                            <div className={classes.courseName}>
                                <Typography variant="h5">
                                    Algebra 2
                                </Typography>
                                <div className={classes.expandIcon}>
                                    < ExpandMoreIcon/>
                                </div>
                            </div>
                            <Box  display="flex" flexDirection="row">
                                <ButtonNotClicked onClick={handleOverviewClick} className={classes.navBarButtons}>
                                    Overview
                                </ButtonNotClicked>
                                <ButtonNotClicked onClick={handleAssignmentClick} className={classes.navBarButtons}>
                                    Assignments
                                </ButtonNotClicked>
                                <ButtonNotClicked className={classes.navBarButtons}>
                                    Grades
                                </ButtonNotClicked>
                            </Box>
                          </div>
                    </main>
            </div>
        );
    }
}

export default CourseNavBar;