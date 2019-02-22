import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Divider, Typography } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { styles } from './styled-components/SidebarStyledComponents'
import Note from '../NoteContainer/Note'
import { NoteContainerStyle } from '../NoteContainer/styled-components/NoteContainerStyledComponents'
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
   <Drawer
     variant="temporary"
     classes={{paper: classNames(classes.drawerPaper, this.state.open && classes.onClose)}}
     open={this.state.open}
     >
      <div className={classes.toolBarIcon}>
       <IconButton onClick={this.onClose}>
        <ChevronLeftIcon />
       </IconButton>
      </div>
      <Divider />
      <List>

   <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/">
      <ListItemText primary="Notes" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link to="/edit/:id">

      <ListItemText primary="Edit Note" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="/create">
      <ListItemText primary="Add Note" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to="/note/:id">
      <ListItemText primary="View Note" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Lists" />
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
      id={note._id}
     />
     )}
    </NoteContainerStyle>
      </Typography>
     </main>
  </div>
  )}
}

export default withStyles(styles)(Sidebar)