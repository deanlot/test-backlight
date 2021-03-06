import { css, styled } from '@stitches/react';

export const StyledButton = styled('button');
export const buttonStyles = css({
  borderRadius: '$radii$4',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '32px',

  '&:disabled': {
    pointerEvents: 'none',
  },
  compoundVariants: [
    {
      icon: true,
      children: false,
      css: {
        padding: 'unset',
      },
    },
  ],
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
    icon: {
      true: {
        padding: 'inherit',
        width: '32px',
        height: '32px',
      },
      false: {
        paddingLeft: '24px',
        paddingRight: '24px',
      },
    },
    children: {
      false: {
        padding: 'unset',
      },
    },
  },
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
