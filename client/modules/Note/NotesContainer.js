import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNoteRequest, editNote, updateNoteRequest, moveWithinLane } from '../Note/NoteActions';
import { moveBetweenLanes } from '../Lane/LaneActions';

const mapDispatchToProps = {
  deleteNote: deleteNoteRequest,
  updateNote: updateNoteRequest,
  editNote,
  moveWithinLane,
  moveBetweenLanes,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
