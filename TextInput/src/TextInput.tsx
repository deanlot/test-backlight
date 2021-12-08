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
} from './TextInput.styles';
import WarningSymbol from '../../icon/symbols/WarningSymbol/WarningSymbol';

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id,
      onFocus,
      onBlur,
      disabled,
      onClick,
      helper,
      error,
      iconSuffix,
      iconPrefix,
      textAlign = 'left',
      value,
      ...props
    },
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

    const handleClick = (e) => {
      setFocused(true);
      onClick && onClick(e);
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
          })}`}
          tabIndex={0}
          data-testid="input-test-container"
          onClick={handleClick}
        >
          {iconPrefix && (
            <IconContainer className={iconContainerStyles({ iconPlacement: 'left' })}>{iconPrefix}</IconContainer>
          )}
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
            data-testid="input"
          />
          {iconSuffix && (
            <IconContainer className={iconContainerStyles({ iconPlacement: 'right' })}>{iconSuffix}</IconContainer>
          )}
        </InputContainer>
        <MessageContainer>
          {error && <WarningSymbol />}
          {message && <span className={messageStyles()}>{message?.text}</span>}
        </MessageContainer>
      </Container>
    );
  }
);

export interface TextInputProps extends HTMLInputProps {
  label?: string;
  helper?: string;
  // should id or name be made required, since it would affect accessibility for the "htmlFor" attribute
  id?: string;
  error?: string;
  textAlign?: 'left' | 'right';
  iconPrefix?: ReactNode;
  iconSuffix?: ReactNode;
}

type HTMLInputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'style'>;

type Message =
  | {
      type: 'error' | 'helper';
      text: string;
    }
  | undefined;

export default TextInput;
