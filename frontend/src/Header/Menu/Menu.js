import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FolderIcon from '@material-ui/icons/Folder';
import NoteIcon from '@material-ui/icons/Note';
import SettingsIcon from '@material-ui/icons/Settings';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
            <ListItem button>
                <ListItemIcon><DashboardIcon/></ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
            </ListItem>

            <ListItem button>
                <ListItemIcon><FolderIcon/></ListItemIcon>
                <ListItemText>Courses</ListItemText>
            </ListItem>

            <ListItem button>
                <ListItemIcon><CalendarTodayIcon/></ListItemIcon>
                <ListItemText>Schedule</ListItemText>
            </ListItem>

            <ListItem button>
                <ListItemIcon><NoteIcon/></ListItemIcon>
                <ListItemText>Grades</ListItemText>
            </ListItem>

        </List>
        <Divider />
        <List>
            <ListItem button>
                <ListItemIcon><SettingsIcon/></ListItemIcon>
                <ListItemText>Settings</ListItemText>
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

      </main>
    </div>
  );
}