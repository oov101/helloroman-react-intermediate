import React from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes/index';

const DetailsPageView = ({ match }) => (
  <DetailsTemplate>
    <>
      <p>{`is note: ${match.path === routes.note}`}</p>
      <p>{`is twitter: ${match.path === routes.twitter}`}</p>
      <p>{`is article: ${match.path === routes.article}`}</p>
    </>
  </DetailsTemplate>
);

DetailsPageView.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string }).isRequired,
};

export default DetailsPageView;
