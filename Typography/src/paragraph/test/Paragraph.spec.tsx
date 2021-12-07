import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../../jest.setup';
import { Paragraph } from '../../';

describe('Paragraph Typography', () => {
  test('it should render a p', () => {
    const { container } = render(<Paragraph>Test</Paragraph>);
    expect(container.firstChild.nodeName).toBe('P');
  });
});
