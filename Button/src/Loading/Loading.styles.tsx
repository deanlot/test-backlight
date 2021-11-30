import { css, keyframes, styled } from '@stitches/react';

const clip = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'rotate(180deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const speedMultiplier = 1;

export const LoadingIcon = styled('span');
export const loadingIconStyling = css({
  background: 'transparent !important',
  borderRadius: '100%',
  border: '2px solid',

  display: 'inline-block',
  animation: `${clip} ${0.75 / speedMultiplier}s 0s infinite linear`,
  animationFillMode: 'both',
  variants: {
    variant: {
      primary: {
        borderColor: '#E5A139',
        borderBottomColor: '#2D3036',
      },
      secondary: {
        borderColor: '#CACDD2',
        borderBottomColor: '#000000',
      },
      ghost: {
        borderColor: '#CACDD2',
        borderBottomColor: '#000000',
      },
    },
  },
});
