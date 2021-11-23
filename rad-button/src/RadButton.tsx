import React, { ButtonHTMLAttributes, MouseEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import {
  Button,
  buttonStyles,
  FlexContainer,
  flexVariants,
  IconContainer,
  iconContainerStyles
} from './RadButton.styles';
import Loading from './Loading/Loading';

/**
 Button component that the user can press to trigger an action.
 */
export const RadButton = ({
                            children,
                            variant = 'primary',
                            disabled = false,
                            notifySuccess = false,
                            notifyFailure = false,
                            iconPlacement = 'right',
                            onClick = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => Promise.resolve(e),
                            busy = false,
                            ...rest
                          }: RadButtonProps) => {
  const [icon, setIcon] = useState<ReactNode>(rest.icon || undefined);
  // const [done, setDone] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>();
  const [clickable, setClickable] = useState<boolean>(!busy);

  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
    };
  }, [timer]);

  useEffect(() => {
    if (!disabled && busy) {
      setIcon(<Loading />);
    } else {
      setIcon(rest.icon);
    }
  }, [busy, disabled, rest.icon]);

  const showSuccess = useCallback((result) => {
    if (notifySuccess) {
      setIcon(<div>done</div>);
    }
    return result;
  }, [notifySuccess]);

  const showFailed = useCallback((error) => {
    if (notifyFailure) {
      setIcon(<div>whoops</div>);
    }
    throw error;
  }, [notifyFailure]);


  const handleClick = useCallback((e) =>
    Promise.resolve(e)
      .then((e) => {
        if (clickable) {
          setClickable(false);
          return onClick(e);
        }
        return e;
      })
      .then(showSuccess)
      .catch(showFailed)
      .finally(() => {
        setClickable(true);
        // @ts-expect-error not a NodeJS.Timeout
        setTimer(setTimeout(() => setIcon(rest.icon), 1200));
      }), [showSuccess, showFailed]);

  // this is disgusting!!!
  const iconPlacementPadding = children ? (icon ? iconPlacement : 'noIcon') : 'center';

  return (
    <Button
      className={buttonStyles({ variant, clickable, iconPlacementPadding: iconPlacementPadding })}
      disabled={disabled}
      // onClick must have a ternary that defaults to undefined to prevent compiler errors
      onClick={clickable ? handleClick : undefined}
      role='button'
      {...rest}
    >
      <FlexContainer className={flexVariants(!!icon && { iconPlacement })}>
        {children && <span>{children}</span>}
        {icon && <IconContainer className={iconContainerStyles({ children: !!children })}>{icon}</IconContainer>}
      </FlexContainer>
    </Button>
  );
};

export type Variant = 'primary' | 'secondary' | 'ghost';

export type IconPlacement = 'left' | 'right';

type onClickAsync<T = any> = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<T>;
type onClickSync = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
type onClick = onClickSync | onClickAsync;

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

export default RadButton;
