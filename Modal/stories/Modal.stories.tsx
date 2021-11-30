import React, { useState } from 'react';
import Modal from '../src/Modal';
import { layout } from '../../utils/src/story-decorator';
import Button from '../../Button/src/Button';

export default layout;

export const controlled = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant={'primary'} onClick={() => {
        setOpen(true);
      }}>I control the modal</Button>
      <Modal onOpenChange={setOpen} open={open}>
        Some modal content
      </Modal>
    </>
  );
};

export const embeddedTrigger = () => {
  return (
    <Modal trigger={<Button variant={'secondary'}>Click here</Button>}>
      Some modal content
    </Modal>);
};

export const title = () => {
  return (
    <Modal trigger={<Button variant={'secondary'}>Click here</Button>} title={'Title here'}>
      Some modal content
    </Modal>);
};