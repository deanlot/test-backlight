import React from 'react';
import { act, fireEvent, getByTestId, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import Button from '~/Button/src/Button';
import { fn } from 'jest-mock';
import '../../jest.setup';

describe('RadButton', function () {
  it('should render the component', function () {
    const { getByText } = render(<Button variant={'primary'}>primary</Button>);
    expect(getByText('primary')).toBeInTheDocument();
  });

  it('should present user with done icon when the button is clicked and notifySuccess is true', async () => {
    const { getByText, getByTestId } = render(
      <Button
        data-testid={'save-button'}
        variant={'primary'}
        onClick={() =>
          new Promise<void>((resolve) => {
            return setTimeout(() => {
              return resolve();
            }, 10);
          })
        }
      >
        primary
      </Button>
    );
    expect(getByText('primary')).toBeInTheDocument();
    expect(getByTestId('save-button')).toBeInTheDocument();
    await act(async () => {
      await fireEvent.click(getByTestId('save-button'));
    });
    await waitFor(() => expect(getByText('done')).toBeInTheDocument());
    await waitForElementToBeRemoved(() => getByText('done'), { timeout: 1500 });
  });

  it('should not allow a user to click while promise is still pending', async () => {
    const clickFn = fn();
    const { getByTestId } = render(
      <Button
        data-testid={'save-button'}
        variant={'primary'}
        onClick={() =>
          new Promise<void>((resolve) => {
            return setTimeout(() => {
              clickFn();
              return resolve();
            }, 100);
          })
        }
      >
        primary
      </Button>
    );
    await act(async () => {
      await fireEvent.click(getByTestId('save-button'));
      await fireEvent.click(getByTestId('save-button'));
    });
    await waitFor(() => {
      expect(clickFn).toHaveBeenCalledTimes(1);
    });
  });

  it('should show a disabled state as priority when both disabled and busy state are enabled', async () => {
    const { getByTestId, queryByTestId } = render(
      <Button data-testid={'save-button'} variant={'primary'} busy disabled>
        primary
      </Button>
    );

    expect(queryByTestId('loading-icon')).not.toBeInTheDocument();
    expect(getByTestId('save-button')).toBeDisabled();
  });

  it.skip('should show failure icon / animation when a onClick fails', async () => {
    try {
      const { getByText, getByTestId } = render(
        <Button
          data-testid={'save-button'}
          variant={'primary'}
          onClick={() => Promise.reject('Fail!!!')}
        >
          primary
        </Button>
      );
      await act(async () => {
        await fireEvent.click(getByTestId('save-button'));
      });
      await waitFor(() => {
        expect(getByText('whoops')).toBeInTheDocument();
      });
      await waitForElementToBeRemoved(() => getByText('whoops'), { timeout: 1500 });
    } catch (e) {
      console.info('in error!!!');
      expect(e.toString()).toMatch(/^Fail/);
    }
  });
});
