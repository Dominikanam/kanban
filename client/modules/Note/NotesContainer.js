import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNoteRequest, updateNoteRequest, editNote } from '../Note/NoteActions';

const mapDispatchToProps = {
  deleteNote: deleteNoteRequest,
  updateNote: updateNoteRequest,
  editNote,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
