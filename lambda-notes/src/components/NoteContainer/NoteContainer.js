import React from 'react'
import Note from './Note'
import { H1 } from './styled-components/NoteContainerStyledComponents'
import { connect } from 'react-redux'
import { fetchNotes } from '../../actions/index'
import { withRouter } from 'react-router'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
// import SimpleLineChart from './SimpleLineChart';
// import SimpleTable from './SimpleTable';
import Sidebar from '../Sidebar/Sidebar'

// import { NoteContainerStyle } from './styled-components/NoteContainerStyledComponents'

const drawerWidth = 300 ;

const styles = theme => ({
 root: {
  display: 'flex',
 },
 toolbar: {
  paddingRight: 24,
 },
 toolBarIcon: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 8px',
  ...theme.mixins.toolbar,
 },
 appBar: {
  zIndex: theme.zIndex.Drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.leavingScreen,
  }),
 },
 appBarShift: {
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  transition: theme.transitions.create(['width', 'margin'], {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.enteringScreen,
  }),
 },
 menuButton: {
  marginLeft: 12,
  marginRight: 36,
 },
 menuButtonHidden: {
  display: 'none',
 },
 title: {
  flexGrow: 1
 },
 drawerPaper: {
  position: 'relative',
  whiteSpace: 'nowrap',
  background: "grey",
  width: drawerWidth,
  transition: theme.transitions.create('width', {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.enteringScreen,
  }),
 },
 drawerPaperClose: {
  overflowX: 'hidden',
  transition: theme.transitions.create('width', {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.leavingScreen
  }),
  width: theme.spacing.unit * 7,
  [theme.breakpoints.up('sm')] :{
   width: theme.spacing.unit * 9
  },
 },
 appBarSpacer: theme.mixins.toolbar,
 content: {
  flexGrow: 1,
  padding: theme.spacing.unit * 3,
  height: '100vh',
  overflow: 'auto',
 },
 chartContainer: {
  marginLeft: -22
 },
 tableContainer: {
  height: 320
 },
 h5: {
  marginBottom: theme.spacing.unit * 2
 }
})

class NoteContainer extends React.Component {
state = {
 open: false
}

onOpen = () => {
 this.setState({open: true})
}

onClose = () => {
 this.setState({open: false})
}
 componentDidMount(){
  this.props.fetchNotes()
 }
 render(){
  const { classes } = this.props
  return (
    // <NoteContainerStyle className="note_container">
    //  {this.props.notes.map((note, index) => 
    //  <Note 
    //   key={index}
    //   title={note.title}
    //   textBody={note.textBody}
    //   id={note._id}
    //  />
    //  )}
    // </NoteContainerStyle>
    <div className={classes.root}>
     <CssBaseline/>
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
        )
       }
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
        <H1>Duly Noted</H1>
       </Typography>
       <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
         <NotificationsIcon />
        </Badge>
       </IconButton>
      </Toolbar>
     </AppBar>
     <Sidebar />
     <Drawer
     variant="permanent"
     classes={{paper: classNames(classes.drawerPaper, !this.state.open && classes.onClose)}}
     open={this.state.open}
     >
      <div className={classes.toolBarIcon}>
       <IconButton onClick={this.onClose}>
        <ChevronLeftIcon />
       </IconButton>
      </div>
      <Divider />
      {/* <List><Sidebar /></List> */}
     </Drawer>
     <main>
      <div />
      <Typography>

      </Typography>
      <Typography>

      </Typography>
      <Typography>

      </Typography>
     </main>
    </div>
  )
 }
}

const mapStateToProps = state => {
 const { notes } = state 
 return {
  notes: notes
 }
}


export default withRouter(connect(mapStateToProps, { fetchNotes })(withStyles(styles)(NoteContainer)))