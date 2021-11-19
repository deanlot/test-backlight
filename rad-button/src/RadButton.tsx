import React from 'react';
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { Button, FlexContainer, IconContainer } from './RadButton.styles';
import spinners from 'react-spinners';

export type Variant = 'primary' | 'secondary' | 'ghost';

export type IconPlacement = 'left' | 'right';

export type Status = 'ready' | 'busy' | 'done';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  variant: Variant;
  icon?: ReactNode;
  iconPlacement?: IconPlacement;
  busy?: boolean;
}

const RadButton = ({
  children,
  variant = 'secondary',
  iconPlacement = 'right',
  disabled,
  busy = false,
  onClick,
  ...rest
}: ButtonProps) => {
  const [icon, setIcon] = useState<ReactNode>(rest.icon);

  useEffect(() => {
    if (!disabled && busy) {
      setIcon(<spinners.ClipLoader color="#2D3036" size={'18px'} />);
    } else {
      setIcon(rest.icon);
    }
  }, [busy]);

  return (
    <Button.Comp
      className={Button.styles({ variant, clickable: !busy })}
      disabled={disabled}
      onClick={!busy && onClick}
    >
      <FlexContainer.Comp className={FlexContainer.styles({ iconPlacement })}>
        <span>{children}dsdsdsdsdd</span>
        {icon && <IconContainer>{icon}</IconContainer>}
      </FlexContainer.Comp>
    </Button.Comp>
  );
};

export default RadButton;
