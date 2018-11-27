import React from 'react'
import NoteList from '../NoteList/NoteList'
export class NoteListContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.notes.map((note, index) => <NoteList
        title={note.title}
        textBody={note.textBody}
         />)}
      </div>
    )
  }
}

export default NoteListContainer
