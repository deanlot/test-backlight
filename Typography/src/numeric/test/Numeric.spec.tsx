import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../../jest.setup';
import { Numeric } from '../../';

describe('Numeric Typography', () => {
  it('should render a span', () => {
    const { container } = render(<Numeric>Test</Numeric>);
    expect(container.firstChild.nodeName).toBe('SPAN');
  });
});
