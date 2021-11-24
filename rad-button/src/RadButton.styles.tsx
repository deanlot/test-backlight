import { css, styled } from '@stitches/react';

export const buttonStyles = css({
  padding: '$space$3 $space$5',
  borderRadius: '$radii$4',
  fontSize: '$fontSizes$3',
  fontFamily: 'LLCircularWeb',
  fontWeight: '$regular',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

  '&:disabled': {
    pointerEvents: 'none'
  },

  variants: {
    variant: {
      solid: {
        backgroundColor: '$interactive-primary',
        color: '$onSurface-onPrimary',
        border: '$borderWidths$3 solid $onSurface-borderPrimary',

        '&:disabled': {
          color: 'HotPink',
          backgroundColor: 'CornflowerBlue',
        },
        '&:hover': {
          border: '$borderWidths$3 solid HotPink' // Currently the figma does not show a border. It actually shows no change.
        },
        '&:active': {
          backgroundColor: '$interactive-primaryHovered', // Figma says this token but shouldn't it be primaryPressed?
        }
      },
      outline: {
        backgroundColor: '$transparent',
        color: 'CornflowerBlue',
        border: '2px solid CornflowerBlue',

        '&:disabled': {
          color: '$onSurface-textDisabled',
          border: '$borderWidths$2 solid $interactive-secondaryDisabled'
        },
        '&:hover': {
          border: '$borderWidths$3 solid $interactive-secondaryHovered'
        },
        '&:active': {
          color: '#484B50',
          border: '$borderWidths$2 solid CornflowerBlue'
        }
      },
      ghost: {
        backgroundColor: '$transparent',
        border: 'none',
        color: 'CornflowerBlue',

        '&:disabled': {
          color: '$onSurface-textDisabled'
        },
        '&:hover': {
          color: 'CornflowerBlue'
        },
        '&:active': {
          color: 'CornflowerBlue'
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

export const IconContainer = styled('div', { paddingLeft: '20px' });