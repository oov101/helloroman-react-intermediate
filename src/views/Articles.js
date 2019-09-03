import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from 'actions';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

class Articles extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <GridTemplate>
        {articles.map(({ title, content, articleUrl, _id: id }) => (
          <Card
            id={id}
            cardType="articles"
            title={title}
            content={content}
            articleUrl={articleUrl}
            key={id}
          />
        ))}
      </GridTemplate>
    );
  }
}

Articles.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchItems('articles')),
});

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
