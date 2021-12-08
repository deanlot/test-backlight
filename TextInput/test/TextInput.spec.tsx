import React from 'react';
import { fireEvent, getByTestId, render, waitFor } from '@testing-library/react';
import TextInput from '../src/TextInput';
import '../../jest.setup';

describe('TextInput', function () {
  const helperText = 'helper text';
  const errorText = 'required field';

  it('should render the input and display an error if an error is passed without displaying helper text', async function () {
    const { getByTestId, getByText, queryByText, rerender } = render(
      <TextInput error={errorText} helper={helperText} />
    );
    const inputContainer = getByTestId('input-test-container');

    //idk how to make this work lol
    // const blockSymbol = getByTestId('block-symbol');
    fireEvent.click(inputContainer);

    await waitFor(() => {
      expect(inputContainer).toBeInTheDocument();
      expect(getByText(errorText)).toBeInTheDocument();
      expect(queryByText(helperText)).not.toBeInTheDocument();
      expect(inputContainer.className).toMatch(/error\-true/);
    });

    rerender(<TextInput helper={'helper text'} />);

    fireEvent.click(inputContainer);

    await waitFor(() => {
      expect(queryByText(errorText)).not.toBeInTheDocument();
      expect(getByText(helperText)).toBeInTheDocument();
    });
  });

  it('should render an outline when focused', async function () {
    const { getByTestId, getByText } = render(
      <TextInput helper={helperText} label="First Name" placeholder="First Name" />
    );
    const inputContainer = getByTestId('input-test-container');

    // expect blue outline when focused
    fireEvent.click(inputContainer);

    await waitFor(() => {
      expect(inputContainer).toHaveStyle({ outline: '2px solid var(--colors-interactive-highlight)' });
    });

    // expect no blue outline when not focused?

    // ensure icons render? I wonder if we can test for icon being on the left or right

    // ensure label is displayed when passed in
  });
});
