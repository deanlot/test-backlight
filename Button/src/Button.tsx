import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import {
  buttonStyles,
  FlexContainer,
  flexVariants,
  IconContainer,
  iconContainerStyles,
  StyledButton,
} from './Button.styles';
import Loading from './Loading/Loading';
import { ActionText } from '~/Typography';

/**
 Button component that the user can press to trigger an action.
 */
const Button = ({
  variant = 'solid',
  disabled = false,
  iconPlacement = 'right',
  busy = false,
  ...rest
}: ButtonProps) => {
  const icon = !disabled && busy ? <Loading /> : rest.icon;
  const children = busy ? null : rest.children;

  return (
    <StyledButton
      className={buttonStyles({ variant, icon: !children && !!icon, clickable: !busy, children: !!children })}
      disabled={disabled}
      role="button"
      {...rest}
    >
      <FlexContainer className={flexVariants(!!icon && { iconPlacement })}>
        {children && (
          <ActionText variant="medium" uppercase>
            {children}
          </ActionText>
        )}
        {icon && <IconContainer className={iconContainerStyles({ children: !!children })}>{icon}</IconContainer>}
      </FlexContainer>
    </StyledButton>
  );
};

type Variant = 'solid' | 'outline' | 'ghost';
type IconPlacement = 'left' | 'right';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /**
   * Variant of the button
   */
  variant?: Variant;
  /**
   * Icon to be placed in the button
   */
  icon?: ReactNode;
  /**
   * Where the Icon should be placed
   */
  iconPlacement?: IconPlacement;
  /**
   * A busy state that prevent clicks and shows a loading spinner
   */
  busy?: boolean;
}

export default Button;
