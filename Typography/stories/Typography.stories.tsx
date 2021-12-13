import React from 'react';
import { StoryLayout } from '../../layout';
import { Action, Disclaimer, Header, Helper, Label, Numeric, Paragraph, Title } from '../src';

export default StoryLayout;

const Grid = ({ children, gap = 0 }) => <div style={{ display: 'grid', gridAutoFlow: 'row', gap }}>{children}</div>;

export const header = () => (
  <Grid>
    <Header variant={'small'}>Header - Small</Header>
    <Header variant={'medium'}>Header - Medium</Header>
    <Header variant={'large'}>Header - Large</Header>
  </Grid>
);

export const title = () => (
  <Grid>
    <Title variant={'small'}>Title - Small</Title>
    <Title variant={'medium'}>Title - Medium</Title>
    <Title variant={'large'}>Title - Large</Title>
  </Grid>
);

export const paragraph = () => (
  <Grid>
    <Paragraph variant={'small'}>
      Paragraph - Small, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Paragraph>
    <Paragraph variant={'medium'}>
      Paragraph - Medium, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Paragraph>
    <Paragraph variant={'large'}>
      Paragraph - Large, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Paragraph>
  </Grid>
);

export const action = () => (
  <Grid gap={24}>
    <Action variant={'small'}>Actions Lower - Small</Action>
    <Action variant={'medium'}>Actions Lower - Medium</Action>
    <Action variant={'small'} uppercase>
      Actions Upper - Small
    </Action>
    <Action variant={'medium'} uppercase>
      Actions Upper - Medium
    </Action>
  </Grid>
);

export const label = () => (
  <Grid gap={24}>
    <Label variant={'small'}>Label - Small</Label>
    <Label variant={'medium'}>Label - Medium</Label>
    <Label variant={'large'}>Label - Large</Label>
    <Label bold>Label - Bold</Label>
    <Label uppercase>Label - Uppercase</Label>
    <Label bold uppercase>
      Label - Bold Uppercase
    </Label>
  </Grid>
);

export const numeric = () => (
  <Grid gap={24}>
    <Numeric variant={'xsmall'}>Numeric - XSmall $100.00</Numeric>
    <Numeric variant={'small'}>Numeric - Small $100.00</Numeric>
    <Numeric variant={'medium'}>Numeric - Medium $100.00</Numeric>
    <Numeric variant={'large'}>Numeric - Large $100.00</Numeric>
    <Numeric variant={'large'}>Numeric - XLarge $100.00</Numeric>
  </Grid>
);

export const helper = () => <Helper>Helper</Helper>;
export const helperError = () => <Helper variant="error">Helper</Helper>;

export const disclaimer = () => <Disclaimer>Disclaimer</Disclaimer>;
