import React from 'react';
import { render } from '@testing-library/react';
import '../../../../jest.setup';
import { HeaderText } from '../../';

describe('Header Text', () => {
  it('should render an h1 for variant large', () => {
    const { container } = render(<HeaderText variant="large">Test</HeaderText>);
    expect(container.firstChild.nodeName).toBe('H1');
  });

  it('should render an h2 for variant medium', () => {
    const { container } = render(<HeaderText variant="medium">Test</HeaderText>);
    expect(container.firstChild.nodeName).toBe('H2');
  });

  it('should render an h3 for variant small', () => {
    const { container } = render(<HeaderText variant="small">Test</HeaderText>);
    expect(container.firstChild.nodeName).toBe('H3');
  });
});
