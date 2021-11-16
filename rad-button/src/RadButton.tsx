import React, { ButtonHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { BaseButton, ButtonText, Container, IconPlacement } from './RadButton.styles';

export type Variant = 'primary' | 'secondary' | 'ghost'


interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  variant: Variant;
  icon?: ReactNode;
  iconPlacement?: IconPlacement;
  busy?: boolean;
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

  return (<BaseButton variant={variant} {...props}>
    <Container iconPlacement={iconPlacement}>
      <ButtonText>{children}</ButtonText>
      <div>{icon}</div>
    </Container>
  </BaseButton>)
};

export default RadButton;
