import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import {
  Container,
  errorStyles,
  helperStyles,
  IconContainer,
  iconContainerStyles,
  InputContainer,
  inputContainerStyles,
  Label,
  MessageContainer,
  StyledInput,
} from './Input.styles';
import BlockSymbol from '../../icon/symbols/BlockSymbol/BlockSymbol';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, onFocus, onBlur, onClear, disabled, helper, error, icon, iconPlacement, textAlign = 'left', value, ...props },
    ref
  ) => {
    const [message, setMessage] = useState<Message>();
    const [focused, setFocused] = useState<boolean>(false);

    useEffect(() => {
      const helperMessage: Message = { type: 'helper', text: helper };
      const errorMessage: Message = { type: 'error', text: error };

      if (error) {
        error && setMessage(errorMessage);
      } else {
        if (focused && helper) {
          setMessage(helperMessage);
        } else {
          setMessage(undefined);
        }
      }
    }, [error, focused, setMessage]);

    const getLabel = () => {
      if (props?.label.length > 30) {
        console.warn('Input component label cannot exceed 30 characters.');
        return props.label.substring(0, 30);
      }

      return props.label;
    };

    const messageStyles = message?.type === 'error' ? errorStyles : helperStyles;

    const handleFocus = (e) => {
      setFocused(true);
      onFocus && onFocus(e);
    };

    const handleBlur = (e) => {
      setFocused(false);
      onBlur && onBlur(e);
    };

    return (
      <Container>
        {props.label && <Label htmlFor={id}>{getLabel()}</Label>}
        <InputContainer
          className={`${inputContainerStyles({
            focused,
            disabled,
            error: !!error,
            empty: !value,
            ...(iconPlacement && { iconPlacement }),
          })}`}
          tabIndex={0}
        >
          <StyledInput
            {...props}
            disabled={disabled}
            value={value}
            css={{ textAlign: textAlign }}
            id={id}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
            type="text"
            maxLength={60}
            tabIndex={-1}
          />
          {icon && <IconContainer className={iconContainerStyles({ iconPlacement })}>{icon}</IconContainer>}
        </InputContainer>
        <MessageContainer>
          {error && <BlockSymbol />}
          {message && <span className={messageStyles()}>{message?.text}</span>}
        </MessageContainer>
      </Container>
    );
  }
);

export interface InputProps extends HTMLInputProps {
  // label cannot be over 30 chars
  label?: string;
  helper?: string;
  // should id or name be made required, since it would affect accessibility for the "htmlFor" attribute
  id?: string;
  error?: string;
  onClear?: () => void;
  textAlign?: 'left' | 'right';
  iconPlacement?: 'left' | 'right';
  icon?: ReactNode;
}

type HTMLInputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'style'>;

type Message =
  | {
      type: 'error' | 'helper';
      text: string;
    }
  | undefined;

export default Input;
