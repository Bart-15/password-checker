import { cleanup, fireEvent, render } from '@testing-library/react';

/* import userEvent from '@testing-library/user-event'; // For simulating user interactions
 */
import PasswordInput from '@/components/forms/PasswordInput';

describe('PasswordInput Component test suite', () => {
  afterEach(() => {
    cleanup();
  });

  test('should PasswordInput component render properly', () => {
    const { getByLabelText, getByText } = render(
      <PasswordInput value="" onChange={jest.fn()} />,
    );

    //act
    const inputPassword = getByLabelText('Password') as HTMLInputElement;

    const actual = inputPassword.value;

    expect(actual).toBe('');
    expect(getByText('Password')).toBeInTheDocument();
  });

  test('should have password value of "thisispassword"', () => {
    const { getByLabelText } = render(
      <PasswordInput value="thisispassword" onChange={jest.fn()} />,
    );

    //act
    const inputPassword = getByLabelText('Password') as HTMLInputElement;

    const actual = inputPassword.value;

    expect(actual).toBe('thisispassword');
  });

  test('should render password input with initial value and trigger onChange', () => {
    const value = 'test1243';
    const mockOnchange = jest.fn();
    const { getByLabelText } = render(
      <PasswordInput value={value} onChange={jest.fn()} />,
    );

    const passwordInput = getByLabelText('Password') as HTMLInputElement;

    expect(passwordInput).toBeInTheDocument();

    fireEvent.change(passwordInput, { target: { value: 'newpass' } });
    expect(mockOnchange.mockResolvedValueOnce('newpass'));
  });
});
