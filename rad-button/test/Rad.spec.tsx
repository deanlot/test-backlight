import React from 'react';
import { act, fireEvent, getByTestId, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import RadButton from '../src/RadButton';

describe('RadButton', function() {

  it('should render the component', function() {
    const { getByText } = render(<RadButton variant={'primary'}>primary</RadButton>);
    expect(getByText('primary')).toBeInTheDocument();
  });

  it('should present user with done icon when the button is clicked and notifySuccess is true', async () => {
    const { getByText, getByTestId } = render(<RadButton data-testid={'save-button'} variant={'primary'}
                                                         notifySuccess={true} onClick={() =>
      new Promise<void>((resolve) => {
        return setTimeout(() => {
          return resolve();
        }, 10);
      })
    }>primary</RadButton>);
    expect(getByText('primary')).toBeInTheDocument();
    expect(getByTestId('save-button')).toBeInTheDocument();
    await act(async () => {
      await fireEvent.click(getByTestId('save-button'));
    });
    await waitFor(() => expect(getByText('done')).toBeInTheDocument());
    await waitForElementToBeRemoved(() => getByText('done'), { timeout: 1500 });
  });

  it('should not allow a user to click while promise is still pending', async () => {
    const clickFn = jest.fn();
    const { getByTestId } = render(<RadButton data-testid={'save-button'} variant={'primary'}
                                              notifySuccess={true} onClick={() =>
      new Promise<void>((resolve) => {
        return setTimeout(() => {
          clickFn();
          return resolve();
        }, 100);
      })
    }>primary</RadButton>);
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
      const { getByText, getByTestId } = render(<RadButton data-testid={'save-button'} variant={'primary'}
                                                           notifyFailure={true}
                                                           onClick={() => Promise.reject('Fail!!!')}>primary</RadButton>);
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