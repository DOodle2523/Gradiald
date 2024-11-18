import { render } from '@testing-library/react';
import GradientBackground from './GradientBackground';

test('renders with default props', () => {
  const { container } = render(<GradientBackground />);
  expect(container.firstChild).toHaveStyle('background: linear-gradient(to right, #ff7eb3, #ff758c)');
});
