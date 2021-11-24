import { styled } from '@stitches/react';

export const GroupLabel = styled('h2', {
  textTransform: 'capitalize',
});

export const Samples = styled('div', {
  display: 'grid',
  gridAutoFlow: 'row',
  gridTemplateColumns: 'repeat( auto-fit, 70px)',
  gap: 16,
});
