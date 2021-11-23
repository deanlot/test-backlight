import React from 'react';
import { ButtonHTMLAttributes, ReactNode, useEffect, useState, MouseEvent } from 'react';
import {
  Button,
  buttonStyles,
  FlexContainer,
  flexVariants,
  IconContainer,
  iconContainerStyles,
} from './RadButton.styles';
import Loading from './Loading/Loading';

export type Variant = 'primary' | 'secondary' | 'ghost';

export type IconPlacement = 'left' | 'right';

type onClickPromise = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<boolean>;
type onClickSynchronous = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type onClick = onClickSynchronous | onClickPromise;

export interface RadButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'onClick'> {
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
  /**
   * If true, the button will display a check icon on completion of the onClick
   */
  notifySuccess?: boolean;
  /**
   * If true, the button will display a "shudder" animation on rejection/error of the onClick
   */
  notifyFailure?: boolean;
  /**
   * Accepts both a promise and a synchronous function to run when a button click is triggered
   */
  onClick?: onClick;
}

/**
 Button component that the user can press to trigger an action.
 */
export const RadButton = ({
  children,
  variant = 'primary',
  disabled = false,
  busy = false,
  notifySuccess = false,
  notifyFailure = false,
  iconPlacement = 'right',
  onClick,
  ...rest
}: RadButtonProps) => {
  const [icon, setIcon] = useState<ReactNode>(rest.icon || undefined);
  const [done, setDone] = useState<boolean>(false);
  const clickable = !busy && !done;

  const setIcon2 = () => {
    if (!disabled && busy) {
      setIcon(<Loading />);
    } else {
      setIcon(rest.icon);
    }
  };

  useEffect(() => {
    setIcon2();
  }, [busy, disabled, rest.icon]);

  const handleNotification = (result: boolean) => {
    const resultingIcon = result ? <div>done</div> : <div>woops</div>;
    setIcon(resultingIcon);
    setDone(true);
    setTimeout(() => {
      setDone(false);
      setIcon2();
    }, 1200);
  };

  const handleClick = (e) =>
    onClick &&
    // @ts-expect-error onClick can return void but Promise.resolve typing requests a boolean
    Promise.resolve(onClick(e))
      // show success icon for 1200 ms
      .then((res) => {
        if (notifySuccess) {
          handleNotification(true);
        }
      })
      // animate with shudder or something
      .catch((e) => {
        if (notifyFailure) {
          handleNotification(false);
        }
      });

  // this is disgusting!!!
  const iconPlacementPadding = children ? (icon ? iconPlacement : 'noIcon') : 'center';

  return (
    <Button
      className={buttonStyles({ variant, clickable, iconPlacementPadding: iconPlacementPadding })}
      disabled={disabled}
      // onClick must have a ternary that defaults to undefined to prevent compiler errors
      onClick={clickable ? handleClick : undefined}
      role="button"
    >
      <FlexContainer className={flexVariants(!!icon && { iconPlacement })}>
        {children && <span>{children}</span>}
        {icon && <IconContainer className={iconContainerStyles({ children: !!children })}>{icon}</IconContainer>}
      </FlexContainer>
    </Button>
  );
};

export default RadButton;
