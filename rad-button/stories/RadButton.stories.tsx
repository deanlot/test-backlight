import React from 'react';
import RadButton, { ButtonStatus } from '../src/RadButton';
import { layout } from '../../rad-utils/src/story-decorator';
export default layout;

export const primaryReady = () => <RadButton variant={'primary'}>PRIMARY</RadButton>;

export const primaryBusy = () => <RadButton variant={'primary'} status={ButtonStatus.Busy}>PRIMARY</RadButton>;

export const primaryDone = () => <RadButton variant={'primary'} status={ButtonStatus.Done}>PRIMARY</RadButton>;

export const primaryDisabled = () => <RadButton variant={'primary'} status={ButtonStatus.Ready} disabled={true}>PRIMARY</RadButton>;

export const secondaryReady = () => <RadButton variant={'secondary'}>SECONDARY</RadButton>;

export const secondaryBusy = () => <RadButton variant={'secondary'} status={ButtonStatus.Busy}>SECONDARY</RadButton>;

export const secondaryDone = () => <RadButton variant={'secondary'} status={ButtonStatus.Done}>SECONDARY</RadButton>;

export const secondaryDisabled = () => <RadButton variant={'secondary'} status={ButtonStatus.Ready} disabled={true}>SECONDARY</RadButton>;

export const ghostReady = () => <RadButton variant={'ghost'}>SECONDARY</RadButton>;

export const ghostBusy = () => <RadButton variant={'ghost'} status={ButtonStatus.Busy}>SECONDARY</RadButton>;

export const ghostDone = () => <RadButton variant={'ghost'} status={ButtonStatus.Done}>SECONDARY</RadButton>;

export const ghostDisabled = () => <RadButton variant={'ghost'} status={ButtonStatus.Ready} disabled={true}>SECONDARY</RadButton>;


// export const primaryWithIcon = () => <RadButton variant={'primary'} icon={<div>testCOmponent</div>}>PRIMARY ICON</RadButton>;
