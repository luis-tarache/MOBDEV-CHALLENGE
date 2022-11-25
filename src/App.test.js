import { render, screen } from '@testing-library/react';
import Dog from './components/Dog';

test('renders learn react link', () => {
  render(<Dog />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
