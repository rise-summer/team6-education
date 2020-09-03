/*
* 
* Assignment page shows assignment details matches Figma exactly
*   - Hardcoded to show quadratic equations exercise 3
*   - Submit button is not functional yet.
*
*/

import React from 'react';
import './Assignment.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import NavBar from '../Header/NavBar.js';
import Box from '@material-ui/core/Box';
import CourseNavBar from '../Header/CourseNavBar.js';
import {withStyles} from '@material-ui/core/styles';
import {DropzoneArea} from 'material-ui-dropzone';
import Grid from '@material-ui/core/Grid';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        bgcolor: 'text.secondary',
    },
    pos: {
        marginBottom: 0,
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        padding: theme.spacing(6),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(3),
      },
    card: {
        display: 'inline-block',
        flexGrow: 1,
        margin: '0 0px',
        width: "100%",
    },
    list: {
        minWidth: 700
    },
    button: {
        //flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        maxWidth: 100,
    },
    submission: {
        minWidth: '130px',
        maxWidth: '150px',
        marginLeft: '7px',
        textAlign: 'center',
      },
    points: {
        marginRight: '40px',
    },
    submitButton:{
        minWidth: '200px',
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

  const SubmissionPaper = withStyles({
    root:{
        background: 'white',
        color: '#8dd245',
        borderBlockColor: '#8dd245',
        outlineColor: '#8dd245',
        border: '1px solid',
    },
    label: {
        textTransform: 'capitalize',
    },
  })(Paper);

  const NotSubmittedPaper = withStyles({
    root:{
        background: 'white',
        color: 'red',
        borderBlockColor: 'red',
        outlineColor: 'red',
        border: '1px solid',
    },
    label: {
        textTransform: 'capitalize',
    },
  })(Paper);

function Assignment() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <NavBar />
        <div className={classes.toolbar} />
        <main className={classes.content}>
            <CourseNavBar />
            <Card className={classes.card} >
            <List className={classes.list}>
                <ListItem>
                    <Typography variant="h5">
                        <Box fontWeight="fontWeightBold">
                            Assignment Details: Quadratic Equations Exercise 3
                        </Box>
                    </Typography>
                    <NotSubmittedPaper className={classes.submission} variant="outlined">
                              NOT SUBMITTED  
                    </NotSubmittedPaper>
                    <ListItemSecondaryAction>
                        <ListItemText edge="end" secondary="POINTS POSSIBLE:" />  
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem dense="true">
                    <Box mr={1} display="inline">
                        <Typography> Due Date:</Typography>
                    </Box>
                    <Typography variant="body1" style={{ color: '#8dd245'}}> 
                        <Box fontWeight="fontWeightBold">
                            Sep 8 at 11:59 pm
                        </Box>
                    </Typography>
                    <ListItemSecondaryAction>
                        <ListItemText className={classes.points} edge="end" secondary="30 points" />  
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem dense="true">
                    <ListItemText 
                        primary="Attachments: " 
                    />
                </ListItem>
                <Divider />
                <ListItem>
                    <h2>Upload Assignment {"\n"}</h2>
                </ListItem>
                <ListItem>
                <DropzoneArea
                    onChange={(files) => console.log('Files:', files)}
                />
                </ListItem>
                <ListItem alignItems="flex">
                    <Grid container justify="flex-end" spacing={1}>
                        <Grid item>
                            <StyledButton className={classes.submitButton}>
                                <Typography variant="body2" style={{color: 'white'}}>
                                    <Box fontWeight="bold">
                                        Submit Assignment
                                    </Box>
                                </Typography>
                            </StyledButton>
                        </Grid>
                    </Grid>
                </ListItem>

            </List>
        </Card>
        </main>
    </div>
  );
}

export default Assignment;