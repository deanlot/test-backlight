import React from 'react';
import { render } from '@testing-library/react';
import '../../../../jest.setup';
import { Disclaimer } from '../../';

describe('Disclaimer Typography', () => {
  test('it should render a span', () => {
    const { container } = render(<Disclaimer>Test</Disclaimer>);
    expect(container.firstChild.nodeName).toBe('SPAN');
  });
});
