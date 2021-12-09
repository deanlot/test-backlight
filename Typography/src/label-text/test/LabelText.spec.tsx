import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../../jest.setup';
import { LabelText } from '../../';

describe('Label Text', () => {
  it('should render a span', () => {
    const { container } = render(<LabelText>Test</LabelText>);
    expect(container.firstChild.nodeName).toBe('SPAN');
  });

  // FIXME: This doesn't actually test that it's uppercase, only that the variant named uppercase is applied.
  // FIXME: It would be great if we could figure out how to get access to the styles -OR- see them applied and verify "Test" becomes "TEST".
  it('should render the label uppercase', () => {
    render(<LabelText uppercase>Test</LabelText>);
    expect(screen.getByText('Test').className).toMatch(/uppercase\-true/);
  });

  // FIXME: This doesn't actually test that it's bold, only that the variant named bold is applied.
  // FIXME: It would be great if we could figure out how to get access to the styles.
  it('should render the label bold', () => {
    render(<LabelText bold>Test</LabelText>);
    expect(screen.getByText('Test').className).toMatch(/bold\-true/);
  });
});
