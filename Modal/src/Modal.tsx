import React, { ReactElement, ReactNode } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { Container, Content, Header, Overlay } from './Modal.styles';
import Button from '../../Button/src/Button';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useTheme } from '../../theme-provider';

/**
 * The modal component is used to hoist content over the primary content.
 */
const Modal = ({ children, trigger, title, showClose = true, ...rest }: ModalProps): ReactElement => {
  const { stitchesTheme: theme } = useTheme();
  return (
    <RadixDialog.Root {...rest}>
      <RadixDialog.Overlay asChild className={theme}>
        <Overlay />
      </RadixDialog.Overlay>
      {trigger && <RadixDialog.Trigger asChild={!!trigger}>{trigger || 'Open'}</RadixDialog.Trigger>}
      <Container className={theme}>
        <Header>
          <RadixDialog.Title>{title}</RadixDialog.Title>
          {showClose && (
            <RadixDialog.Close asChild={showClose}>
              <Button variant={'ghost'} icon={<Cross2Icon />} />
            </RadixDialog.Close>
          )}
        </Header>
        <Content>{children}</Content>
      </Container>
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
