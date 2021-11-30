import React, { ReactElement, ReactNode } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { Container, Content, Header, Overlay } from './Modal.styles';
import { useTheme } from '../../utils/src/ThemeProvider';
import Button from '../../Button/src/Button';
import { Cross2Icon } from '@radix-ui/react-icons';

/**
 * The modal component is used to hoist content over the primary content.
 */
const Modal = ({ children, trigger, open, title, showClose = true, ...rest }: ModalProps): ReactElement => {
  const { theme } = useTheme();
  return (
    <RadixDialog.Root modal={true} open={open} {...rest}>
      <Overlay className={theme} />
      {trigger && <RadixDialog.Trigger asChild={!!trigger}>{trigger || 'Open'}</RadixDialog.Trigger>}
      <Container className={theme}>
        <Header>
          {title && <RadixDialog.Title>{title}</RadixDialog.Title>}
          {showClose && <RadixDialog.Close asChild={showClose}>
            <Button variant={'ghost'} icon={<Cross2Icon />} />
          </RadixDialog.Close>}
        </Header>
        <Content>
          {children}
        </Content>
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