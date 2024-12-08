import PasswordChecker from '@/components/password-checker/PasswordChecker';
import { render } from '@testing-library/react';

describe('PasswordChecker component test suite', () => {
  test('should PasswordChecker component render properly', () => {
    const { queryByText } = render(<PasswordChecker />);

    expect(queryByText('Weak password')).not.toBeInTheDocument();
  });
});
