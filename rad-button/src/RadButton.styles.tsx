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
        border: 'none',

        '&:disabled': {
          color: '$onSurface-textMuted',
          backgroundColor: '$interactive-disabled',
        },
        '&:hover': {
          backgroundColor: '$interactive-primaryHovered',
        },
        '&:active': {
          backgroundColor: '$interactive-primaryPressed',
        },
      },
      outline: {
        backgroundColor: '$transparent',
        color: '$interactive-secondary',
        boxShadow: 'inset 0 0 0 $borderWidths$medium $colors$interactive-secondary',
        border: 'none',

        '&:disabled': {
          color: '$onSurface-textDisabled',
          boxShadow: 'inset 0 0 0 $borderWidths$medium $colors$interactive-disabled',
        },
        '&:hover': {
          backgroundColor: '$interactive-hovered',
        },
        '&:active': {
          boxShadow: 'inset 0 0 0 $borderWidths$medium $colors$onSurface-textMuted',
        },
      },
      ghost: {
        backgroundColor: '$transparent',
        color: '$onSurface-text',
        border: 'none',

        '&:disabled': {
          color: '$onSurface-textDisabled',
        },
        '&:hover': {
          backgroundColor: '$interactive-hovered',
        },
        '&:active': {
          backgroundColor: '$interactive-pressed',
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
