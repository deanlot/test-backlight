import React from 'react';
import { fireEvent, getByTestId, render } from '@testing-library/react';
import Input from '../src/Input';
import '../../jest.setup';

describe('Input', function () {
  it('should render the input and display an outline on focus', function () {
    const { getByTestId } = render(<Input data-testid="input-test" />);
    const input = getByTestId('input-test');

    fireEvent.mouseDown(input);
    expect(input.toHaveStyle({ outline: '2px solid var(--colors-interactive-highlight)' }));
  });
});
