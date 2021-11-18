import { css, styled } from '@stitches/react';

export const buttonStyles = css({
  paddingTop: '12px',
  paddingRight: '24px',
  paddingBottom: '12px',
  paddingLeft: '24px',
  borderRadius: '32px',
  fontWeight: '700',
  color: '#472300',
  cursor: 'pointer',

  '&:disabled': {
    pointerEvents: 'none'
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        border: '3px solid $primary',

        '&:disabled': {
          backgroundColor: '$disabled',
          border: '3px solid $disabled',
        },
        '&:hover': {
          border: '3px solid $outlinePrimary',
        },
        '&:active': {
          backgroundColor: '$activePrimary',
          border: '3px solid $activePrimary',
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
    clickable: {
      true: {
        pointerEvents: 'cursor'
      },
      false: {
        pointerEvents: 'none',
      }
    }
  },
})

export const FlexContainer = styled('div', {
  display: 'flex',
  flexWrap: 'no-wrap',
  alignItems: 'center',
  flexDirection: 'row',
  variants: {
    iconPlacement: {
      left: {
        flexDirection: 'row-reverse'
      },
      right: {
        flexDirection: 'row'
      },
    },
  }
});

export const ButtonText = styled('span', {
  display: 'flex',
});