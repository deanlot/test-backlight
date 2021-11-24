import React, { MouseEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import Button, { ButtonProps } from '../../Button/src/Button';

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
      }
    },
    [onClick, clickable, busy, inferBusy]
  );

  return <Button {...rest} onClick={handleClick} icon={icon} busy={busy} />;
};

export default FeedbackButton;