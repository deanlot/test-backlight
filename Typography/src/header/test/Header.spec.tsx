import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../../jest.setup';
import { Header } from '../../';

describe('Header Typography', () => {
  test('it should render an h1 for variant large', () => {
    const { container } = render(<Header variant="large">Test</Header>);
    expect(container.firstChild.nodeName).toBe('H1');
  });

  test('it should render an h2 for variant medium', () => {
    const { container } = render(<Header variant="medium">Test</Header>);
    expect(container.firstChild.nodeName).toBe('H2');
  });

  test('it should render an h3 for variant small', () => {
    const { container } = render(<Header variant="small">Test</Header>);
    expect(container.firstChild.nodeName).toBe('H3');
  });

  test('it should apply the large variant', async () => {
    render(<Header variant="large">Test</Header>);
    expect(screen.getByText('Test').className).toMatch(/variant\-large/);
  });

  test('it should apply the medium variant', async () => {
    render(<Header variant="medium">Test</Header>);
    expect(screen.getByText('Test').className).toMatch(/variant\-medium/);
  });

  test('it should apply the small variant', async () => {
    render(<Header variant="small">Test</Header>);
    expect(screen.getByText('Test').className).toMatch(/variant\-small/);
  });

  test('it should apply the medium variant by default', async () => {
    render(<Header>Test</Header>);
    expect(screen.getByText('Test').className).toMatch(/variant\-medium/);
  });
});
