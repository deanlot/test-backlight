import React from 'react';
import { render } from '@testing-library/react';
import '../../jest.setup';
import { Modal } from '../src';

describe('FeedbackButton', () => {
  it('should render the feedback button component', () => {
    const { getByText } = render(<Modal data-testid={'test-modal'}>testing</Modal>);
    expect(getByText('primary')).toBeInTheDocument();
  });
});
