import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../../jest.setup';
import { Label } from '../../';

describe('Label Typography', () => {
  test('it should render a span', () => {
    const { container } = render(<Label>Test</Label>);
    expect(container.firstChild.nodeName).toBe('SPAN');
  });

  // FIXME: This doesn't actually test that it's uppercase, only that the variant named uppercase is applied.
  // FIXME: It would be great if we could figure out how to get access to the styles -OR- see them applied and verify "Test" becomes "TEST".
  test('it should render the label uppercase', () => {
    render(<Label uppercase>Test</Label>);
    expect(screen.getByText('Test').className).toMatch(/uppercase\-true/);
  });

  // FIXME: This doesn't actually test that it's bold, only that the variant named bold is applied.
  // FIXME: It would be great if we could figure out how to get access to the styles.
  test('it should render the label bold', () => {
    render(<Label bold>Test</Label>);
    expect(screen.getByText('Test').className).toMatch(/bold\-true/);
  });
});
