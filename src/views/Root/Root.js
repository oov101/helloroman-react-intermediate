import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyles from 'theme/GlobalStyles';
import { theme } from 'theme/mainTheme';

function Root() {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <>
          <p>This is Root View!</p>
          <Button>close / save</Button>
          <Button secondary>remove</Button>
        </>
      </ThemeProvider>
    </div>
  );
}

export default Root;
