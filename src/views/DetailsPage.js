/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import withContext from 'hoc/withContext';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { connect } from 'react-redux';
import axios from 'axios';

class DetailsPage extends Component {
  state = {
    activeItem: {
      title: '',
      content: '',
      articleUrl: '',
      twitterName: '',
    },
  };

  componentDidMount() {
    if (this.props.activeItem) {
      const [activeItem] = this.props.activeItem;
      this.setState({ activeItem });
    } else {
      const { id } = this.props.match.params;

      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <DetailsTemplate
        title={activeItem.title}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twitterName={activeItem.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  activeItem: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      articleUrl: PropTypes.string,
      twitterName: PropTypes.string,
    }),
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

DetailsPage.defaultProps = {
  activeItem: null,
};

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(item => item._id === ownProps.match.params.id),
    };
  }

  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
