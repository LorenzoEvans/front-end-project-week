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
    <div>
     <CssBaseline/>
     <AppBar>
      <Toolbar disableGutters={!this.state.open}>
       <IconButton>
        <MenuIcon />
       </IconButton>
       <Typography>
        <H1>Duly Noted</H1>
       </Typography>
       <IconButton>
        <Badge>

        </Badge>
       </IconButton>
      </Toolbar>
     </AppBar>
     <Drawer>
      <div>
       <IconButton>
        <ChevronLeftIcon />
       </IconButton>
      </div>
      <Divider />
      <List></List>
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


export default withRouter(connect(mapStateToProps, { fetchNotes })(NoteContainer))