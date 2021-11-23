import React from 'react';
import chai from 'chai';
import { findByText, fireEvent, getByTestId, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import RadButton from '../src/RadButton';

const expect = chai.expect;

describe('RadButton', function() {

  it('should render the component', function() {
    const { getByText } = render(<RadButton variant={'primary'}>primary</RadButton>);
    expect(getByText('primary')).to.exist;
  });

  it('should present user with done icon when the button is clicked and notifySuccess is true', async () => {
    const { getByText, getByTestId, findByText } = render(<RadButton data-testid={'save-button'} variant={'primary'}
                                                                     notifySuccess={true} onClick={() =>
      new Promise<void>((resolve) => {
        return setTimeout(() => {
          return resolve();
        }, 10);
      })
    }>primary</RadButton>);
    expect(getByText('primary')).to.exist;
    expect(getByTestId('save-button')).to.exist;
    fireEvent.click(getByTestId('save-button'));
    await waitFor(() => expect(getByText('done')).to.exist);
    await waitForElementToBeRemoved(() => getByText('done'), { timeout: 1500 });
    expect(findByText('done')).to.be.empty;
  });

  it('should not allow a user to click while promise is still pending', async () => {
    const clickArr = [];
    const { getByText, getByTestId, findByText } = render(<RadButton data-testid={'save-button'} variant={'primary'}
                                                                     notifySuccess={true} onClick={() =>
      new Promise<void>((resolve) => {
        return setTimeout(() => {
          clickArr.push(1);
          return resolve();
        }, 10);
      })
    }>primary</RadButton>);
    expect(getByText('primary')).to.exist;
    expect(getByTestId('save-button')).to.exist;
    await fireEvent.click(getByTestId('save-button'));
    fireEvent.click(getByTestId('save-button'));
    await waitFor(() => {
      expect(clickArr).to.have.lengthOf(1);
    });
  });

  it('should show  failure state when a sync onClick fails', async () => {
    const clickArr = [];
    const { getByText, getByTestId, findByText } = render(<RadButton data-testid={'save-button'} variant={'primary'}
                                                                     notifySuccess={true} onClick={() =>
      new Promise<void>((resolve) => {
        return setTimeout(() => {
          clickArr.push(1);
          return resolve();
        }, 10);
      })
    }>primary</RadButton>);
    expect(getByText('primary')).to.exist;
    expect(getByTestId('save-button')).to.exist;
    await fireEvent.click(getByTestId('save-button'));
    fireEvent.click(getByTestId('save-button'));
    await waitFor(() => {
      expect(clickArr).to.have.lengthOf(1);
    });
  });
});