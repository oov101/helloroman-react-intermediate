import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Heading from 'components/atoms/Heading/Heading';

describe('Heading Component', () => {
  it('renders children text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Heading>Hello Roman</Heading>
      </ThemeProvider>,
    );

    getByText('Hello Roman');
  });
});
