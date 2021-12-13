import React from 'react';
import { fireEvent, getByTestId, render } from '@testing-library/react';
import Button from '../src/Button';
import '../../jest.setup';
import { fn } from 'jest-mock';

describe('Button', function () {
  it('should render the button component as primary variant', function () {
    const { getByTestId } = render(
      <Button data-testid={'save-button'} variant={'solid'}>
        primary
      </Button>
    );
    expect(getByTestId('save-button').className).toMatch(/variant\-solid/);
  });

  it('should render the button component as secondary variant', function () {
    const { getByTestId } = render(
      <Button data-testid={'save-button'} variant={'outline'}>
        secondary
      </Button>
    );
    expect(getByTestId('save-button').className).toMatch(/variant\-outline/);
  });

  it('should invoke the onClick when clicked', async () => {
    const clickFn = fn();
    const { getByText, getByTestId } = render(
      <Button data-testid={'save-button'} variant={'solid'} onClick={clickFn}>
        primary
      </Button>
    );
    expect(getByText('primary')).toBeInTheDocument();
    expect(getByTestId('save-button')).toBeInTheDocument();
    await fireEvent.click(getByTestId('save-button'));
    expect(clickFn).toHaveBeenCalledTimes(1);
  });
});
