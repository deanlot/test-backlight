import React from 'react';
import Button from '../src/Button';
import { layout } from '../../utils/src/story-decorator';

export default layout;

export const primaryReady = () => (
  <Button
    variant={'primary'}
    onClick={(e) => {
      console.log('click');
    }}
  >
    PRIMARY
  </Button>
);

export const primaryBusy = () => (
  <Button variant={'primary'} busy>
    PRIMARY
  </Button>
);

export const primaryBusyIconOnly = () => <Button variant={'primary'} busy />;

export const primaryDisabled = () => (
  <Button variant={'primary'} disabled>
    PRIMARY
  </Button>
);

export const secondaryReady = () => (
  <Button
    variant={'secondary'}
    onClick={() =>
      new Promise<boolean>((resolve, reject) => {
        console.log('clicked promise');
        return reject(true);
      })
    }
  >
    SECONDARY
  </Button>
);

export const secondaryBusy = () => (
  <Button variant={'secondary'} busy>
    SECONDARY
  </Button>
);

export const secondaryDisabled = () => (
  <Button variant={'secondary'} disabled>
    SECONDARY
  </Button>
);

export const ghostReady = () => <Button variant={'ghost'}>SECONDARY</Button>;

export const ghostBusy = () => (
  <Button variant={'ghost'} busy>
    SECONDARY
  </Button>
);

export const ghostDisabled = () => (
  <Button variant={'ghost'} disabled>
    SECONDARY
  </Button>
);

// export const primaryWithIcon = () => <RadButton variant={'primary'} icon={<div>testCOmponent</div>}>PRIMARY ICON</RadButton>;
