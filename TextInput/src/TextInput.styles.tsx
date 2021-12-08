import React from 'react';
import { css, styled } from '@stitches/react';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const StyledInput = styled('input', {
  fontFamily: '$input',
  fontWeight: '$regular',
  fontSize: '$4',
  lineHeight: '20px',
  color: '$onSurface-text',
  border: 'none',
  padding: '$2 $4',
  flex: 1,

  background: 'transparent',
  outline: '2px solid transparent',

  '&:disabled': {
    color: '$onSurface-textDisabled',
  },

  '&::placeholder': {
    color: '$onSurface-border',
  },
});

// likely replaced by some kind of typography component
export const errorStyles = css({
  color: '$interactive-critical',
  fontSize: '$2',
  lineHeight: '20px',
  fontStyle: 'italic',
  fontWeight: '$regular',
  paddingLeft: '$2',
});

export const helperStyles = css({
  color: '$onSurface-textDisabled',
  fontSize: '$2',
  lineHeight: '20px',
  fontStyle: 'italic',
  fontWeight: '$regular',
});

export const MessageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  paddingTop: '$1',
});

// this will be likely replaced by a typography component
export const Label = styled('label', {
  fontFamily: '$labels',
  color: '$onSurface-textMuted',
  fontWeight: '$bold',
  lineHeight: '16px',
  fontSize: '$fontSizes$1',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
});

export const InputContainer = styled('div');
export const inputContainerStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  border: 'none',
  borderRadius: '$1',
  backgroundColor: '$surface',
  outline: '1px solid $onSurface-border', // color hex needs to be changed in token
  maxWidth: '65ch',

  '&:hover': {
    backgroundColor: '$surface',
  },

  compoundVariants: [
    // when error states occur along side other variant states always show error state
    {
      error: true,
      focused: true,
      css: {
        border: 'none',
        outline: '2px solid $interactive-critical',
      },
    },
    // {
    //   error: true,
    //   empty: true,
    //   css: {
    //     border: 'none',
    //     outline: '2px solid $interactive-critical',
    //   },
    // },
  ],
  variants: {
    empty: {
      true: {
        backgroundColor: '$surface-background',
        outline: '1px solid $onSurface-border',
      },
      false: {
        backgroundColor: '$surface',
      },
    },
    focused: {
      true: {
        backgroundColor: '$surface',
        outline: '2px solid $interactive-highlight',
      },
    },
    error: {
      true: {
        border: 'none',
        outline: '2px solid $interactive-critical',
      },
    },

    iconPlacement: {
      left: {
        flexDirection: 'row-reverse',
      },
      right: {
        flexDirection: 'row',
      },
    },

    disabled: {
      true: {
        backgroundColor: '$interactive-disabled',
        outline: '1px solid $onSurface-border',
        pointerEvents: 'none',
      },
    },
  },
});

export const IconContainer = styled('div');
export const iconContainerStyles = css({
  display: 'flex',
  height: '100%',
  flexGrow: '1',
  padding: '0 $4 0 0',

  variants: {
    iconPlacement: {
      left: {
        padding: '0 0 0 $4',
      },
      right: {
        padding: '0 $4 0 0',
      },
    },
  },
});
