import React from 'react';
import CheckIcon from '../src/CheckIcon';
import { layout } from '../../utils/src/story-decorator';
export default layout;

export const CheckSmall = () => <CheckIcon size="s" color="red" />;
export const CheckMedium = () => <CheckIcon />;
export const CheckLarge = () => <CheckIcon size="l" color="blue" />;
export const CheckExtraLarge = () => <CheckIcon size="xl" fill="green" color="pink" />;
