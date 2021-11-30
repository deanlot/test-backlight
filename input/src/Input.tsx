import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes, useState } from 'react';
import { errorStyles, helperStyles, InputContainer, inputStyles, Label, StyledInput } from './Input.styles';

const Input = forwardRef<HTMLInputElement, InputProps>(({ id, onFocus, onBlur, helper, error, ...props }, ref) => {
  const helperMessage: Message = { type: 'helper', text: helper };
  const errorMessage: Message = { type: 'error', text: error };

  const [message, setMessage] = useState<Message>(errorMessage && { type: 'error', text: error });

  const messageStyles = message?.type === 'error' ? errorStyles : helperStyles;
  const label = props.label.length > 30 ? props.label.substring(0, 30) : props.label;

  const handleFocus = (e) => {
    const newMessage = error ? errorMessage : helperMessage;
    setMessage(newMessage);
    onFocus && onFocus(e);
  };

  const handleBlur = (e) => {
    const newMessage = error ? errorMessage : undefined;
    setMessage(newMessage);
    onBlur && onBlur(e);
  };

  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        {...props}
        id={id}
        className={`${inputStyles({ error: !!error })} ${props?.className}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={ref}
        type="text"
        // @ts-expect-error: not sure why max length is giving a TS error, we can look into this later
        maxLength="60"
      />
      <span className={messageStyles()}>{message?.text}</span>
    </InputContainer>
  );
});

export type InputProps = {
  // label cannot be over 30 chars
  label: string;
  // should id or name be made required, since it would affect accessibility for the "htmlFor" attribute
  id?: string;
  error?: string;
  helper: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Message =
  | {
      type: 'error' | 'helper';
      text: string;
    }
  | undefined;

export default Input;
