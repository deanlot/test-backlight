import React, { MouseEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import Button, { ButtonProps } from '../../Button/src/Button';
import { animated, useSpring } from 'react-spring';

type OnClickAsync<T = any> = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<T>;

interface FeedbackButtonProps extends Omit<ButtonProps, 'onClick'> {
  /**
   * returns a Promise controls the success and failure gestures prompted to a user (based on promise success or failure).
   */
  onClick: OnClickAsync;
  /**
   * Use this to override the time that the success icon is displayed for
   */
  delay?: number;
  /**
   * Sets the button's busy state to true while the promise function in 'OnClick' is executing. Reverts back to original state regardless of success or failure.
   */
  inferBusy?: boolean;
}

const FeedbackButton = ({ onClick, delay, inferBusy, ...rest }: FeedbackButtonProps) => {
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();
  const [icon, setIcon] = useState<ReactNode>(rest.icon || undefined);
  const [busy, setBusy] = useState<boolean>(rest.busy || false);
  const [clickable, setClickable] = useState<boolean>(!busy);
  const [failed, setFailed] = useState<boolean>(false);

  const { x } = useSpring({
    from: { x: 1 },
    to: { x: 0 },
    reset: failed,
    immediate: !failed
  });

  useEffect(() => {
    console.info('failed in effect', failed);
  }, [failed]);

  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
    };
  }, [timer]);

  const handleClick = useCallback((e) => {
      if (clickable && !busy) {
        const updateButtonToNotClickableAndInvokeOnClick = (e) => {
          inferBusy && setBusy(true);
          setClickable(false);
          return onClick(e);
        };

        const debouncedRevertToInitialState = () => {
          if (inferBusy) {
            setBusy(rest.busy);
          }
          setClickable(true);
          return setTimer(setTimeout(() => {
            setIcon(rest.icon);
            setFailed(false);
          }, delay || 1200));
        };

        const showSuccessIcon = () => {
          return setIcon(<div>done</div>);
        };

        const shakeButton = (e) => {
          setFailed(true);
          throw new Error(e);
        };

        return Promise.resolve(e)
          .then(updateButtonToNotClickableAndInvokeOnClick)
          .catch(shakeButton)
          .then(showSuccessIcon)
          .finally(debouncedRevertToInitialState);
      }
    },
    [onClick, clickable, busy, inferBusy, setFailed, setIcon]
  );

  return <animated.div
    style={{
      transform: x
        .to({
          range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
          output: [0, 5, -5, 5, -5, 5, -5, 0]
        })
        .to(x => `translate3d(${x}px, 0px, 0px)`)
    }}
  ><Button {...rest} onClick={handleClick} icon={icon} busy={busy} /></animated.div>;
};

export default FeedbackButton;