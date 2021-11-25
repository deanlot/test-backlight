import React from 'react';
import { fireEvent, getByTestId, render } from '@testing-library/react';
import Button from '../src/Button';
import '../../jest.setup';
import { fn } from 'jest-mock';

describe('RadButton', function() {
  it('should render the button component as primary variant', function() {
    const { getByTestId } = render(<Button data-testid={'save-button'} variant={'primary'}>primary</Button>);
    expect(getByTestId('save-button').className).toMatch(/variant\-primary/);
  });

  it('should render the button component as secondary variant', function() {
    const { getByTestId } = render(<Button data-testid={'save-button'} variant={'secondary'}>secondary</Button>);
    expect(getByTestId('save-button').className).toMatch(/variant\-secondary/);
  });

  it('should invoke the onClick when clicked', async () => {
    const clickFn = fn();
    const { getByText, getByTestId } = render(
      <Button
        data-testid={'save-button'}
        variant={'primary'}
        onClick={clickFn}
      >
        primary
      </Button>
    );
    expect(getByText('primary')).toBeInTheDocument();
    expect(getByTestId('save-button')).toBeInTheDocument();
    await fireEvent.click(getByTestId('save-button'));
    expect(clickFn).toHaveBeenCalledTimes(1);
  });
});
