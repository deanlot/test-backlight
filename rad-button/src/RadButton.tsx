import React from 'react';
import { ButtonHTMLAttributes, ReactNode, useEffect, useState, MouseEvent } from 'react';
import { Button, FlexContainer, IconContainer } from './RadButton.styles';
import spinners from 'react-spinners';

export type Variant = 'primary' | 'secondary' | 'ghost';

export type IconPlacement = 'left' | 'right';

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'onClick'> & {
  variant: Variant;
  icon?: ReactNode;
  iconPlacement?: IconPlacement;
  busy?: boolean;
  notifySuccess?: boolean;
  notifyFailure?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => Promise<boolean>;
};

const RadButton = ({
  children,
  variant = 'secondary',
  iconPlacement = 'right',
  disabled = false,
  busy = false,
  notifySuccess = false,
  notifyFailure = false,
  onClick,
  ...rest
}: ButtonProps) => {
  const [icon, setIcon] = useState<ReactNode>(rest.icon);
  const [done, setDone] = useState<boolean>(false);

  const setIcon2 = () => {
    if (!disabled && busy) {
      setIcon(<spinners.ClipLoader color="#2D3036" size={'18px'} />);
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
    !done &&
    onClick(e)
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

  return (
    <div>
      <Button.Comp
        className={Button.styles({ variant, clickable: !busy || !done })}
        disabled={disabled}
        onClick={!busy && handleClick}
        role="button"
      >
        <FlexContainer.Comp className={FlexContainer.styles({ iconPlacement })}>
          <span>{children}dsdsdsdsdd</span>
          {icon && <IconContainer>{icon}</IconContainer>}
        </FlexContainer.Comp>
      </Button.Comp>
    </div>
  );
};

export default RadButton;
