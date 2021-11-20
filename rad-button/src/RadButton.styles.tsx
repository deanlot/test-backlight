import { css, styled } from '@stitches/react';

export const buttonStyles = css({
  padding: '12px 24px',
  borderRadius: '32px',
  fontSize: '14px',
  fontFamily: 'LLCircularWeb',
  fontWeight: '$regular',
  color: '#472300',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

  '&:disabled': {
    pointerEvents: 'none'
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$surface-primary',
        border: '3px solid $primary',

        '&:disabled': {
          backgroundColor: '$disabled',
          border: '3px solid $disabled'
        },
        '&:hover': {
          border: '3px solid $outlinePrimary'
        },
        '&:active': {
          backgroundColor: '$activePrimary',
          border: '3px solid $activePrimary'
        }
      },
      secondary: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        color: '#000000',
        border: '2px solid #000000',

        '&:disabled': {
          color: '#565960',
          border: '2px solid #565960'
        },
        '&:hover': {
          border: '3px solid #000000'
        },
        '&:active': {
          color: '#484B50',
          border: '2px solid #484B50'
        }
      },
      ghost: {
        backgroundColor: 'rgba(255,255, 255, 0)',
        border: 'none',
        color: '000',

        '&:disabled': {
          color: '#565960'
        },
        '&:hover': {
          color: '000'
        },
        '&:active': {
          color: '#565960'
        }
      }
    },
    clickable: {
      true: {
        pointerEvents: 'cursor'
      },
      false: {
        pointerEvents: 'none'
      }
    }
  }
});

export const Button = styled('button');

export const FlexContainer = styled('div');
export const flexVariants = css({
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
      }
    }
  }
});

// export const IconContainer ={ Comp: styled('div'), styles: css({paddingLeft: '20px'}) };

export const IconContainer = styled('div', { paddingLeft: '20px' });

//   styled('div', {
//   paddingLeft: '20px'
// });