import React, { useCallback, useState } from 'react';
import TextInput from '../src/TextInput';
import { StoryLayout } from '../../layout';
import { useForm } from 'react-hook-form';
import CheckIcon from '../../icon/icons/CheckIcon/src/CheckIcon';
import Button from '../../Button/src/Button';

export default StoryLayout;

export const primaryHelper = () => <TextInput helper="The first part of your name" label="First Name" />;
export const primaryTextRightHelper = () => (
  <TextInput helper="The first part of your name" label="First Name" textAlign="right" />
);
export const primaryIconRight = () => (
  <TextInput helper="The first part of your name" label="First Name" icon={<CheckIcon />} />
);
export const primaryIconLeft = () => (
  <TextInput helper="The first part of your name" label="First Name" icon={<CheckIcon />} iconPlacement="left" />
);

export const primaryError = () => {
  const [inputVal, setInputVal] = useState<string>('');

  const handleClear = useCallback(() => {
    setInputVal('');
  }, [setInputVal]);

  return (
    <TextInput
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
    <TextInput
      helper="The first part of your name"
      label="First Name"
      onClear={handleClear} // Note how the clear button is not rendered when disabled
      value={inputVal}
      disabled
      onChange={useCallback((e) => setInputVal(e.target.value), [setInputVal])}
    />
  );
};

export const reactHookForm = () => {
  type formType = {
    firstName: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({ defaultValues: { firstName: '' } });

  const onSubmit = (data) => {
    console.log('submitting', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="firstName"
        helper="Your first name."
        {...register('firstName', { required: true })}
        error={errors?.firstName && 'First Name is required.'}
        icon={<CheckIcon />}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
