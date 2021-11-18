import React from 'react';
import  { ButtonHTMLAttributes, ReactNode, useEffect, useState } from 'react'
import {
  buttonStyles, FlexContainer, IconContainer
} from './RadButton.styles';
import spinners from 'react-spinners';

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
  status?: ButtonStatus
  // busy?: boolean;
}

const RadButton = ({
  children,
  variant = 'secondary',
  iconPlacement = 'right',
  ...rest
}: ButtonProps) => {
  const [disabled, setDisabled] = useState<boolean>(rest.disabled)
  const [icon, setIcon] = useState<ReactNode>(rest.icon)
  const [clickable, setClickable] = useState<boolean>(true)

  // useEffect(() => {
  //   if(rest.busy) {
  //     setIcon(<div>busy</div>)
  //   } else {
  //     setIcon(rest.icon)
  //   }
  //
  //   setDisabled(rest.busy)
  // }, [rest.busy])

  // this feels like its just become a reducer?
  useEffect(() => {
    switch(rest.status) {
      case ButtonStatus.Busy: {
        // do busy stuff
        setClickable(false)
        setIcon(
          <spinners.ClipLoader
            color='#2D3036'
            size={'18px'}
          />
        )
        setDisabled(false)
      }
      break;
      case ButtonStatus.Done: {
        // do complete stuff
        setClickable(false)
        setIcon(<div>done</div>)
        setDisabled(false)
      }
      break;
      default: {
        // do ready stuff
        setClickable(true)
        setIcon(rest.icon)
        setDisabled(rest.disabled)
      }
    }
  }, [rest.status])

  return (
    <button className={buttonStyles({variant, clickable} )} disabled={disabled}>
      <FlexContainer iconPlacement={iconPlacement}>
        {/*<div className={flexContainerStyles({iconPlacement})}>*/}
        {/*  */}
        {/*</div>*/}
        <span>{children}</span>
        { icon && <IconContainer>{icon}</IconContainer> }
      </FlexContainer>
    </button>
  )
};

export default RadButton;
