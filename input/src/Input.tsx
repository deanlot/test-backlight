import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes, useEffect, useState } from 'react';
import {
  errorStyles,
  helperStyles,
  IconPlaceholder,
  InputContainer,
  inputStyles,
  Label,
  StyledInput,
} from './Input.styles';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, onFocus, onBlur, onClear, helper, error, ...props }, ref) => {
    const helperMessage: Message = { type: 'helper', text: helper };
    const errorMessage: Message = { type: 'error', text: error };

    const [message, setMessage] = useState<Message>(error && errorMessage);

    useEffect(() => {
      if (error) {
        setMessage(errorMessage);
      }
    }, [error, errorMessage]);

    const getLabel = () => {
      if (props.label.length > 30) {
        console.warn('Input component with props');
        return props.label.substring(0, 30);
      }

      return props.label;
    };

    const messageStyles = message?.type === 'error' ? errorStyles : helperStyles;

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
        <Label htmlFor={id}>{getLabel()}</Label>
        <StyledInput
          {...props}
          id={id}
          className={`${inputStyles({ error: !!error })}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          type="text"
          maxLength={60}
        />
        <IconPlaceholder>C</IconPlaceholder>
        <span className={messageStyles()}>{message?.text}</span>
      </InputContainer>
    );
  }
);

export type InputProps = {
  // label cannot be over 30 chars
  label: string;
  // should id or name be made required, since it would affect accessibility for the "htmlFor" attribute
  id?: string;
  error?: string;
  helper: string;
  onClear: () => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Message =
  | {
      type: 'error' | 'helper';
      text: string;
    }
  | undefined;

export default Input;
