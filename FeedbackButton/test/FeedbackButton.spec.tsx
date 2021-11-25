import React from 'react';
import { act, fireEvent, getByTestId, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { fn } from 'jest-mock';
import '../../jest.setup';
import { FeedbackButton } from '../src';

describe('FeedbackButton', function() {
  it('should render the feedback button component', function() {
    const { getByText } = render(<FeedbackButton data-testid={'test-button'}
                                                 variant={'primary'}
                                                 onClick={() => Promise.resolve()}>primary</FeedbackButton>);
    expect(getByText('primary')).toBeInTheDocument();
  });

  it('should present user with done icon when the button is clicked', async () => {
    const { getByText, getByTestId } = render(
      <FeedbackButton
        data-testid={'test-button'}
        variant={'primary'}
        delay={10}
        onClick={() =>
          new Promise<void>((resolve) => {
            return setTimeout(() => {
              return resolve();
            }, 10);
          })
        }
      >
        primary
      </FeedbackButton>
    );
    expect(getByTestId('test-button')).toBeInTheDocument();
    await act(async () => {
      await fireEvent.click(getByTestId('test-button'));
    });
    await waitFor(() => expect(getByText('done')).toBeInTheDocument());
    await waitForElementToBeRemoved(() => getByText('done'), { timeout: 1500 });
  });

  it('should present user with busy icon when the button is clicked and inferBusy is set to true', async () => {
    const { getByText, getByTestId } = render(
      <FeedbackButton
        data-testid={'test-button'}
        variant={'primary'}
        delay={10}
        inferBusy
        onClick={() =>
          new Promise<void>((resolve) => {
            return setTimeout(() => {
              return resolve();
            }, 10);
          })
        }
      >
        primary
      </FeedbackButton>
    );
    await act(async () => {
      await fireEvent.click(getByTestId('test-button'));
    });
    await waitFor(() => {
      expect(getByTestId('test-button').className).toMatch(/clickable\-false/);
      expect(getByTestId('loading-icon')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(getByText('done')).toBeInTheDocument();
    });
    await waitForElementToBeRemoved(() => getByText('done'), { timeout: 1500 });
  });

  it('should not allow a user to click while promise is still pending', async () => {
    const clickFn = fn();
    const { getByTestId } = render(
      <FeedbackButton
        data-testid={'test-button'}
        variant={'primary'}
        onClick={() =>
          new Promise<void>((resolve) => {
            return setTimeout(() => {
              clickFn();
              return resolve();
            }, 10);
          })
        }
      >
        primary
      </FeedbackButton>
    );
    await act(async () => {
      await fireEvent.click(getByTestId('test-button'));
      await fireEvent.click(getByTestId('test-button'));
    });
    await waitFor(() => {
      expect(clickFn).toHaveBeenCalledTimes(1);
    });
  });

  it('should animate failure when a onClick function fails', async () => {
    const failFn = fn();
    const finalFn = fn();
    const { getByTestId } = render(
      <FeedbackButton
        data-testid={'save-button'}
        variant={'primary'}
        onClick={() => Promise.reject('Failed message here!!!').catch(failFn).finally(finalFn)}
      >
        primary
      </FeedbackButton>
    );
    await act(async () => {
      await fireEvent.click(getByTestId('save-button'));
    });
    expect(failFn).toHaveBeenCalledTimes(1);
    expect(failFn).toHaveBeenCalledWith('Failed message here!!!');
    expect(finalFn).toHaveBeenCalledTimes(1);
  });
});
