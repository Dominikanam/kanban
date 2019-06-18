/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Note.css';

class Note extends Component {
  render() {
    return (
      null
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Note.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
