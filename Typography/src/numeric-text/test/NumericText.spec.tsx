import React from 'react';
import { render } from '@testing-library/react';
import '../../../../jest.setup';
import { NumericText } from '../../';

describe('Numeric Text', () => {
  it('should render a span', () => {
    const { container } = render(<NumericText>Test</NumericText>);
    expect(container.firstChild.nodeName).toBe('SPAN');
  });
});
