import React from 'react';
import { render } from '@testing-library/react';
import '../../../../jest.setup';
import { Title } from '../../';

describe('Title Typography', () => {
  it('should render an h4 for variant large', () => {
    const { container } = render(<Title variant="large">Test</Title>);
    expect(container.firstChild.nodeName).toBe('H4');
  });

  it('should render an h5 for variant medium', () => {
    const { container } = render(<Title variant="medium">Test</Title>);
    expect(container.firstChild.nodeName).toBe('H5');
  });

  it('should render an h6 for variant small', () => {
    const { container } = render(<Title variant="small">Test</Title>);
    expect(container.firstChild.nodeName).toBe('H6');
  });
});
