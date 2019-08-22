import React from 'react';
import Button from 'components/atoms/Button/Button';
import MainTemplate from 'templates/MainTemplate';

const Root = () => (
  <MainTemplate>
    <>
      <p>This is Root View!</p>
      <Button>close / save</Button>
      <Button secondary>remove</Button>
    </>
  </MainTemplate>
);

export default Root;
