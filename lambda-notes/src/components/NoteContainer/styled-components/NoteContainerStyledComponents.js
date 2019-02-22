import styled from 'styled-components'

export const NoteContainerStyle = styled.div `
 display: flex ;
 flex-direction: row ;
 flex-wrap: wrap ;
 margin: 5% 5% 5% 5%;
 padding: 5%;
 width: 80% ;
 justify-content: space-between ;
`

export const H1 = styled.span `
color: black ;
font-size: 2rem;
font-family: 'Permanent Marker'
`

export const drawerWidth = 300

export const styles = theme => ({
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
  marginLeft: 280,
  width: '75%',
  flexGrow: 1,
 },
 tableContainer: {
  height: 320,
  width: 500,
  border: '1px solid black'
 },
 h5: {
  marginBottom: theme.spacing.unit * 2
 }
})