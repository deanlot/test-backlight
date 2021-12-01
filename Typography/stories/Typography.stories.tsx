import React from 'react';
import { StoryLayout } from '../../layout';
import BaseTypography from '../src/base-typography/BaseTypography';
import { Actions, Header, Label, Paragraph, Title } from '../src';

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

export const paragraphSmall = () => <Paragraph variant={'small'}>Paragraph - Small</Paragraph>;
export const paragraphMedium = () => <Paragraph variant={'medium'}>Paragraph - Medium</Paragraph>;
export const paragraphLarge = () => <Paragraph variant={'large'}>Paragraph - Large</Paragraph>;

export const actionsLowerSmall = () => <Actions variant={'small'}>Actions Lower - Small</Actions>;
export const actionsLowerMedium = () => <Actions variant={'medium'}>Actions Lower - Medium</Actions>;
export const actionsUpperSmall = () => (
  <Actions variant={'small'} uppercase>
    Actions Upper - Small
  </Actions>
);
export const actionsUpperMedium = () => (
  <Actions variant={'medium'} uppercase>
    Actions Upper - Medium
  </Actions>
);

export const labelSmall = () => <Label variant={'small'}>Label - Small</Label>;
export const labelMedium = () => <Label variant={'medium'}>Label - Medium</Label>;
export const labelLarge = () => <Label variant={'large'}>Label - Large</Label>;
export const labelBoldSmall = () => <Label bold>Label - Bold</Label>;
export const labelUpper = () => <Label uppercase>Label - Uppercase</Label>;
export const labelBoldUpper = () => (
  <Label bold uppercase>
    Label - Bold Uppercase
  </Label>
);
