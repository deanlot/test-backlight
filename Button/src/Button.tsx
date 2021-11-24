import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import {
  buttonStyles,
  FlexContainer,
  flexVariants,
  IconContainer,
  iconContainerStyles,
  StyledButton
} from './BaseButton.styles';
import Loading from './Loading/Loading';

/**
 Button component that the user can press to trigger an action.
 */
export const Button = ({
                             children,
                             variant = 'primary',
                             disabled = false,
                             iconPlacement = 'right',
                             busy = false,
                             ...rest
                           }: BaseButtonProps) => {

  const icon = !disabled && busy ? <Loading /> : rest.icon;

  return (
    <StyledButton
      className={buttonStyles({ variant, icon: !children && !!icon })}
      disabled={disabled}
      role='button'
      {...rest}
    >
      <FlexContainer className={flexVariants(!!icon && { iconPlacement })}>
        {children && <span>{children}</span>}
        {icon && <IconContainer className={iconContainerStyles({ children: !!children })}>{icon}</IconContainer>}
      </FlexContainer>
    </StyledButton>
  );
};

type Variant = 'primary' | 'secondary' | 'ghost';
type IconPlacement = 'left' | 'right';

export interface BaseButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /**
   * Variant of the button
   */
  variant: Variant;
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
