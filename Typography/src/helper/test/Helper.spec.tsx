import React from 'react';
import { render } from '@testing-library/react';
import '../../../../jest.setup';
import { Helper } from '../../';

describe('Helper Typography', () => {
  test('it should render a span', () => {
    const { container } = render(<Helper>Test</Helper>);
    expect(container.firstChild.nodeName).toBe('SPAN');
  });
});
