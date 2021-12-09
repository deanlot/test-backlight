import React from 'react';
import { render } from '@testing-library/react';
import '../../../../jest.setup';
import { HelperText } from '../../';

describe('Helper Text', () => {
  it('should render a span', () => {
    const { container } = render(<HelperText>Test</HelperText>);
    expect(container.firstChild.nodeName).toBe('SPAN');
  });
});
