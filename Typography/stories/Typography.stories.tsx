import React from 'react';
import { StoryLayout } from '../../layout';
import {
  ActionText,
  DisclaimerText,
  HeaderText,
  HelperText,
  LabelText,
  NumericText,
  ParagraphText,
  TitleText,
} from '../src';

export default StoryLayout;

const Grid = ({ children, gap = 0 }) => <div style={{ display: 'grid', gridAutoFlow: 'row', gap }}>{children}</div>;

export const header = () => (
  <Grid>
    <HeaderText variant={'small'}>Header - Small</HeaderText>
    <HeaderText variant={'medium'}>Header - Medium</HeaderText>
    <HeaderText variant={'large'}>Header - Large</HeaderText>
  </Grid>
);

export const title = () => (
  <Grid>
    <TitleText variant={'small'}>Title - Small</TitleText>
    <TitleText variant={'medium'}>Title - Medium</TitleText>
    <TitleText variant={'large'}>Title - Large</TitleText>
  </Grid>
);

export const paragraph = () => (
  <Grid>
    <ParagraphText variant={'small'}>
      Paragraph - Small, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </ParagraphText>
    <ParagraphText variant={'medium'}>
      Paragraph - Medium, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </ParagraphText>
    <ParagraphText variant={'large'}>
      Paragraph - Large, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </ParagraphText>
  </Grid>
);

export const action = () => (
  <Grid gap={24}>
    <ActionText variant={'small'}>Actions Lower - Small</ActionText>
    <ActionText variant={'medium'}>Actions Lower - Medium</ActionText>
    <ActionText variant={'small'} uppercase>
      Actions Upper - Small
    </ActionText>
    <ActionText variant={'medium'} uppercase>
      Actions Upper - Medium
    </ActionText>
  </Grid>
);

export const label = () => (
  <Grid gap={24}>
    <LabelText variant={'small'}>Label - Small</LabelText>
    <LabelText variant={'medium'}>Label - Medium</LabelText>
    <LabelText variant={'large'}>Label - Large</LabelText>
    <LabelText bold>Label - Bold</LabelText>
    <LabelText uppercase>Label - Uppercase</LabelText>
    <LabelText bold uppercase>
      Label - Bold Uppercase
    </LabelText>
  </Grid>
);

export const numeric = () => (
  <Grid gap={24}>
    <NumericText variant={'xsmall'}>Numeric - XSmall $100.00</NumericText>
    <NumericText variant={'small'}>Numeric - Small $100.00</NumericText>
    <NumericText variant={'medium'}>Numeric - Medium $100.00</NumericText>
    <NumericText variant={'large'}>Numeric - Large $100.00</NumericText>
    <NumericText variant={'large'}>Numeric - XLarge $100.00</NumericText>
  </Grid>
);

export const helper = () => <HelperText>Helper</HelperText>;
export const helperError = () => <HelperText variant="error">Helper</HelperText>;

export const disclaimer = () => <DisclaimerText>Disclaimer</DisclaimerText>;
