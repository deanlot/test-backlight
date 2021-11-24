import React from 'react';
import RadButton from '../src/RadButton';
import { layout } from '../../rad-utils/src/story-decorator';

export default layout;

export const solidReady = () => (
  <RadButton
    variant={'solid'}
    showOnClickResult
    onClick={(e) => {
      console.log('click');
    }}
  >
    SOLID
  </RadButton>
);

export const solidBusy = () => (
  <RadButton variant={'solid'} busy>
    SOLID
  </RadButton>
);

export const solidBusyIconOnly = () => <RadButton variant={'solid'} busy />;

export const solidDisabled = () => (
  <RadButton variant={'solid'} disabled>
    SOLID
  </RadButton>
);

export const outlineReady = () => (
  <RadButton
    variant={'outline'}
    showOnClickResult
    onClick={() =>
      new Promise<boolean>((resolve, reject) => {
        console.log('clicked promise');
        return reject(true);
      })
    }
  >
    OUTLINE
  </RadButton>
);

export const outlineBusy = () => (
  <RadButton variant={'outline'} busy>
    OUTLINE
  </RadButton>
);

export const outlineDisabled = () => (
  <RadButton variant={'outline'} disabled>
    OUTLINE
  </RadButton>
);

export const ghostReady = () => <RadButton variant={'ghost'}>OUTLINE</RadButton>;

export const ghostBusy = () => (
  <RadButton variant={'ghost'} busy>
    OUTLINE
  </RadButton>
);

export const ghostDisabled = () => (
  <RadButton variant={'ghost'} disabled>
    OUTLINE
  </RadButton>
);

// export const solidWithIcon = () => <RadButton variant={'solid'} icon={<div>testCOmponent</div>}>SOLID ICON</RadButton>;
