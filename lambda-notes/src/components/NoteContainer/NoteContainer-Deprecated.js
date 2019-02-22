// import React from 'react'
// import Note from './Note'
// import { H1 } from './styled-components/NoteContainerStyledComponents'
// import { connect } from 'react-redux'
// import { fetchNotes } from '../../actions/index'
// import { withRouter } from 'react-router'
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import Badge from '@material-ui/core/Badge';
// import MenuIcon from '@material-ui/icons/Menu';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import Sidebar from '../Sidebar/Sidebar'
// import { styles } from './styled-components/NoteContainerStyledComponents'
// import { NoteContainerStyle } from './styled-components/NoteContainerStyledComponents'
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import List from '@material-ui/core/List';
// import Drawer from '@material-ui/core/Drawer';
// import IconButton from '@material-ui/core/IconButton';

// class NoteContainer extends React.Component {
// state = {
//  open: false
// }

// onOpen = () => {
//  this.setState({open: true})
// }

// onClose = () => {
//  this.setState({open: false})
// }
//  componentDidMount(){
//   this.props.fetchNotes()
//  }
//  render(){
//   const { classes } = this.props
//   return (
//     <div className={classes.root}>
//      {/* <CssBaseline/>
//      <AppBar
//      position='absolute'
//      className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
//      >
//       <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
//        <IconButton
//        color="inherit"
//        aria-label="Open Drawer"
//        onClick={this.onOpen}
//        className={
//         classNames(
//          classes.menuButton,
//          this.state.open && classes.menuButtonHidden,
//         )
//        }
//        >
//         <MenuIcon />
//        </IconButton>
//        <Typography
//        component="h1"
//        variant="h6"
//        color="inherit"
//        noWrap
//        className={classes.title}
//        >
//         <H1>Duly Noted</H1>
//        </Typography>
//        <IconButton color="inherit">
//         <Badge badgeContent={4} color="secondary">
//          <NotificationsIcon />
//         </Badge>
//        </IconButton>
//       </Toolbar>
//      </AppBar>
//      <Drawer
//      variant="temporary"
//      classes={{paper: classNames(classes.drawerPaper, this.state.open && classes.onClose)}}
//      open={this.state.open}
//      >
//       <div className={classes.toolBarIcon}>
//        <IconButton onClick={this.onClose}>
//         <ChevronLeftIcon />
//        </IconButton>
//       </div>
//       <Divider />
//       <List><Sidebar/></List>
//      </Drawer>
//      <main className={classes.content}>
//       <div className={classes.appBarSpacer} />
//       <Typography component="div" className={classes.chartContainer}>
//     <NoteContainerStyle className="note_container">
//      {this.props.notes.map((note, index) => 
//      <Note 
//       key={index}
//       title={note.title}
//       textBody={note.textBody}
//       id={note._id}
//      />
//      )}
//     </NoteContainerStyle>
//       </Typography>
//      </main> */}
//     </div>
//   )
//  }
// }

// const mapStateToProps = state => {
//  const { notes } = state 
//  return {
//   notes: notes
//  }
// }


// export default withRouter(connect(mapStateToProps, { fetchNotes })(withStyles(styles)(NoteContainer)))