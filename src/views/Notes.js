import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from 'actions';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

class Notes extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { notes } = this.props;

    return (
      <GridTemplate>
        {notes.map(({ title, content, _id: id }) => (
          <Card id={id} cardType="notes" title={title} content={content} key={id} />
        ))}
      </GridTemplate>
    );
  }
}

Notes.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchItems('notes')),
});

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);
