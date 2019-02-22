import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import EditView from './components/NoteAppViews/EditView'
import CreateView from './components/NoteAppViews/CreateView'
import './App.css';
import SingleNote from './components/NoteAppViews/SingleNote'
import Sidebar from './components/Sidebar/Sidebar';
import axios from 'axios'
class App extends Component {
 state = {
  notes: []
 }
 componentDidMount(){
  axios
   .get('http://localhost:3945/api/notes')
   .then((response) => {
    this.setState({notes: response.data})
   })
   .catch((error) => {
    console.log(error)
   })
 }
  render() {
    return (
     <div className="App">
      <Switch>
       <Sidebar notes={this.state.notes} />
       {/* <Route exact path="/" component={NoteContainer}/> */}
       <Route exact path='/note/:id' component={SingleNote}/>
       <Route exact path="/edit/:id" component={EditView}/>
       <Route exact path="/note/" component={CreateView} />
      </Switch>
     </div>
    );
  }
}



export default App
