import React, { ReactElement, ReactNode, useCallback, useState } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { Container, Content, Header, Overlay } from './Modal.styles';
import Button from '../../Button/src/Button';
import { useTheme } from '../../theme-provider';
import CloseIcon from '../../icon/icons/CloseIcon/src/CloseIcon';
import { animated, useSpring } from 'react-spring';

/**
 * The modal component is used to hoist content over the primary content.
 */
const Modal = ({ children, trigger, title, open, showClose = true, ...rest }: ModalProps): ReactElement => {
  const { themeClass: theme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const onOpenChange = useCallback(
    (open: boolean) => {
      setIsOpen(open);
      rest.onOpenChange && rest.onOpenChange(open);
    },
    [rest.onOpenChange]
  );
  const spring = useSpring({
    from: { backgroundColor: 'red' },
    to: { backgroundColor: 'green' },
    config: { duration: 700 },
    immediate: rest.defaultOpen,
    reset: isOpen,
  });
  return (
    <RadixDialog.Root modal={true} open={isOpen} onOpenChange={onOpenChange} {...rest}>
      <RadixDialog.Overlay asChild className={theme}>
        <Overlay />
      </RadixDialog.Overlay>
      {open === undefined && (
        <RadixDialog.Trigger asChild>{trigger || <Button variant={'outline'}>Open</Button>}</RadixDialog.Trigger>
      )}
      <animated.div style={spring}>
        <Container className={theme}>
          <Header>
            <RadixDialog.Title>{title}</RadixDialog.Title>
            {showClose && (
              <RadixDialog.Close asChild={showClose}>
                <Button variant={'ghost'} icon={<CloseIcon size={'m'} />} />
              </RadixDialog.Close>
            )}
          </Header>
          <Content>{children}</Content>
        </Container>
      </animated.div>
    </RadixDialog.Root>
  );
};

interface ModalProps extends Omit<RadixDialog.DialogProps, 'modal'> {
  /**
   * Provides an override for the default button trigger.
   */
  trigger?: ReactNode;
  /**
   * Adds a title to the title section of the modal
   */
  title?: string;
  /**
   * opt in to showing the modal's close button on the top right of the modal. Allows a user to close the modal without completing the action embedded inside.
   */
  showClose?: boolean;
}

export default Modal;
