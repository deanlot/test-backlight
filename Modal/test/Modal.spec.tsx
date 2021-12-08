import React from 'react';
import { render } from '@testing-library/react';
import '../../jest.setup';
import { Modal } from '../src';
import { ThemeProvider } from '../../theme-provider';

describe('Modal', () => {
  it('should render the modal component with default trigger', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Modal data-testid={'test-modal'}>testing</Modal>
      </ThemeProvider>
    );
    expect(getByRole('button')).toBeInTheDocument();
  });
});
