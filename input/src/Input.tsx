import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import {
  Container,
  errorStyles,
  helperStyles,
  IconContainer,
  iconContainerStyles,
  InputContainer,
  inputContainerStyles,
  inputStyles,
  Label,
  MessageContainer,
  StyledInput,
  WarningSymbolContainer,
} from './Input.styles';
import WarningSymbol from '../../icon/symbols/WarningSymbol/WarningSymbol';
import Button from '../../Button/src/Button';
import CloseIcon from '../../icon/icons/CloseIcon/src/CloseIcon';
import BlockSymbol from '../../icon/symbols/BlockSymbol/BlockSymbol';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, onFocus, onBlur, onClear, disabled, helper, error, icon, iconPlacement, textAlign = 'left', ...props },
    ref
  ) => {
    const helperMessage: Message = { type: 'helper', text: helper };
    const errorMessage: Message = { type: 'error', text: error };

    const [message, setMessage] = useState<Message>(error && errorMessage);
    const [focused, setFocused] = useState<boolean>(false);

    // TODO: we should wrap onClear in useCallback if we can so the consumer doesnt need to worry about it

    useEffect(() => {
      // TODO: this can be neatened
      if (error) {
        error && setMessage(errorMessage);
      } else {
        if (helper) {
          setMessage(helperMessage);
        } else {
          setMessage(undefined);
        }
      }
    }, [error]);

    const getLabel = () => {
      if (props?.label.length > 30) {
        console.warn('Input component label cannot exceed 30 characters.');
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
        {props.label && <Label htmlFor={id}>{getLabel()}</Label>}
        <InputContainer className={`${inputContainerStyles({ error: !!error, focused, iconPlacement })}`} tabIndex={0}>
          <StyledInput
            {...props}
            disabled={disabled}
            className={inputStyles({ error: !!error })}
            css={{ textAlign: textAlign }}
            id={id}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
            type="text"
            maxLength={60}
            tabIndex={-1}
          />
          {icon && (
            <IconContainer className={iconContainerStyles({ iconPlacement })}>
              {/*{!disabled && onClear && <Button icon={<CloseIcon size="s" />} onClick={onClear} variant="ghost" />}*/}
              {icon}
            </IconContainer>
          )}
        </InputContainer>
        <MessageContainer>
          {error && <BlockSymbol />}
          {message && <span className={messageStyles()}>{message?.text}</span>}
        </MessageContainer>
      </Container>
    );
  }
);

export type InputProps = {
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
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Message =
  | {
      type: 'error' | 'helper';
      text: string;
    }
  | undefined;

export default Input;
