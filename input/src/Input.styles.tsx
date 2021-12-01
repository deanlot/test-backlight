import React from 'react';
import { css, styled } from '@stitches/react';

export const Container = styled('div', {
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
  border: 'none',

  background: '#F7F8FA', // secondary[20]
  outline: 'none',

  '&: disabled': {
    color: '$onSurface-textDisabled', // secondary 600
  },
  variants: {
    error: {
      true: {
        paddingRight: 0,
      },
    },
  },
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

export const IconPlaceholder = styled('div', {
  display: 'inline-block',
  width: 12,
  height: 12,
  background: 'red',
  marginLeft: '$3',
  marginRight: '$3',
});

export const InputContainer = styled('div');
export const inputContainerStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  border: '2px solid rgba(0,0,0,0)', // secondary[20] not sure if this is meant to be transparent or not
  // border radius in mockup is 4px but we dont have a 4px radius in our radii.ts
  borderRadius: '4px',
  background: '#F7F8FA', // secondary[20]

  variants: {
    error: {
      true: {
        border: '2px solid red',

        // this does nothing because its not focusing the div
        '&:focus': {
          border: '2px solid red',
        },
      },
    },
    focused: {
      true: {
        border: '2px solid #CACDD2',
        outline: 'none',
      },
    },
  },
  compoundVariants: [
    {
      error: true,
      focused: true,
      css: {
        border: '2px solid red',
        outline: 'none',
      },
    },
  ],
});

export const IconContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});

export const ClearContainer = styled('div', {
  flex: '1',
});
