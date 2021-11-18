import React from 'react';
import  { ButtonHTMLAttributes, ReactNode, useEffect, useState } from 'react'
import {
  buttonStyles, ButtonText, FlexContainer,
} from './RadButton.styles';

export type Variant = 'primary' | 'secondary' | 'ghost'

export type IconPlacement = 'left' | 'right'

export enum ButtonStatus {
  Ready = 'ready',
  Busy = 'busy',
  Done = 'done'
}

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  variant: Variant;
  icon?: ReactNode;
  iconPlacement?: IconPlacement;
  // busy?: boolean;
  status?: ButtonStatus
}

const RadButton = ({
  children,
  variant = 'secondary',
  iconPlacement = 'right',
  disabled = false,
  ...rest
}: ButtonProps) => {
  // const [disabled, setDisabled] = useState<boolean>(rest.disabled)
  const [icon, setIcon] = useState<ReactNode>(rest.icon)
  const [clickable, setClickable] = useState<boolean>(true)
  // const [status, setStatus] = useState<ButtonStatus>(rest.status || ButtonStatus.Ready)

  // useEffect(() => {
  //   if(rest.busy) {
  //     setIcon(<div>busy</div>)
  //   } else {
  //     setIcon(rest.icon)
  //   }
  //
  //   setDisabled(rest.busy)
  // }, [rest.busy])

  useEffect(() => {
    switch(rest.status) {
      case ButtonStatus.Busy: {
        // do busy stuff
        setClickable(false)
        setIcon(<div>busy</div>)
      }
      break;
      case ButtonStatus.Done: {
        // do complete stuff
        setClickable(false)
        setIcon(<div>done</div>)
      }
      break;
      default: {
        // do ready stuff
        setClickable(true)
        setIcon(rest.icon)
      }
    }
  }, [rest.status])

  return (
    <button className={buttonStyles({variant, clickable} )} disabled={disabled}>
      <FlexContainer iconPlacement={iconPlacement}>
        <ButtonText>{children}</ButtonText>
        <div>{icon}</div>
      </FlexContainer>
    </button>
  )
};

export default RadButton;
