import React, { forwardRef } from 'react';
import Input, { InputProps } from '../../input/src/Input';

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  return <Input {...props} variant="text" ref={ref} />;
});

// TODO: probs should move InputProps further up
type TextInputProps = Omit<InputProps, 'variant'>;

export default TextInput;
