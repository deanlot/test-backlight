import React from 'react';
import RadButton from '../src/RadButton';
import { layout } from '../../rad-utils/src/story-decorator';
export default layout;

export const secondary = () => (
  <RadButton variant={'secondary'}>Lekker</RadButton>
);

export const primary = () => <RadButton variant={'primary'}>PRIMARY</RadButton>;

  const TestComponent = () => <div>testCOmponent</div>

export const primaryWithIcon = () => <RadButton variant={'primary'} icon={<div>testCOmponent</div>} busy={true} >PRIMARY ICON</RadButton>;
