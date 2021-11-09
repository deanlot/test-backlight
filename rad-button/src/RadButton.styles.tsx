import { styled } from '@stitches/react';

export const BaseButton = styled('button', {
  // padding: '12px, 24px, 12px, 24px',
  paddingTop: '12px',
  paddingRight: '24px',
  paddingBottom: '12px',
  paddingLeft: '24px',
  borderRadius: '32px',
  fontWeight: '700',
  color: '#472300',
  cursor: 'pointer',
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primaryYellow',
        border: '3px solid $primaryYellow',

        '&:disabled': {
          backgroundColor: '$disabledGrey',
          border: '3px solid $disabledGrey',
        },
        '&:hover': {
          border: '3px solid $hoverBorder',
        },
        '&:active': {
          backgroundColor: '$activeYellow',
          border: '3px solid $activeYellow',
        },
      },
      secondary: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        color: '#484B50',
        border: '2px solid #000000',

        '&:disabled': {
          border: '2px solid #565960',
        },
        '&:hover': {
          border: '3px solid #000000',
        },
        '&:active': {
          border: '2px solid #484B50',
        },
      },
      ghost: {
        backgroundColor: 'rgba(255,255, 255, 0)',
        border: 'none',
        color: '000',

        '&:disabled': {
          color: '#565960',
        },
        '&:hover': {
          color: '000',
        },
        '&:active': {
          color: '#565960',
        },
      },
    },
  },
});

export const Container = styled('div', {
  display: 'flex',
  flexWrap: 'no-wrap',
  alignItems: 'center',
});

export const ButtonText = styled('span', {
  display: 'flex',
});
