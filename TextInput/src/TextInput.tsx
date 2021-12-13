import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import {
  IconContainer,
  iconContainerStyles,
  InputContainer,
  inputContainerStyles,
  LayoutContainer,
  MessageContainer,
  StyledInput,
  SymbolContainer,
} from './TextInput.styles';
import WarningSymbol from '../../icon/symbols/WarningSymbol/src/WarningSymbol';
import { HelperText, LabelText } from '~/Typography';

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
      label,
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
      if (label.length > 30) {
        console.warn('Input component label cannot exceed 30 characters.');
        return label.substring(0, 30);
      }

      return label;
    };

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
      <LayoutContainer>
        {label && (
          <label htmlFor={id}>
            <LabelText uppercase bold variant="small" color="$onSurface-textMuted">
              {getLabel()}
            </LabelText>
          </label>
        )}
        <InputContainer
          className={`${inputContainerStyles({
            focused,
            disabled,
            error: !!error,
            empty: !value,
          })}`}
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
            data-testid="input"
          />
          {iconSuffix && (
            <IconContainer className={iconContainerStyles({ iconPlacement: 'right' })}>{iconSuffix}</IconContainer>
          )}
        </InputContainer>
        <MessageContainer>
          {error && (
            <SymbolContainer>
              <WarningSymbol size="m" />
            </SymbolContainer>
          )}
          <HelperText variant={error ? 'error' : null}>{message?.text}</HelperText>
        </MessageContainer>
      </LayoutContainer>
    );
  }
);

export interface TextInputProps extends HTMLInputProps {
  label?: string;
  helper?: string;
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
