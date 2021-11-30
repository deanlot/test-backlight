import React from 'react';
import CheckIcon from '../icons/CheckIcon/CheckIcon';
import { layout } from '../../utils/src/story-decorator';
export default layout;

export const IconSmall = () => <CheckIcon size="s" color="red" />;
export const IconMedium = () => <CheckIcon />;
export const IconLarge = () => <CheckIcon size="l" color="blue" />;
export const IconExtraLarge = () => <CheckIcon size="xl" fill="green" color="pink" />;
