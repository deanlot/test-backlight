import React from 'react';
import { render } from '@testing-library/react';
import '../../../../jest.setup';
import { TitleText } from '../../';

describe('Title Text', () => {
  it('should render an h4 for variant large', () => {
    const { container } = render(<TitleText variant="large">Test</TitleText>);
    expect(container.firstChild.nodeName).toBe('H4');
  });

  it('should render an h5 for variant medium', () => {
    const { container } = render(<TitleText variant="medium">Test</TitleText>);
    expect(container.firstChild.nodeName).toBe('H5');
  });

  it('should render an h6 for variant small', () => {
    const { container } = render(<TitleText variant="small">Test</TitleText>);
    expect(container.firstChild.nodeName).toBe('H6');
  });
});
