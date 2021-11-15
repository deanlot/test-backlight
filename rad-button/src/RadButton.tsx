import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { BaseButton, ButtonText, Container } from './RadButton.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
  iconPlacement?: 'left' | 'right';
}

const RadButton = ({
  children,
  variant,
  disabled = false,
  icon,
  iconPlacement = 'right',
}: ButtonProps) => (
  <BaseButton variant={variant} disabled={disabled}>
    <h1>Jason was here!!!!</h1>
    <Container>
      <ButtonText>{children}</ButtonText>
      {iconPlacement === 'right' && <div>{icon}</div>}
    </Container>
  </BaseButton>
);

export default RadButton;
