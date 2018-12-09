import axios from 'axios'

export const FETCHING_NOTES = 'FETCHING_NOTES'
export const NOTES_FETCHED = 'NOTES_FETCHED'
export const FETCHING_NOTE = 'FETCHING_NOTE'
export const NOTE_FETCHED = 'NOTE_FETCHED'
export const ADDING = 'ADDING'
export const ADDED = 'ADDED'
export const EDITING = 'EDITING'
export const EDITED = 'EDITED'
export const DELETING = 'DELETING'
export const DELETED = 'DELETED'
export const ERROR = 'ERROR'


export const fetchNotes = () => {
 return dispatch => {
  dispatch({type: FETCHING_NOTES})
 axios
  .get('https://fe-notes.herokuapp.com/note/get/all')
  .then(response => {
   dispatch({type: NOTES_FETCHED, payload: response.data})
  })
  .catch(() => {
   dispatch({type: ERROR, payload: 'Error Fetching Notes'})
  })}
}

export const addNote = note => {
 return dispatch => {
  dispatch({type: ADDING })
  axios
   .post('https://fe-notes.herokuapp.com/note/create', note)
   .then(() => {
   dispatch({type: ADDED})
   })
 .catch(() => {
  dispatch({type: ERROR, payload: 'Error Adding Note.'})
 })}
}

export const deleteNote = id => {
 return dispatch => {
  dispatch({type: DELETING})
  axios
  .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
  .then(() => {
   dispatch({type: DELETED})
  })
  .catch(() => {
   dispatch({type: ERROR, payload: 'Error Deleting Note'})
  })
 }

}

export const editNote = (id, note) => {
 return dispatch => {
  dispatch({type: EDITING})
  axios
  .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
  .then((response) => {
   dispatch({type: EDITED, payload: response.data})
  })
  .catch(() => {
   dispatch({type: ERROR, payload: 'Error Editing Note'})
  })
 }
}

export const fetchNote = (id) => {
 return dispatch => {
  dispatch({type: FETCHING_NOTE})
  axios
  .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
  .then(response => {
    dispatch({type: NOTE_FETCHED, payload: response.data})
  })
  .catch(() => {
   dispatch({type: ERROR, payload: 'Error Getting Note'})
  })
 }
}