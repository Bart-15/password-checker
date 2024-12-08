import StrengthIndicator from '@/components/password-checker/StrengthIndicator';
import { cleanup, render } from '@testing-library/react';

describe('StrengthIndicator component test suite', () => {
  afterEach(() => {
    cleanup();
  });

  test('should StrengthIndicator component render properly', () => {
    const { queryByText } = render(
      <StrengthIndicator strength="weak" password="" />,
    );

    expect(queryByText('Weak password')).not.toBeInTheDocument();
  });

  test('should StrengthIndicator component have text Weak Password if the password is not empty string', () => {
    const { getByText } = render(
      <StrengthIndicator strength="weak" password="hi" />,
    );

    expect(getByText('weak password')).toBeInTheDocument();
  });
});
