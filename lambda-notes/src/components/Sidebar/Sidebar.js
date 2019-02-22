import React from 'react'
/* Material UI Components*/ 
import { Link } from 'react-router-dom'
import {List, ListItem, ListItemIcon, ListItemText, ListSubheader} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Divider, Typography, AppBar, Toolbar, Badge } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
/* Icons*/
import AssignmentIcon from '@material-ui/icons/Assignment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import { Add } from '@material-ui/icons/'
import NotificationsIcon from '@material-ui/icons/Notifications'
/* Misc */ 
import classNames from 'classnames';
import { styles } from '../NoteContainer/styled-components/NoteContainerStyledComponents-Deprecated'
import { H1 } from './styled-components/SidebarStyledComponents'
import Note from '../NoteContainer/Note'
import { NoteContainerStyle } from '../NoteContainer/styled-components/NoteContainerStyledComponents-Deprecated'

class Sidebar extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   open: true
  }
 }

 onOpen = () => {
  this.setState({open: true})
 }
 
 onClose = () => {
  this.setState({open: false})
 }

 render () {
  const { classes } = this.props 
  return (
  <div>
  <AppBar
     position='absolute'
     className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
     >
      <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
       <IconButton
       color="inherit"
       aria-label="Open Drawer"
       onClick={this.onOpen}
       className={
        classNames(
         classes.menuButton,
         this.state.open && classes.menuButtonHidden,
        )}
       >
        <MenuIcon />
       </IconButton>
       <Typography
       component="h1"
       variant="h6"
       color="inherit"
       noWrap
       className={classes.title}
       >
       </Typography>
       <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
         <NotificationsIcon />
        </Badge>
       </IconButton>
      </Toolbar>
     </AppBar>
   <Drawer
     variant="temporary"
     classes={{paper: classNames(classes.drawerPaper, this.state.open && classes.onClose)}}
     open={this.state.open}
     >
      <div className={classes.toolBarIcon}>
       <IconButton onClick={this.onClose}>
        <ChevronLeftIcon />
       <H1>Duly Noted</H1>
       </IconButton>
      </div>
      <Divider />
      <List>
   <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/">
      <ListItemText primary="View Notes" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Add/>
      </ListItemIcon>
      <Link to="/edit/:id">

      <ListItemText primary="Add Note" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="/create">
      <ListItemText primary="Note Lists" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="/note/:id">
      <ListItemText primary="Collaborate" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Share" />
    </ListItem>
    <Divider />
    <ListSubheader inset>Settings</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Preferences" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Account" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
      </List>
     </Drawer>
     <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Typography component="div" className={classes.chartContainer}>
    <NoteContainerStyle className="note_container">
     {this.props.notes.map((note, index) => 
     <Note 
      key={index}
      title={note.title}
      textBody={note.textBody}
      id={note.id}
     />
     )}
    </NoteContainerStyle>
      </Typography>
     </main>
  </div>
  )}
}

export default withStyles(styles)(Sidebar)