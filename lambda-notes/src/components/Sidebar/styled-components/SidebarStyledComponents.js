import styled from 'styled-components'
import { drawerWidth } from '../../NoteContainer/styled-components/NoteContainerStyledComponents-Deprecated'
export const H1 = styled.h1 `
font-size: 1.6rem ;
color: Black;
text-shadow: 3px 4px 5px #F5F5F5
font-family: 'Permanent Marker' ;
margin-bottom: 5px ;
`

export const Div = styled.div `
 margin-bottom: 3px ;
 margin-left: 3px ;
`

export const ContainerStyle = styled.div `
max-width: 180px  ;
width: 100% ;
background: gray ;
display: flex;
flex-direction: column ;
`

export const styles = theme => ({
 drawerPaper: {
  position: 'relative',
  whiteSpace: 'nowrap',
  background: "grey",
  width: drawerWidth,
  transition: theme.transitions.create('width', {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.enteringScreen,
  })
 }
})
