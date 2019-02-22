import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import EditView from './components/NoteAppViews/EditView'
import CreateView from './components/NoteAppViews/CreateView'
import './App.css';
import NoteContainer from './components/NoteContainer/NoteContainer'
import SingleNote from './components/NoteAppViews/SingleNote'

class App extends Component {
  render() {
    return (
     <div className="App">
     <NoteContainer />
      {/* <Switch>
       <Route exact path="/" component={NoteContainer}/>
       <Route exact path='/note/:id' component={SingleNote}/>
       <Route exact path="/edit/:id" component={EditView}/>
       <Route exact path="/create/" component={CreateView} />
      </Switch> */}
     </div>
    );
  }
}



export default App
