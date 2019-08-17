import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyles from 'theme/GlobalStyles';

function Root() {
  return (
    <div>
      <GlobalStyles />
      <p>This is Root View!</p>
      <Button>close / save</Button>
      <Button secondary>remove</Button>
    </div>
  );
}

export default Root;
