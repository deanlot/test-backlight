import React, { useCallback, useState } from 'react';
import Input from '../src/Input';
import { StoryLayout } from '../../layout';

export default StoryLayout;

export const primaryHelper = () => <Input helper="The first part of your name" label="First Name" />;

export const primaryError = () => {
  const [inputVal, setInputVal] = useState<string>('');

  const handleClear = useCallback(() => {
    setInputVal('');
  }, [setInputVal]);

  return (
    <Input
      helper="The first part of your name"
      error="This is field is required."
      label="First Name"
      onClear={handleClear}
      value={inputVal}
      onChange={useCallback((e) => setInputVal(e.target.value), [setInputVal])}
    />
  );
};

export const primaryDisabled = () => {
  const [inputVal, setInputVal] = useState<string>('Ram');

  const handleClear = useCallback(() => {
    setInputVal('');
  }, [setInputVal]);

  return (
    <Input
      helper="The first part of your name"
      label="First Name"
      onClear={handleClear} // Note how the clear button is not rendered when disabled
      value={inputVal}
      disabled
      onChange={useCallback((e) => setInputVal(e.target.value), [setInputVal])}
    />
  );
};
