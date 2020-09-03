/*
* 
* Course page content hardcoded for Algebra 2 class so it matches Figma exactly.
*
* Email button and all of the links in the class info card are not functional yet.
*/

import React, { useState, useEffect } from 'react';
import './ClassPage.css';
import NavBar from '../Header/NavBar.js';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import history from '../history';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import CourseNavBar from '../Header/CourseNavBar.js';
import Avatar from '@material-ui/core/Avatar';
import {withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    pos: {
        marginBottom: 0,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(6),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(3),
    },
    courseName: {
        textAlign: 'left',
    },
    paper: {
        textAlign: 'left',
        width: "100%",
        alignSelf: 'flex-start',      
    },
    paperRight: {
        textAlign: 'left',
        width: "100%",
        alignSelf: 'flex-end',
        marginBottom: theme.spacing(3),
    },
    grid: {
        display:"flex",
    },
    navBarButtons:{
        marginRight: '10px',
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    centerCard:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    teacher:{
        width: "100%",
        alignSelf: 'flex-end',
        marginBottom: theme.spacing(3),
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    announcements:{
        marginTop: '15px',
        marginBottom: '15px',
    },
    emailButton:{
        minWidth: '123px',
        marginTop: '10px'
    },  
    classInfo:{
        width: "100%",
        marginBottom: theme.spacing(3),
        display: 'flex',
        alignItems:'left',
        justifyContent: 'left',
        textAlign: 'left',
        alignSelf: 'flex-end',
    },
  }));

  const StyledButton = withStyles({
    root:{
        background: '#8dd245',
        color: 'white',
    },
    label: {
        textTransform: 'capitalize',
    },
  })(Button);

function ClassPage() {
    const classes = useStyles();
    const theme = useTheme();
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [Class, setClass] = React.useState([]);
    const [classJSON, setClassJSON] = React.useState(null);
    const [classId, setClassId] = useState(null);

    /*useEffect(() => {
        const classInput = {
            course_id: 2000,
            title: 'Programming with Python',
            description: 'This course teaches python',
            instructor: 313,
            start_date: '2020-01-01',
            end_date: '2020-04-01',
        }
        axios.post('http://127.0.0.1:5000/api/class/add', classInput)
            .then(
                (error) => {
                    console.log(error);
                }
            )
      }, [])*/

      /*useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/class/delete/2000')
        .then(
            (error) => {
              setError(error);
              console.log(error);
            }
          )
      }, [])*/

    /*useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/class/' + 2000)
          .then(
            (respone) => {
              setClassJSON(respone);
              setIsLoaded(true); //added this to get content to show up
              console.log(respone);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
              console.log(error);
            }
          )
      }, [])*/

    return (
        <div className={classes.root}>
            <NavBar />
            <div className={classes.toolbar} />
            <main className={classes.content}>
                <CourseNavBar />
                    <Grid container spacing={3} className={classes.grid}>
                        <Grid item xs={9}>  
                            <Card className={classes.paper}>
                                <List >
                                    <ListItem component="h3">Announcements</ListItem>
                                    <Divider />
                                    <ListItem alignItems="flex" className={classes.announcements} dense="true">
                                        <ListItemText disableTypography edge="start" 
                                            primary={<Typography variant="body1" style={{ color: 'black'}}>
                                                        <Box fontWeight="fontWeightBold">
                                                            Class Cancelled 9/4
                                                        </Box>
                                                    </Typography>} 
                                            secondary={<Typography variant="subtitle2" style={{ color: 'black'}}>
                                                            Hello class, I am unfortunately sick so I will not be able to 
                                                            meet you guys today at our scheduled time. Please continue to work on Quadratics Equation Exercise 3 
                                                            and be sure to submit on time! Thank you.
                                                       </Typography>}/>
                                        <Typography edge="end" variant="subtitle2" style={{color: 'grey'}}>
                                            <Box minWidth="45px" maxHeight="2px" marginTop="7px">
                                                2h ago
                                            </Box>
                                        </Typography>
                                    </ListItem> 
                                    < Divider />
                                    <ListItem alignItems="flex" className={classes.announcements} dense="true">
                                        <ListItemText disableTypography edge="start" 
                                            primary={<Typography variant="body1" style={{ color: 'black'}}>
                                                        <Box fontWeight="fontWeightBold">
                                                            Reminder: Take Home Quiz 1
                                                        </Box>
                                                    </Typography>} 
                                            secondary={<Typography variant="subtitle2" style={{ color: 'black'}}>
                                                            Take home quiz #1 has been uploaded into the assignments tab. It is 
                                                            due in 4 days, be sure to complete and submit a pdf of it in the submissions tab.
                                                       </Typography>}/>
                                        <Typography edge="end" variant="subtitle2" style={{color: 'grey'}}>
                                            <Box minWidth="25px" maxHeight="2px" marginTop="7px">
                                                9/2
                                            </Box>
                                        </Typography>
                                    </ListItem> 
                                    < Divider />
                                    <ListItem alignItems="flex" className={classes.announcements} dense="true">
                                        <ListItemText disableTypography edge="start" 
                                            primary={<Typography variant="body1" style={{ color: 'black'}}>
                                                        <Box fontWeight="fontWeightBold">
                                                            Updated Syllabus - Thank you for the feedback!
                                                        </Box>
                                                    </Typography>} 
                                            secondary={<Typography variant="subtitle2" style={{ color: 'black'}}>
                                                            As per our last meeting, thank you for noticing the wrong dates and typos. 
                                                            I fixed and updated a new syllabus for our class.
                                                       </Typography>}/>
                                        <Typography edge="end" variant="subtitle2" style={{color: 'grey'}}>
                                            <Box minWidth="25px" maxHeight="2px" marginTop="7px">
                                                8/26
                                            </Box>
                                        </Typography>
                                    </ListItem> 
                                    < Divider />
                                    <ListItem alignItems="flex" className={classes.announcements} dense="true">
                                        <ListItemText disableTypography edge="start" 
                                            primary={<Typography variant="body1" style={{ color: 'black'}}>
                                                        <Box fontWeight="fontWeightBold">
                                                            Hello everyone!
                                                        </Box>
                                                    </Typography>} 
                                            secondary={<Typography variant="subtitle2" style={{ color: 'black'}}>
                                                            Nice to e-meet you and welcome back to school! Super 
                                                            excited to see your faces :). Please check out the syllabus before Wednesday's 
                                                            class. Feel free to message me if you have any questions or concerns.
                                                       </Typography>}/>
                                        <Typography edge="end" variant="subtitle2" style={{color: 'grey'}}>
                                            <Box minWidth="25px" maxHeight="2px" marginTop="7px">
                                                8/24
                                            </Box>
                                        </Typography>
                                    </ListItem> 
                                    < Divider />
                                </List>
                            </Card> 
                        </Grid>
                        <Grid item xs={3} justify="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                            <Paper className={classes.teacher}>
                                
                                    <List dense="true">
                                        <ListItem >
                                            <Avatar alt="Photo" src="https://images.unsplash.com/photo-1551862253-ccddd3b67769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" className={classes.large} />
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="body1" style={{color: 'black'}}>
                                                <Box fontWeight="Medium" paddingLeft="10px">
                                                    Quint, Cynthia
                                                </Box>
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="body2" style={{color: 'gray'}}>
                                                <Box paddingLeft="3px">
                                                    6th Grade Teacher
                                                </Box>
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <StyledButton className={classes.emailButton}>
                                                <Typography variant="body2" style={{color: 'white'}}>
                                                    <Box fontWeight="bold">
                                                        Email
                                                    </Box>
                                                </Typography>
                                            </StyledButton>
                                        </ListItem>
                                    </List>
                                
                            </Paper>  
                            </Box>   
                            <Paper className={classes.teacher}>
                                <List dense="true">
                                    <ListItem component="h3">Class Info</ListItem>
                                    <ListItem alignItems="flex">
                                    <ListItemIcon><DescriptionOutlinedIcon fontSize="small"/></ListItemIcon>
                                        <Typography variant="body2">
                                            Algebra 2 Syllabus
                                        </Typography>
                                        
                                    </ListItem>
                                    <ListItem alignItems="flex">
                                    <ListItemIcon><VideocamOutlinedIcon fontSize="small"/></ListItemIcon>
                                        <ListItemText edge="start"
                                            primary="Class Meeting (zoom link)"/>
                                    </ListItem>
                                    <ListItem alignItems="flex">
                                    <ListItemIcon><LaunchOutlinedIcon fontSize="small"/></ListItemIcon>
                                        <ListItemText edge="start"
                                            primary="Availability"/>
                                    </ListItem>
                                    <ListItem alignItems="flex">
                                    <ListItemIcon><PersonOutlineOutlinedIcon fontSize="small"/></ListItemIcon>
                                        <ListItemText edge="start"
                                            primary="Class Roster"/>
                                    </ListItem>
                                </List>
                            </Paper> 
                        </Grid>
                    </Grid>
                    
                </main>
        </div>
    );
}
    
export default ClassPage;