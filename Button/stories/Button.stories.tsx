import React from 'react';
import Button from '../src/Button';
import { StoryLayout } from '../../layout';
import CloseIcon from '~/icon/icons/CloseIcon/src/CloseIcon';
import ArrowRightIcon from '~/icon/icons/ArrowRightIcon/src/ArrowRightIcon';

export default StoryLayout;

export const solidReady = () => (
  <Button
    onClick={(e) => {
      console.log('click');
    }}
  >
    SOLID
  </Button>
);

export const solidBusy = () => <Button busy>SOLID</Button>;

export const solidIconWithText = () => <Button icon={<ArrowRightIcon />}>solid</Button>;

export const solidIconOnly = () => <Button icon={<CloseIcon />} />;

export const solidDisabled = () => <Button disabled>SOLID</Button>;

export const outlineReady = () => (
  <Button
    variant={'outline'}
    onClick={() =>
      new Promise<boolean>((resolve, reject) => {
        console.log('clicked promise');
        return reject(true);
      })
    }
  >
    OUTLINE
  </Button>
);

export const outlineBusy = () => (
  <Button variant={'outline'} busy>
    OUTLINE
  </Button>
);

export const outlineDisabled = () => (
  <Button variant={'outline'} disabled>
    OUTLINE
  </Button>
);

export const ghostReady = () => <Button variant={'ghost'}>GHOST</Button>;

export const ghostBusy = () => (
  <Button variant={'ghost'} busy>
    GHOST
  </Button>
);

export const ghostDisabled = () => (
  <Button variant={'ghost'} disabled>
    GHOST
  </Button>
);
