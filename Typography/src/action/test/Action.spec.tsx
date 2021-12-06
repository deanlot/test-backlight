import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../../jest.setup';
import { Action } from '../../';

describe('Action Typography', () => {
  test('it should render a span', () => {
    const { container } = render(<Action>Test</Action>);
    expect(container.firstChild.nodeName).toBe('SPAN');
  });

  test('it should render the action uppercase', async () => {
    render(<Action uppercase>Test</Action>);
    expect(screen.getByText('Test').className).toMatch(/uppercase\-true/);
  });

  test('it should apply the medium variant', async () => {
    render(<Action variant="medium">Test</Action>);
    expect(screen.getByText('Test').className).toMatch(/variant\-medium/);
  });

  test('it should apply the small variant', async () => {
    render(<Action variant="small">Test</Action>);
    expect(screen.getByText('Test').className).toMatch(/variant\-small/);
  });

  test('it should apply the medium variant by default', async () => {
    render(<Action>Test</Action>);
    expect(screen.getByText('Test').className).toMatch(/variant\-medium/);
  });
});
