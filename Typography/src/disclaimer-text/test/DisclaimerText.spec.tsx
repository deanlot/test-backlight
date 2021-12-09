import React from 'react';
import { render } from '@testing-library/react';
import '../../../../jest.setup';
import { DisclaimerText } from '../../';

describe('Disclaimer Text', () => {
  it('should render a span', () => {
    const { container } = render(<DisclaimerText>Test</DisclaimerText>);
    expect(container.firstChild.nodeName).toBe('SPAN');
  });
});
