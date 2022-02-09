import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Task List/i);
  expect(linkElement).toBeInTheDocument();
});

test('render component', () => {
  render(<App />);
})
