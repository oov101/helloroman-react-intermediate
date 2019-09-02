import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from 'actions';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

class Twitters extends Component {
  componentDidMount() {
    this.props.fetchTwitters();
  }

  render() {
    const { twitters } = this.props;

    return (
      <GridTemplate>
        {twitters.map(({ title, content, twitterName, _id: id }) => (
          <Card
            id={id}
            cardType="twitters"
            title={title}
            content={content}
            twitterName={twitterName}
            key={id}
          />
        ))}
      </GridTemplate>
    );
  }
}

Twitters.propTypes = {
  fetchTwitters: PropTypes.func.isRequired,
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapDispatchToProps = dispatch => ({
  fetchTwitters: () => dispatch(fetchItems('twitters')),
});

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Twitters);
