/*
* 
* Student assignments content page. Assignments and content matches Figma exactly.
*   - Clicking on an assignment will route to the assignment page.
*   - The assignments that are labelled not submitted are taken from assignment API.
*   - Assignments labelled submitted are hardcoded for now.
*
*/

import React, { useEffect } from 'react';
import './StudentAssignments.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import history from '../history';
import NavBar from '../Header/NavBar.js';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import CourseNavBar from '../Header/CourseNavBar.js';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
    padding: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(3),
  },
  assignments: {
    display: 'inline-block',
    flexGrow: 1,
    margin: '0 0px',
    width: "100%",
    height: "100%"
  },
  submission: {
    minWidth: '130px',
    maxWidth: '140px',
    marginLeft: '7px',
    textAlign: 'center',
  },  
  eachAssignment:{
    marginTop: '5px',
    marginBottom: '10px',
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const flexContainer ={
  display: 'flex',
  flexDirection: 'row',
};

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

const AssignmentButton = withStyles({
  label: {
      textTransform: 'capitalize',
  },
})(Button);

function StudentAssignments() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [error, setError] = React.useState(null);
    //const [isLoaded, setIsLoaded] = React.useState(false);
    const [assignments, setAssignments] = React.useState([]);
    const [assignmentJSON, setAssignmentJSON] = React.useState(null);

    const handleClick = () => {
      history.push("/Assignment");
      window.location.reload();
    }

    useEffect(() => {

      axios.get('http://127.0.0.1:5000/fetchAssignments', {params: {courseId: "Algebra2"}})
        .then(
          (response) => {
            setAssignments(response.data);
            console.log(response);
          },
          (error) => {
            setError(error);
            console.log(error);
          }
        )
    }, [])

    if (error) {
      console.log(error.response);
      return <div>Error: {error.message}</div>;
    } else {
      //console.log(assignments);

      return (
        <div className={classes.root}>
        <NavBar />
            <div className={classes.toolbar} />
            <main className={classes.content}>
                <CourseNavBar />
                    
                <Card className={classes.assignments} variant="outlined">
                  <List >
                    
                    {assignments.map((assignment) =>
                      <div>
                        <ListItem className={classes.eachAssignment}>
                          <ListItemIcon><InsertDriveFileOutlinedIcon fontSize="large"/></ListItemIcon>
                          <Box display="flex" flexDirection="column">
                            <ListItemText disableTypography edge="start" 
                            primary={<Typography variant="body1" style={{ color: 'black'}}>
                                       <Box fontWeight="fontWeightBold">
                                          {assignment.assignTitle}
                                       </Box>
                                     </Typography>} 
                            secondary={<Typography variant="subtitle1" style={{ color: 'gray'}}>
                                          Due Sep 8 at 11:59pm
                                       </Typography>}/>
                            <NotSubmittedPaper variant="outlined" className={classes.submission}> NOT SUBMITTED </NotSubmittedPaper>
                          </Box>
                          <ListItemSecondaryAction>
                            <AssignmentButton 
                              button onClick={handleClick}
                              edge="end"
                              variant="outlined"> 
                              View Assignment
                            </AssignmentButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                        <Divider/>
                      </div>
                    )}
                    <ListItem className={classes.eachAssignment}>
                          <ListItemIcon><InsertDriveFileOutlinedIcon fontSize="large"/></ListItemIcon>
                          <Box display="flex" flexDirection="column">
                            <ListItemText disableTypography edge="start" 
                            primary={<Typography variant="body1" style={{ color: 'black'}}>
                                       <Box fontWeight="fontWeightBold">
                                          Quadratic Equation Exercise 1
                                       </Box>
                                     </Typography>} 
                            secondary={<Typography variant="subtitle1" style={{ color: 'gray'}}>
                                          Due Sep 2 at 11:59pm
                                       </Typography>}/>
                            <SubmissionPaper variant="outlined" className={classes.submission}> SUBMITTED </SubmissionPaper>
                          </Box>
                          <ListItemSecondaryAction>
                            <AssignmentButton 
                              button onClick={handleClick}
                              edge="end"
                              variant="outlined"> 
                              View Assignment
                            </AssignmentButton>
                          </ListItemSecondaryAction>
                    </ListItem>
                    <Divider/>
                    <ListItem className={classes.eachAssignment}>
                          <ListItemIcon><InsertDriveFileOutlinedIcon fontSize="large"/></ListItemIcon>
                          <Box display="flex" flexDirection="column">
                            <ListItemText disableTypography edge="start" 
                            primary={<Typography variant="body1" style={{ color: 'black'}}>
                                       <Box fontWeight="fontWeightBold">
                                          HW - Algebra 2 Book
                                       </Box>
                                     </Typography>} 
                            secondary={<Typography variant="subtitle1" style={{ color: 'gray'}}>
                                          Due Aug 30 at 11:59pm
                                       </Typography>}/>
                            <Typography>
                              Please complete pages 417-418, 1-25 ODD numbers only. Be prepared to present a
                              solution to class on Wednesday.
                            </Typography>
                          </Box>
                          
                    </ListItem>
                    <Divider/>
                    <ListItem className={classes.eachAssignment}>
                          <ListItemIcon><InsertDriveFileOutlinedIcon fontSize="large"/></ListItemIcon>
                          <Box display="flex" flexDirection="column">
                            <ListItemText disableTypography edge="start" 
                            primary={<Typography variant="body1" style={{ color: 'black'}}>
                                       <Box fontWeight="fontWeightBold">
                                          Take Home Quiz #1
                                       </Box>
                                     </Typography>} 
                            secondary={<Typography variant="subtitle1" style={{ color: 'gray'}}>
                                          Due Aug 28 at 11:59pm
                                       </Typography>}/>
                            <SubmissionPaper variant="outlined" className={classes.submission}> SUBMITTED </SubmissionPaper>
                          </Box>
                          <ListItemSecondaryAction>
                            <AssignmentButton 
                              button onClick={handleClick}
                              edge="end"
                              variant="outlined"> 
                              View Assignment
                            </AssignmentButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                        <Divider/>
                  </List>
                </Card>
        </main>
      </div>
      );
    }
}

export default StudentAssignments;