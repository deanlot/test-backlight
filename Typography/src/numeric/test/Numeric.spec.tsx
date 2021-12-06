import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../../jest.setup';
import { Numeric } from '../../';

describe('Numeric Typography', () => {
  test('it should render a span', () => {
    const { container } = render(<Numeric>Test</Numeric>);
    expect(container.firstChild.nodeName).toBe('SPAN');
  });

  test('it should apply the xlarge variant', async () => {
    render(<Numeric variant="xlarge">Test</Numeric>);
    expect(screen.getByText('Test').className).toMatch(/variant\-xlarge/);
  });

  test('it should apply the large variant', async () => {
    render(<Numeric variant="large">Test</Numeric>);
    expect(screen.getByText('Test').className).toMatch(/variant\-large/);
  });

  test('it should apply the medium variant', async () => {
    render(<Numeric variant="medium">Test</Numeric>);
    expect(screen.getByText('Test').className).toMatch(/variant\-medium/);
  });

  test('it should apply the small variant', async () => {
    render(<Numeric variant="small">Test</Numeric>);
    expect(screen.getByText('Test').className).toMatch(/variant\-small/);
  });

  test('it should apply the xsmall variant', async () => {
    render(<Numeric variant="xsmall">Test</Numeric>);
    expect(screen.getByText('Test').className).toMatch(/variant\-xsmall/);
  });

  test('it should apply the medium variant by default', async () => {
    render(<Numeric>Test</Numeric>);
    expect(screen.getByText('Test').className).toMatch(/variant\-medium/);
  });
});
