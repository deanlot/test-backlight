import React from 'react';
import { css, styled } from '@stitches/react';

export const Container = styled('div', {
  display: 'grid',
  gridAutoFlow: 'row',
  gap: '4px',
});

export const StyledInput = styled('input', {
  fontFamily: '$input',
  fontWeight: '$regular',
  fontSize: '$4',
  lineHeight: '20px',
  color: '$onSurface-text',
  border: 'none',
  padding: '$2 $3',
  flex: 1,

  background: 'transparent',
  outline: '2px solid transparent',

  '&:disabled': {
    color: '$onSurface-textDisabled',
  },

  '&::placeholder': {
    color: '$onSurface-text',
  },
});

export const MessageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
});

export const InputContainer = styled('div');
export const inputContainerStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
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
    // technically not required but it's more explicit than how stitches works under the hood
    {
      empty: true,
      focused: true,
      css: {
        border: 'none',
        outline: '2px solid $interactive-highlight',
      },
    },
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
  margin: '0 $3 0 0',
  alignItems: 'center',

  variants: {
    iconPlacement: {
      left: {
        margin: '0 0 0 $3',
      },
      right: {
        margin: '0 $3 0 0',
      },
    },
  },
});

export const SymbolContainer = styled('div', {
  marginRight: '$2',
});
