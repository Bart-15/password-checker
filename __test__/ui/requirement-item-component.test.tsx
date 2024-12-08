import RequirementItem from '@/components/password-checker/RequirementItem';
import { cleanup, render } from '@testing-library/react';

describe('RequirementItem component test suite', () => {
  afterEach(() => {
    cleanup();
  });

  test('should RequirementItem component render properly', () => {
    const { getByText } = render(<RequirementItem label="Hello" met={false} />);

    const actual = getByText(/Hello/i);

    expect(actual).toBeInTheDocument();
  });

  test('should render with icon "✓" if met is true', () => {
    const { getByText } = render(<RequirementItem label="Hello" met={true} />);

    const actual = getByText(/✓ Hello/i);

    expect(actual).toBeInTheDocument();
  });
  test('should render with icon "◉" if met is false', () => {
    const { getByText } = render(<RequirementItem label="Hello" met={false} />);

    const actual = getByText(/◉ Hello/i);

    expect(actual).toBeInTheDocument();
  });
});
