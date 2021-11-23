import React from 'react';
import RadButton from '../src/RadButton';
import { layout } from '../../rad-utils/src/story-decorator';

export default layout;

export const primaryReady = () => (
  <RadButton
    variant={'primary'}
    showOnClickResult
    onClick={(e) => {
      console.log('click');
    }}
  >
    PRIMARY
  </RadButton>
);

export const primaryBusy = () => (
  <RadButton variant={'primary'} busy>
    PRIMARY
  </RadButton>
);

export const primaryBusyIconOnly = () => <RadButton variant={'primary'} busy />;

export const primaryDisabled = () => (
  <RadButton variant={'primary'} disabled>
    PRIMARY
  </RadButton>
);

export const secondaryReady = () => (
  <RadButton
    variant={'secondary'}
    showOnClickResult
    onClick={() =>
      new Promise<boolean>((resolve, reject) => {
        console.log('clicked promise');
        return reject(true);
      })
    }
  >
    SECONDARY
  </RadButton>
);

export const secondaryBusy = () => (
  <RadButton variant={'secondary'} busy>
    SECONDARY
  </RadButton>
);

export const secondaryDisabled = () => (
  <RadButton variant={'secondary'} disabled>
    SECONDARY
  </RadButton>
);

export const ghostReady = () => <RadButton variant={'ghost'}>SECONDARY</RadButton>;

export const ghostBusy = () => (
  <RadButton variant={'ghost'} busy>
    SECONDARY
  </RadButton>
);

export const ghostDisabled = () => (
  <RadButton variant={'ghost'} disabled>
    SECONDARY
  </RadButton>
);

// export const primaryWithIcon = () => <RadButton variant={'primary'} icon={<div>testCOmponent</div>}>PRIMARY ICON</RadButton>;
