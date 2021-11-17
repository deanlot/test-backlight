import React, { ButtonHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import {
  IconPlacement,
  SCBaseButton2,
  StitchesBaseButton,
  StitchesButtonText,
  StitchesContainer
} from './RadButton.styles';

export type Variant = 'primary' | 'secondary' | 'ghost'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  variant: Variant;
  icon?: ReactNode;
  iconPlacement?: IconPlacement;
  busy?: boolean;
  outlined?: boolean;
}

/*
add a busy state: boolean -> rendered state is disabled with a loading spinner
  1. first we need to disable the button
  2. we need to add an icon
 */

const RadButton = ({
  children,
  variant = 'secondary',
  iconPlacement = IconPlacement.Right,
  ...rest
}: ButtonProps) => {
  const [disabled, setDisabled] = useState<boolean>(rest.disabled)
  // const [busy, setBusy] = useState<boolean>(rest.busy)
  const [icon, setIcon] = useState<ReactNode>(rest.icon)
  useEffect(() => {
    if(rest.busy) {
      setIcon(<div>busy</div>)
    } else {
      setIcon(rest.icon)
    }

    setDisabled(rest.busy)
  }, [rest.busy])

  const props = { ...rest, disabled}

  return (<SCBaseButton2 variant={variant} {...props}>
    <StitchesContainer iconPlacement={iconPlacement}>
      <StitchesButtonText>{children}</StitchesButtonText>
      <div>{icon}</div>
    </StitchesContainer>
  </SCBaseButton2>)
};

export default RadButton;
