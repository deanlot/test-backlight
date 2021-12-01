import React from 'react';
import { css, styled } from '@stitches/react';

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const StyledInput = styled('input');
export const inputStyles = css({
  fontFamily: '$input',
  fontWeight: '$regular',
  fontSize: '$4',
  padding: '$2 $3',
  // these need to be replaced with tokens
  lineHeight: '20px',
  color: '#2D3036', // secondary[800]
  border: '2px solid rgba(0,0,0,0)', // secondary[20] not sure if this is meant to be transparent or not
  // border radius in mockup is 4px but we dont have a 4px radius in our radii.ts
  borderRadius: '4px',
  background: '#F7F8FA', // secondary[20]

  '&: disabled': {
    color: '$onSurface-textDisabled', // secondary 600
  },

  '&:focus': {
    border: '2px solid #CACDD2',
    outline: 'none',
  },

  variants: {
    error: {
      true: {
        paddingRight: '$6',
        border: '2px solid $interactive-criticalHovered',

        '&:focus': {
          border: '2px solid $interactive-criticalHovered',
          outline: 'none',
        },
      },
    },
    clear: {
      true: {
        paddingRight: '$6',
      },
    },
  },
  // TODO: this is going to get a PR comment, maybe we should just do a div instead of this
  compoundVariants: [
    {
      error: true,
      clear: true,
      css: {
        paddingRight: '$8',
      },
    },
  ],
});

// likely replaced by some kind of typography component
export const errorStyles = css({
  color: '$interactive-criticalHovered',
  fontSize: '$2',
  lineHeight: '20px',
  fontStyle: 'italic',
  fontWeight: '$regular',
});

export const helperStyles = css({
  color: '$onSurface-textDisabled',
  fontSize: '$2',
  lineHeight: '20px',
  fontStyle: 'italic',
  fontWeight: '$regular',
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

export const IconPlaceholder = styled('span', {
  width: 12,
  height: 12,
  position: 'absolute',
  bottom: '14px',
  right: '12px',
  background: 'red',
});

export const Container = styled('div', {
  position: 'relative',
});
