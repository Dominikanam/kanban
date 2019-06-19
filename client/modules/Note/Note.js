import React from 'react';
import PropTypes from 'prop-types';
import ItemTypes from '../Kanban/itemTypes';
import { DragSource, DropTarget } from 'react-dnd';
import { compose } from 'redux';
import styles from './Note.css';

const noteSource = {
  beginDrag(props) {
    return {
      id: props.id,
      laneId: props.laneId,
    };
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  },
};

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();

    if (targetProps.id !== sourceProps.id) {
      if (targetProps.laneId !== sourceProps.laneId) {
        targetProps.moveBetweenLanes(targetProps.laneId, sourceProps.id, sourceProps.laneId, targetProps.id);
      } else {
        targetProps.moveWithinLane(targetProps.laneId, targetProps.id, sourceProps.id);
      }
    }
  },
};

class Note extends React.Component {
  render() {
    const {
      connectDragSource,
      connectDropTarget,
      isDragging,
      editing,
      children,
    } = this.props;

    const dragSource = editing ? a => a : connectDragSource;

    return dragSource(connectDropTarget(
      <li
        className={styles.Note}
        style={{
          opacity: isDragging ? 0 : 1,
        }}
      >
        {children}
      </li>
    ));
  }
}

Note.propTypes = {
  children: PropTypes.any,
  isDragging: PropTypes.bool,
  editing: PropTypes.bool,
  connectDragSource: PropTypes.func,
  connectDropTarget: PropTypes.func,
  moveWithinLane: PropTypes.func,
  moveBetweenLanes: PropTypes.func,
};

export default compose(
  DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })),
  DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
    connectDropTarget: connect.dropTarget(),
  }))
)(Note);
