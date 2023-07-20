import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import QuoteComponent from '../component/fetchquotes';

test('should display a loading message', () => {
  render(<QuoteComponent />);
  const loadingMessage = screen.getByText('Loading...');
  expect(loadingMessage).toBeInTheDocument();
});
