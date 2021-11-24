import React, { MouseEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import { BaseButton, BaseButtonProps } from '../../Button/src/BaseButton';

type OnClickAsync<T = any> = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<T>;

type FeedbackButtonProps = Omit<BaseButtonProps, 'onClick'> & {
  onClickAsync?: OnClickAsync;
  delay?: number;
}

const FeedbackButton = ({ onClickAsync, busy, delay, ...rest }: FeedbackButtonProps) => {
  const [clickable, setClickable] = useState<boolean>(!busy);
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
      const updateButtonToNotClickableAndInvokeOnClickAsync = (e) => {
        if (clickable) {
          setClickable(false);
          return onClickAsync(e);
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
        .then(updateButtonToNotClickableAndInvokeOnClickAsync)
        .catch(shakeButton)
        .then(showSuccessIcon)
        .finally(debouncedRevertToInitialState);
    },
    [onClickAsync]
  );

  return <BaseButton {...rest} onClick={handleClick} icon={icon} />;
};

export default FeedbackButton;