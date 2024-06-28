import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../pages/App';

test('renders Secure Password Generator title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Secure Password Generator/i);
  expect(titleElement).toBeInTheDocument();
});

test('toggles switches and generates password', () => {
  render(<App />);

  const generateButton = screen.getByText(/Generate Password/i);
  const passwordInput = screen.getByPlaceholderText(/Generated Password/i) as HTMLInputElement;

  // Ensure password input is initially empty
  expect(passwordInput).toHaveValue('');

  // Click generate button
  fireEvent.click(generateButton);

  // Ensure password input is not empty after generation
  expect(passwordInput.value).not.toBe('');

  // Toggle switches
  const uppercaseSwitch = screen.getByLabelText(/Include Uppercase/i);
  const lowercaseSwitch = screen.getByLabelText(/Include Lowercase/i);
  const numbersSwitch = screen.getByLabelText(/Include Numbers/i);
  const symbolsSwitch = screen.getByLabelText(/Include Symbols/i);

  fireEvent.click(uppercaseSwitch);
  fireEvent.click(lowercaseSwitch);
  fireEvent.click(numbersSwitch);
  fireEvent.click(symbolsSwitch);

  // Click generate button again
  fireEvent.click(generateButton);

  // Ensure password input is not empty after toggling switches and generating password
  expect(passwordInput.value).not.toBe('');
});

test('copies password to clipboard', () => {
  render(<App />);

  const generateButton = screen.getByText(/Generate Password/i);
  const copyButton = screen.getByText(/Copy Password/i);
  const passwordInput = screen.getByPlaceholderText(/Generated Password/i) as HTMLInputElement;

  // Mock clipboard API
  const writeText = jest.fn();
  // @ts-ignore
  global.navigator.clipboard = { writeText };

  // Click generate button
  fireEvent.click(generateButton);

  // Click copy button
  fireEvent.click(copyButton);

  // Ensure clipboard writeText method was called with the generated password
  expect(writeText).toHaveBeenCalledWith(passwordInput.value);
});