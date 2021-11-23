import { keyframes, styled } from '@stitches/react';

const clip = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'rotate(180deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const speedMultiplier = 1;

export const LoadingIcon = styled('span', {
  background: 'transparent !important',
  borderRadius: '100%',
  marginBottom: '-2px',
  border: '2px solid',
  borderColor: '#2D3036',
  borderBottomColor: 'transparent',
  display: 'inline-block',
  animation: `${clip} ${0.75 / speedMultiplier}s 0s infinite linear`,
  animationFillMode: 'both',
});
