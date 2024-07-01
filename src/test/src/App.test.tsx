import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../pages/App';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';

jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  message: {
    info: jest.fn(),
    error: jest.fn(),
    success: jest.fn(),
  },
}));

const setup = () => {
  render(<App />);
  const generateButton = screen.getByText(/Generate Password/i) as HTMLInputElement;
  const lengthInput = screen.getByPlaceholderText('Password Length (12-32)') as HTMLInputElement;
  const passwordInput = screen.getByPlaceholderText(/Generated Password/i) as HTMLInputElement;
  const userWordInput = screen.getByPlaceholderText('Optional word') as HTMLInputElement;
  const userWordOutput = screen.getByPlaceholderText('Generated Password');
  const copyButton = screen.getByText(/Copy Password/i) as HTMLInputElement;
  return { generateButton, lengthInput, passwordInput, userWordInput, userWordOutput, copyButton };
};


test('renders Secure Password Generator title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Secure Password Generator/i);
  expect(titleElement).toBeInTheDocument();
});

test('toggles switches and generates password', () => {
  const { generateButton, passwordInput } = setup();

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
  const { generateButton, passwordInput, copyButton } = setup();

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

test('adjusts length if it is less than 12 or greater than 32', () => {
  const { generateButton, lengthInput } = setup();

  // Set length to an invalid value (less than 12)
  fireEvent.change(lengthInput, { target: { value: '10' } });
  fireEvent.click(generateButton);

  expect(message.info).toHaveBeenCalledWith('Invalid length value. Generating password with length between 12 and 32 characters.');
  expect(Number(lengthInput.getAttribute('value'))).toBeGreaterThanOrEqual(12);
  expect(Number(lengthInput.getAttribute('value'))).toBeLessThanOrEqual(32);

  // Set length to an invalid value (greater than 32)
  fireEvent.change(lengthInput, { target: { value: '33' } });
  fireEvent.click(generateButton);

  expect(message.info).toHaveBeenCalledWith('Invalid length value. Generating password with length between 12 and 32 characters.');
  expect(Number(lengthInput.getAttribute('value'))).toBeGreaterThanOrEqual(12);
  expect(Number(lengthInput.getAttribute('value'))).toBeLessThanOrEqual(32);
});

test('trims user word if its length is greater than or equal to the adjusted length', () => {
  const { generateButton, lengthInput, userWordInput, userWordOutput } = setup();

  // Set a valid length
  fireEvent.change(lengthInput, { target: { value: '16' } });

  // Set user word to a length greater than the length
  fireEvent.change(userWordInput, { target: { value: 'longuserwordexceeding' } });
  fireEvent.click(generateButton);

  expect(message.info).toHaveBeenCalledWith('For security reasons, we will remove 5 characters from your word to insert new characters and thus make it more secure.');
  expect(userWordOutput.getAttribute('value')).toHaveLength(16);

  // Set user word to a length equal to the length
  fireEvent.change(userWordInput, { target: { value: 'sixteenletters' } });
  fireEvent.click(generateButton);

  expect(message.info).toHaveBeenCalledWith('For security reasons, we will remove 5 characters from your word to insert new characters and thus make it more secure.');
  expect(userWordOutput.getAttribute('value')).toHaveLength(16);
});

test('adjusts length if it is less than 12 or greater than 32', () => {
  const { generateButton, lengthInput } = setup();

  // Set length to an invalid value (less than 12)
  fireEvent.change(lengthInput, { target: { value: '10' } });
  fireEvent.click(generateButton);
  
  expect(message.info).toHaveBeenCalledWith('Invalid length value. Generating password with length between 12 and 32 characters.');
  expect(Number(lengthInput.value)).toBeGreaterThanOrEqual(12);
  expect(Number(lengthInput.value)).toBeLessThanOrEqual(32);

  // Set length to an invalid value (greater than 32)
  fireEvent.change(lengthInput, { target: { value: '33' } });
  fireEvent.click(generateButton);

  expect(message.info).toHaveBeenCalledWith('Invalid length value. Generating password with length between 12 and 32 characters.');
  expect(Number(lengthInput.value)).toBeGreaterThanOrEqual(12);
  expect(Number(lengthInput.value)).toBeLessThanOrEqual(32);
});

test('trims user word if its length is greater than or equal to the adjusted length', () => {
  const { generateButton, lengthInput, userWordInput } = setup();

  // Set a valid length
  fireEvent.change(lengthInput, { target: { value: '16' } });

  // Set user word to a length greater than the length
  fireEvent.change(userWordInput, { target: { value: 'longuserwordexceeding' } });
  fireEvent.click(generateButton);

  expect(message.info).toHaveBeenCalledWith('For security reasons, we will remove 5 characters from your word to insert new characters and thus make it more secure.');
  expect(userWordInput.value.length).toBe(21);

  // Set user word to a length equal to the length
  fireEvent.change(userWordInput, { target: { value: 'sixteenletters' } });
  fireEvent.click(generateButton);

  expect(message.info).toHaveBeenCalledWith('For security reasons, we will remove 5 characters from your word to insert new characters and thus make it more secure.');
  expect(userWordInput.value.length).toBe(14);
});

test('does not allow three consecutive identical characters', () => {
  const { generateButton, passwordInput } = setup();

  fireEvent.click(generateButton);

  const passwordValue = passwordInput.value;
  const hasThreeConsecutiveChars = /(.)\1\1/.test(passwordValue);
  expect(hasThreeConsecutiveChars).toBe(false);
});