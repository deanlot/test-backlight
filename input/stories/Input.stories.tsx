import React, { useCallback } from 'react';
import Input from '../src/Input';
import { StoryLayout } from '../../layout';

export default StoryLayout;

export const primaryHelper = () => <Input helper="The first part of your name" label="First Name" />;

export const primaryError = () => {
  const handleClear = useCallback(() => {
    console.log('clear');
  }, []);

  return (
    <Input
      helper="The first part of your name"
      error="This is field is required."
      label="First Name"
      onClear={handleClear}
    />
  );
};

export const primaryDisabled = () => (
  <Input helper="The first part of your name" label="First Name" value="Ram" disabled />
);
