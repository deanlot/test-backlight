import React from 'react';
import { StoryLayout } from '../../layout';
import BaseTypography from '../src/base-typography/BaseTypography';
import { Header, Title } from '../src';

export default StoryLayout;

export const baseTypography = () => (
  <BaseTypography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.
  </BaseTypography>
);

export const headerSmall = () => <Header variant={'small'}>Header - Small</Header>;
export const headerMedium = () => <Header variant={'medium'}>Header - Medium</Header>;
export const headerLarge = () => <Header variant={'large'}>Header - Large</Header>;

export const titleSmall = () => <Title variant={'small'}>Title - Small</Title>;
export const titleMedium = () => <Title variant={'medium'}>Title - Medium</Title>;
export const titleLarge = () => <Title variant={'large'}>Title - Large</Title>;
