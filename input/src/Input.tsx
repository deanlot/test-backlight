import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes, useCallback, useEffect, useState } from 'react';
import {
  Container,
  errorStyles,
  helperStyles,
  IconContainer,
  InputContainer,
  inputContainerStyles,
  inputStyles,
  Label,
  StyledInput,
  WarningSymbolContainer,
} from './Input.styles';
import WarningSymbol from '../../icon/symbols/WarningSymbol/WarningSymbol';
import Button from '../../Button/src/Button';
import CloseIcon from '../../icon/icons/CloseIcon/src/CloseIcon';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, onFocus, onBlur, onClear, disabled, helper, error, ...props }, ref) => {
    const helperMessage: Message = { type: 'helper', text: helper };
    const errorMessage: Message = { type: 'error', text: error };

    const [message, setMessage] = useState<Message>(error && errorMessage);
    const [focused, setFocused] = useState<boolean>(false);

    // TODO: we should wrap onClear in useCallback if we can so the consumer doesnt need to worry about it

    useEffect(() => {
      if (error) {
        setMessage(errorMessage);
      }
    }, [error]);

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
      setFocused(true);
      onFocus && onFocus(e);
    };

    const handleBlur = (e) => {
      const newMessage = error ? errorMessage : undefined;
      setMessage(newMessage);
      setFocused(false);
      onBlur && onBlur(e);
    };

    return (
      <Container>
        <Label htmlFor={id}>{getLabel()}</Label>
        <InputContainer className={`${inputContainerStyles({ error: !!error, focused })}`} tabIndex={0}>
          <StyledInput
            {...props}
            disabled={disabled}
            className={inputStyles({ error: !!error })}
            id={id}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
            type="text"
            maxLength={60}
            tabIndex={-1}
          />
          <IconContainer>
            {!disabled && onClear && <Button icon={<CloseIcon size="s" />} onClick={onClear} variant="ghost" />}
            {error && (
              <WarningSymbolContainer>
                <WarningSymbol />
              </WarningSymbolContainer>
            )}
          </IconContainer>
        </InputContainer>
        <span className={messageStyles()}>{message?.text}</span>
      </Container>
    );
  }
);

export type InputProps = {
  // label cannot be over 30 chars
  label: string;
  helper: string;
  // should id or name be made required, since it would affect accessibility for the "htmlFor" attribute
  id?: string;
  error?: string;
  onClear?: () => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Message =
  | {
      type: 'error' | 'helper';
      text: string;
    }
  | undefined;

export default Input;
