import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../../jest.setup';
import { Action } from '../../';

describe('Action Typography', () => {
  it('should render a span', () => {
    const { container } = render(<Action>Test</Action>);
    expect(container.firstChild.nodeName).toBe('SPAN');
  });

  // FIXME: This doesn't actually test that it's uppercase, only that the variant named uppercase is applied.
  // FIXME: It would be great if we could figure out how to get access to the styles -OR- see them applied and verify "Test" becomes "TEST".
  it('should render the action uppercase', () => {
    render(<Action uppercase>Test</Action>);
    expect(screen.getByText('Test').className).toMatch(/uppercase\-true/);
  });
});
