import RequirementList from '@/components/password-checker/RequirementList';
import { cleanup, render } from '@testing-library/react';

describe('RequirementList component test suite', () => {
  afterEach(() => {
    cleanup();
  });

  test('should RequirementList component render properly', () => {
    const { getByText } = render(<RequirementList password="" />);

    expect(getByText(/◉ At least 8 characters/i));
    expect(getByText(/◉ Contains numbers/i));
    expect(getByText(/◉ Contains special characters/i));
    expect(getByText(/◉ Contains uppercase & lowercase/i));
  });

  test('should text color change to green if password is greater than or equal to 8 characters', () => {
    const { getByText } = render(
      <RequirementList password="hellothisisbart" />,
    );

    const actual = getByText(/✓ At least 8 characters/i);

    expect(actual).toBeInTheDocument();
    expect(actual).toHaveClass('text-green-600');
  });

  test('should text color change to green if password met all the requirement', () => {
    const { getByText } = render(<RequirementList password="Hello!#1234567" />);

    const actual1 = getByText(/✓ At least 8 characters/i);
    const actual2 = getByText(/✓ Contains numbers/i);
    const actual3 = getByText(/✓ Contains special characters/i);
    const actual4 = getByText(/✓ Contains uppercase & lowercase/i);

    expect(actual1).toBeInTheDocument();
    expect(actual1).toHaveClass('text-green-600');
    expect(actual2).toBeInTheDocument();
    expect(actual2).toHaveClass('text-green-600');
    expect(actual3).toBeInTheDocument();
    expect(actual3).toHaveClass('text-green-600');
    expect(actual4).toBeInTheDocument();
    expect(actual4).toHaveClass('text-green-600');
  });
});
