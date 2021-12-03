import React, { useState } from 'react';
import Input from '../src/Input';
import { StoryLayout } from '../../layout';
import { useForm } from 'react-hook-form';
import CheckIcon from '../../icon/icons/CheckIcon/src/CheckIcon';
import Button from '../../Button/src/Button';
import ArrowRightIcon from '../../icon/icons/ArrowRightIcon/src/ArrowRightIcon';

export default StoryLayout;

export const primaryHelper = () => {
  const [text, setText] = useState<string>('');

  return (
    <Input
      helper="The first part of your name"
      label="First Name"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export const primaryTextRightHelper = () => {
  const [text, setText] = useState<string>('');

  return (
    <Input
      helper="The first part of your name"
      label="First Name"
      value={text}
      textAlign="right"
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export const primaryIconRight = () => {
  const [text, setText] = useState<string>('');

  return (
    <Input
      helper="The first part of your name"
      label="First Name"
      value={text}
      iconSuffix={<CheckIcon />}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export const primaryIconLeft = () => {
  const [text, setText] = useState<string>('');

  return (
    <Input
      helper="The first part of your name"
      label="First Name"
      value={text}
      iconPrefix={<CheckIcon />}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export const primaryIconLeftAndRight = () => {
  const [text, setText] = useState<string>('');

  return (
    <Input
      helper="The first part of your name"
      label="First Name"
      value={text}
      iconPrefix={<CheckIcon />}
      iconSuffix={<ArrowRightIcon />}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export const primaryError = () => {
  const [text, setText] = useState<string>('');

  return (
    <Input
      helper="The first part of your name"
      label="First Name"
      error="First Name is required."
      value={text}
      iconPrefix={<CheckIcon />}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export const primaryDisabled = () => {
  const [text, setText] = useState<string>('Ram');

  return (
    <Input
      helper="The first part of your name"
      label="First Name"
      value={text}
      disabled
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
      <Input
        label="firstName"
        helper="Your first name."
        {...register('firstName', { required: true })}
        error={errors?.firstName && 'First Name is required.'}
        iconSuffix={<CheckIcon />}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
