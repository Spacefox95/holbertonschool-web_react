import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the heading with text "School dashboard"', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the login and copyright text', () => {
    render(<App />);
    const loginText = screen.getByText(/login to access the full dashboard/i);
    const copyrightText = screen.getByText(
      /copyright.*- holberton school/i
    );

    expect(loginText).toBeInTheDocument();
    expect(copyrightText).toBeInTheDocument();
  });

  test('renders an image with alt text "holberton logo"', () => {
    render(<App />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });
});
