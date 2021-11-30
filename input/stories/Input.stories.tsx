import React from 'react';
import Input from '../src/Input';
import { layout } from '../../utils/src/story-decorator';

export default layout;

export const primaryHelper = () => <Input helper="The first part of your name" label="First Name" />;

export const primaryError = () => (
  <Input helper="The first part of your name" error="This is field is required." label="First Name" />
);

export const primaryDisabled = () => (
  <Input helper="The first part of your name" label="First Name" value="Ram" disabled />
);
