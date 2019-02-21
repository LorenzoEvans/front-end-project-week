import React from 'react'
import Note from './Note'
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

class NoteContainer extends React.Component {

 componentDidMount(){
  this.props.fetchNotes()
 }
 render(){
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