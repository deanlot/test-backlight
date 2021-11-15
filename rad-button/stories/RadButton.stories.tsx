import React from 'react';
import RadButton from '../src/RadButton';
import { layout } from '../../rad-utils/src/story-decorator';
export default layout;

export const secondary = () => (
  <RadButton variant={'secondary'}>Lekker</RadButton>
);

export const primary = () => <RadButton variant={'primary'}>PRIMARY</RadButton>;
