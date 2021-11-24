import { css, styled } from '@stitches/react';

export const buttonStyles = css({
  borderRadius: '$radii$4',
  fontSize: '$fontSizes$3',
  fontFamily: 'LLCircularWeb',
  fontWeight: '$regular',
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
      solid: {
        backgroundColor: '$interactive-primary',
        color: '$onSurface-onPrimary',
        border: '$borderWidths$3 solid $onSurface-borderPrimary',

        '&:disabled': {
          color: 'HotPink',
          backgroundColor: 'CornflowerBlue',
        },
        '&:hover': {
          border: '$borderWidths$3 solid HotPink', // Currently the figma does not show a border. It actually shows no change.
        },
        '&:active': {
          backgroundColor: '$interactive-primaryHovered', // Figma says this token but shouldn't it be primaryPressed?
        },
      },
      outline: {
        backgroundColor: '$transparent',
        color: 'CornflowerBlue',
        border: '2px solid CornflowerBlue',

        '&:disabled': {
          color: '$onSurface-textDisabled',
          border: '$borderWidths$2 solid $interactive-secondaryDisabled',
        },
        '&:hover': {
          border: '$borderWidths$3 solid $interactive-secondaryHovered',
        },
        '&:active': {
          color: 'CornflowerBlue',
          border: '$borderWidths$2 solid CornflowerBlue',
        },
      },
      ghost: {
        backgroundColor: '$transparent',
        border: 'none',
        color: 'CornflowerBlue',

        '&:disabled': {
          color: '$onSurface-textDisabled',
        },
        '&:hover': {
          color: 'CornflowerBlue',
        },
        '&:active': {
          color: 'CornflowerBlue',
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
    iconPlacementPadding: {
      left: {
        padding: '8px 24px 8px 16px',
      },
      right: {
        padding: '8px 16px 8px 24px',
      },
      center: {
        padding: '8px',
      },
      noIcon: {
        padding: '12px 24px',
      },
    },
  },
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
        flexDirection: 'row-reverse',
      },
      right: {
        flexDirection: 'row',
      },
    },
  },
});

export const iconContainerStyles = css({
  variants: {
    children: {
      true: {
        paddingLeft: '20px',
      },
    },
  },
});
export const IconContainer = styled('div');
