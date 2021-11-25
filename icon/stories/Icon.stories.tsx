import React from 'react';
import Icon from '../src/Icon';
import { layout } from '../../utils/src/story-decorator';
export default layout;

export const IconSmall = () => <Icon icon="home" size="s" />;
export const IconMedium = () => <Icon icon="home" size="m" />;
export const IconLarge = () => <Icon icon="home" size="l" />;
export const IconExtraLarge = () => <Icon icon="home" size="xl" />;
