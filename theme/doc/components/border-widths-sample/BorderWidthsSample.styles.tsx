import { styled } from '@stitches/react';

export const SampleContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '30px auto',
  alignItems: 'center',
});

export const Sample = styled('div', {
  width: 100,
  height: 30,
  background: '$surface-primary',
  borderColor: '$onSurface-borderPrimary',
  borderStyle: 'solid',
  borderRadius: '$radii$1',
});
