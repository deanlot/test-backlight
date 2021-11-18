import React from 'react';
import  { ButtonHTMLAttributes, ReactNode, useEffect, useState } from 'react'
import {
  Button,
  FlexContainer, IconContainer
} from './RadButton.styles';
import spinners from 'react-spinners';

export type Variant = 'primary' | 'secondary' | 'ghost'

export type IconPlacement = 'left' | 'right'

// export enum ButtonStatus {
//   Ready = 'ready',
//   Busy = 'busy',
//   Done = 'done'
// }

export type Status = 'ready' | 'busy' | 'done'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  variant: Variant;
  icon?: ReactNode;
  iconPlacement?: IconPlacement;
  status?: Status
  busy?: boolean;
}

const RadButton = ({
  children,
  variant = 'secondary',
  iconPlacement = 'right',
  disabled,
  busy,
  ...rest
}: ButtonProps) => {
  const [icon, setIcon] = useState<ReactNode>(rest.icon)

  useEffect(() => {
    if(!disabled && busy) {
      setIcon(
        <spinners.ClipLoader
        color='#2D3036'
        size={'18px'}
      />)
    } else {
      setIcon(rest.icon)
    }

  }, [busy])

  return (
    <Button.Comp className={Button.styles({variant, clickable: !busy} )} disabled={disabled}>
      <FlexContainer.Comp className={FlexContainer.styles({iconPlacement})} >
        <span>{children}</span>
        { icon && <IconContainer.Comp className={IconContainer.styles()}>{icon}</IconContainer.Comp> }
      </FlexContainer.Comp>
    </Button.Comp>
  )
};

export default RadButton;
