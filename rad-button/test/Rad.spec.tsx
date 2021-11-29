import React from 'react';
import { act, fireEvent, getByTestId, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import RadButton from '../src/RadButton';
import { fn } from 'jest-mock';
import '../../jest.setup';

describe('RadButton', function () {
  it('should render the component', function () {
    const { getByText } = render(<RadButton variant={'solid'}>solid</RadButton>);
    expect(getByText('solid')).toBeInTheDocument();
  });

  it('should present user with done icon when the button is clicked and notifySuccess is true', async () => {
    const { getByText, getByTestId } = render(
      <RadButton
        data-testid={'save-button'}
        variant={'solid'}
        showOnClickResult={true}
        onClick={() =>
          new Promise<void>((resolve) => {
            return setTimeout(() => {
              return resolve();
            }, 10);
          })
        }
      >
        solid
      </RadButton>
    );
    expect(getByText('solid')).toBeInTheDocument();
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
      <RadButton
        data-testid={'save-button'}
        variant={'solid'}
        showOnClickResult={true}
        onClick={() =>
          new Promise<void>((resolve) => {
            return setTimeout(() => {
              clickFn();
              return resolve();
            }, 100);
          })
        }
      >
        solid
      </RadButton>
    );
    await act(async () => {
      await fireEvent.click(getByTestId('save-button'));
      await fireEvent.click(getByTestId('save-button'));
    });
    await waitFor(() => {
      expect(clickFn).toHaveBeenCalledTimes(1);
    });
  });

  it.skip('should show failure state when a onClick rejects', async () => {
    try {
      const { getByText, getByTestId } = render(
        <RadButton
          data-testid={'save-button'}
          variant={'solid'}
          showOnClickResult={true}
          onClick={() => Promise.reject('Fail!!!')}
        >
          solid
        </RadButton>
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