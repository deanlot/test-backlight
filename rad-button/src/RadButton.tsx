import React from 'react';
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { Button, buttonStyles, FlexContainer, flexVariants, IconContainer } from './RadButton.styles';
import spinners from 'react-spinners';

export type Variant = 'primary' | 'secondary' | 'ghost';

export type IconPlacement = 'left' | 'right';

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> & {
  variant: Variant;
  icon?: ReactNode;
  iconPlacement?: IconPlacement;
  busy?: boolean;
};

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
      setIcon(<spinners.ClipLoader color='#2D3036' size={'18px'} />);
    } else {
      setIcon(rest.icon);
    }
  }, [busy]);

  return (
    <Button
      className={buttonStyles({ variant, clickable: !busy })}
      disabled={disabled}
      onClick={!busy && onClick}
    >
      <FlexContainer className={flexVariants({ iconPlacement })}>
        <span>{children}</span>
        {icon && <IconContainer>{icon}</IconContainer>}
      </FlexContainer>
    </Button>
  );
};

export default RadButton;
