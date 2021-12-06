import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../../jest.setup';
import { Paragraph } from '../../';

describe('Paragraph Typography', () => {
  test('it should render a p', () => {
    const { container } = render(<Paragraph>Test</Paragraph>);
    expect(container.firstChild.nodeName).toBe('P');
  });

  test('it should apply the large variant', async () => {
    render(<Paragraph variant="large">Test</Paragraph>);
    expect(screen.getByText('Test').className).toMatch(/variant\-large/);
  });

  test('it should apply the medium variant', async () => {
    render(<Paragraph variant="medium">Test</Paragraph>);
    expect(screen.getByText('Test').className).toMatch(/variant\-medium/);
  });

  test('it should apply the small variant', async () => {
    render(<Paragraph variant="small">Test</Paragraph>);
    expect(screen.getByText('Test').className).toMatch(/variant\-small/);
  });

  test('it should apply the medium variant by default', async () => {
    render(<Paragraph>Test</Paragraph>);
    expect(screen.getByText('Test').className).toMatch(/variant\-medium/);
  });
});
