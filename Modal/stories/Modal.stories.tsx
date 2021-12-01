import React, { useState } from 'react';
import Modal from '../src/Modal';
import { StoryLayout } from '~/layout';
import Button from '../../Button/src/Button';

export default StoryLayout;

export const controlled = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant={'solid'}
        onClick={() => {
          setOpen(true);
        }}
      >
        I control the modal
      </Button>
      <Modal onOpenChange={setOpen} open={open}>
        Some modal content
      </Modal>
    </>
  );
};

export const embeddedTrigger = () => {
  return <Modal trigger={<Button variant={'outline'}>Click here</Button>}>Some modal content</Modal>;
};

export const title = () => {
  return (
    <Modal trigger={<Button variant={'outline'}>Click here</Button>} title={'Title here'}>
      Some modal content
    </Modal>
  );
};
