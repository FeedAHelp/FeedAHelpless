import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminLogin from './AdminLogin';

describe('AdminLogin', () => {
  it('renders the component without errors', () => {
    render(<AdminLogin />);
  });

  it('displays the heading "Admin Login"', () => {
    render(<AdminLogin />);
    const headingElement = screen.getByText('Admin Login');
    expect(headingElement).toBeInTheDocument();
  });

  it('displays the "Username" and "Password" input fields', () => {
    render(<AdminLogin />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('displays the "Submit" button', () => {
    render(<AdminLogin />);
    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();
  });

});
