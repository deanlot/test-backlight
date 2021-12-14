import React, { useState } from 'react';
import { TextInput } from '../src';
import { StoryLayout } from '../../layout';
import { useForm } from 'react-hook-form';
import CheckIcon from '../../icon/icons/CheckIcon/src/CheckIcon';
import Button from '../../Button/src/Button';
import ArrowRightIcon from '../../icon/icons/ArrowRightIcon/src/ArrowRightIcon';

export default StoryLayout;

export const primaryHelper = () => {
  const [text, setText] = useState<string>('');

  return (
    <TextInput
      helper="The first part of your name"
      label="First Name"
      value={text}
      placeholder="First Name"
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export const primaryTextRightHelper = () => {
  const [text, setText] = useState<string>('');

  return (
    <TextInput
      helper="The first part of your name"
      label="First Name"
      value={text}
      textAlign="right"
      placeholder="First Name"
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export const primaryIconRight = () => {
  const [text, setText] = useState<string>('');

  return (
    <TextInput
      helper="The first part of your name"
      label="First Name"
      value={text}
      iconSuffix={<CheckIcon />}
      placeholder="First Name"
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export const primaryIconLeft = () => {
  const [text, setText] = useState<string>('');

  return (
    <TextInput
      helper="The first part of your name"
      label="First Name"
      value={text}
      iconPrefix={<CheckIcon />}
      placeholder="First Name"
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export const primaryIconLeftAndRight = () => {
  const [text, setText] = useState<string>('');

  return (
    <TextInput
      helper="The first part of your name"
      label="First Name"
      value={text}
      iconPrefix={<CheckIcon />}
      iconSuffix={<ArrowRightIcon />}
      placeholder="First Name"
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export const primaryError = () => {
  const [text, setText] = useState<string>('');

  return (
    <TextInput
      helper="The first part of your name"
      label="First Name"
      error="First Name is required."
      value={text}
      iconPrefix={<CheckIcon />}
      placeholder="First Name"
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export const primaryDisabled = () => {
  const [text, setText] = useState<string>('Ram');

  return (
    <TextInput
      helper="The first part of your name"
      label="First Name"
      value={text}
      disabled
      placeholder="First Name"
      onChange={(e) => setText(e.target.value)}
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
        placeholder="First Name"
        iconSuffix={<CheckIcon />}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
