import { connect } from 'react-redux';
import Lane from './Lane';
import { deleteLaneRequest, createLaneRequest, updateLaneRequest, editLane } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId]).filter(n => n),
});

const mapDispatchToProps = {
  deleteLane: deleteLaneRequest,
  addNote: createNoteRequest,
  createLane: createLaneRequest,
  editLane,
  updateLane: updateLaneRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
