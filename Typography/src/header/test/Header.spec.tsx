import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../../jest.setup';
import { Header } from '../../';

describe('Header Typography', () => {
  it('should render an h1 for variant large', () => {
    const { container } = render(<Header variant="large">Test</Header>);
    expect(container.firstChild.nodeName).toBe('H1');
  });

  it('should render an h2 for variant medium', () => {
    const { container } = render(<Header variant="medium">Test</Header>);
    expect(container.firstChild.nodeName).toBe('H2');
  });

  it('should render an h3 for variant small', () => {
    const { container } = render(<Header variant="small">Test</Header>);
    expect(container.firstChild.nodeName).toBe('H3');
  });
});
