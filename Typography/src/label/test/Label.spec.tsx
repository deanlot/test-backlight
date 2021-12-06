import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../../jest.setup';
import { Label } from '../../';

describe('Label Typography', () => {
  test('it should render a span', () => {
    const { container } = render(<Label>Test</Label>);
    expect(container.firstChild.nodeName).toBe('SPAN');
  });

  test('it should render the label uppercase', async () => {
    render(<Label uppercase>Test</Label>);
    expect(screen.getByText('Test').className).toMatch(/uppercase\-true/);
  });

  test('it should render the label bold', async () => {
    render(<Label bold>Test</Label>);
    expect(screen.getByText('Test').className).toMatch(/bold\-true/);
  });

  test('it should apply the large variant', async () => {
    render(<Label variant="large">Test</Label>);
    expect(screen.getByText('Test').className).toMatch(/variant\-large/);
  });

  test('it should apply the medium variant', async () => {
    render(<Label variant="medium">Test</Label>);
    expect(screen.getByText('Test').className).toMatch(/variant\-medium/);
  });

  test('it should apply the small variant', async () => {
    render(<Label variant="small">Test</Label>);
    expect(screen.getByText('Test').className).toMatch(/variant\-small/);
  });

  test('it should apply the medium variant by default', async () => {
    render(<Label>Test</Label>);
    expect(screen.getByText('Test').className).toMatch(/variant\-medium/);
  });
});
