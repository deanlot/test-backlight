import React, { MouseEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import { BaseButtonProps, Button } from '../../Button/src/Button';

type OnClickAsync<T = any> = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<T>;

interface FeedbackButtonProps extends Omit<BaseButtonProps, 'onClick'> {
  onClick?: OnClickAsync;
  delay?: number;
  inferBusy?: boolean;
}

const FeedbackButton = ({ onClick, delay, inferBusy, ...rest }: FeedbackButtonProps) => {
  const [clickable, setClickable] = useState<boolean>(!rest.busy);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();
  const [icon, setIcon] = useState<ReactNode>(rest.icon || undefined);


  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
    };
  }, [timer]);

  const { x } = useSpring({
    from: { x: 0 },
    to: { x: 1 }
  });

  const handleClick = useCallback((e) => {
      const updateButtonToNotClickableAndInvokeOnClick = (e) => {
        if (clickable) {
          setClickable(false);
          return onClick(e);
        }
        return e;
      };

      const debouncedRevertToInitialState = () => {
        setClickable(true);
        return setTimer(setTimeout(() => setIcon(rest.icon), delay || 1200));
      };

      const showSuccessIcon = () => {
        return setIcon(<div>done</div>);
      };

      const shakeButton = () => {
        return setIcon(<div>whoops</div>);
      };

      return Promise.resolve(e)
        .then(updateButtonToNotClickableAndInvokeOnClick)
        .catch(shakeButton)
        .then(showSuccessIcon)
        .finally(debouncedRevertToInitialState);
    },
    [onClick]
  );

  return <Button {...rest} onClick={handleClick} icon={icon} />;
};

export default FeedbackButton;