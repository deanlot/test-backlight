import React from 'react';
import CheckIcon from '../src/CheckIcon';
import { layout } from '../../utils/src/story-decorator';
export default layout;

export const CheckSmall = () => <CheckIcon size="s" />;
export const CheckMedium = () => <CheckIcon size="m" />;
export const CheckLarge = () => <CheckIcon size="l" />;
export const CheckExtraLarge = () => <CheckIcon size="xl" />;
