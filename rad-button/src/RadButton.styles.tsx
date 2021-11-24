import { css, styled } from '@stitches/react';

export const Button = styled('button');
export const buttonStyles = css({
  borderRadius: '32px',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '40px',

  '&:disabled': {
    pointerEvents: 'none',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$surface-primary',
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
        color: '#000000',
        border: '2px solid #000000',

        '&:disabled': {
          color: '#565960',
          border: '2px solid #565960',
        },
        '&:hover': {
          border: '2px solid #000000',
          // this allows the button to appear as if the border is 3px without increasing the border by 1px
          // increasing the border will increase space occupied by the button
          // and could possibly cause surrounding elements to shift
          boxShadow: 'inset 0 0 0 1px #000000',
        },
        '&:active': {
          color: '#484B50',
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
        pointerEvents: 'cursor',
      },
      false: {
        pointerEvents: 'none',
      },
    },
    icon: {
      true: {
        padding: 'inherit',
        width: '40px',
        height: '40px',
      },
      false: {
        paddingLeft: '24px',
        paddingRight: '24px',
      },
    },
  },
});

export const ButtonText = styled('span', {
  fontFamily: 'LLCircularWeb',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '14px',
  lineHeight: '16px',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'right',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: '#472300',
});

export const FlexContainer = styled('div');
export const flexVariants = css({
  display: 'flex',
  flexWrap: 'no-wrap',
  alignItems: 'center',
  flexDirection: 'row',
  variants: {
    iconPlacement: {
      left: {
        flexDirection: 'row-reverse',
      },
      right: {
        flexDirection: 'row',
      },
    },
  },
});

export const iconContainerStyles = css({
  lineHeight: 0,
  variants: {
    children: {
      true: {
        paddingLeft: '20px',
      },
    },
  },
});
export const IconContainer = styled('div');
