import { styled } from '@stitches/react';

export const GroupLabel = styled('h2', {
  textTransform: 'capitalize',
  marginBottom: 24,
});

export const Samples = styled('div', {
  display: 'grid',
  gridAutoFlow: 'row',
  gridTemplateColumns: 'repeat( auto-fit, 70px)',
  gap: 16,
});
