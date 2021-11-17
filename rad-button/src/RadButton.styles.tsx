import { styled as stitchesStyled } from '@stitches/react';
import styled from 'styled-components';
import { ButtonProps } from './RadButton';

export enum IconPlacement {
  Left = 'left',
  Right = 'right'
}

export const StitchesBaseButton = stitchesStyled('button', {
  // padding: '12px, 24px, 12px, 24px',
  paddingTop: '12px',
  paddingRight: '24px',
  paddingBottom: '12px',
  paddingLeft: '24px',
  borderRadius: '32px',
  fontWeight: '700',
  color: '#472300',
  cursor: 'pointer',
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
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
        color: '#484B50',
        border: '2px solid #000000',

        '&:disabled': {
          border: '2px solid #565960',
        },
        '&:hover': {
          border: '3px solid #000000',
        },
        '&:active': {
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
    outlined: {
      true: {
        border: '5px solid red'
      }
    }
  },
  compoundVariants: [
    {
      outlined: true,
      variant: 'primary',
      css: {
        border: '5px solid green'
      }
    }
  ]
});

export const StitchesContainer = stitchesStyled('div', {
  display: 'flex',
  flexWrap: 'no-wrap',
  alignItems: 'center',
  flexDirection: 'row',
  variants: {
    iconPlacement: {
      [IconPlacement.Left]: {
        flexDirection: 'row-reverse'
      },
      [IconPlacement.Right]: {
        flexDirection: 'row'
      },
    },
  }
});

export const StitchesButtonText = stitchesStyled('span', {
  display: 'flex',
});

export const SCBaseButton1 = styled.button<ButtonProps>`
  padding: 12px, 24px, 12px, 24px,
  border-radius: 32px,
  font-weight: 700,
  color: #472300,
  cursor: pointer,
  
  ${({variant}) => variant === 'primary' && `
      backgroundColor: theme,
      border: 3px solid theme,

      &:disabled {
        backgroundColor: theme,
        border: 3px solid theme,
      },
      &:hover {
        border: 3px solid theme,
      },
      &:active {
        backgroundColor: theme,
        border: 3px solid theme,
      },
  `} 
  
    ${({variant}) => variant === 'secondary' && `
        backgroundColor: rgba(255, 255, 255, 0),
        color: #484B50,
        border: 2px solid #000000,

        &:disabled: {
          border: 2px solid #565960,
        },
        &:hover: {
          border: 3px solid #000000,
        },
        &:active: {
          border: 2px solid #484B50,
        },
  `} 
  
  ${({variant, outlined}) => variant === 'primary' && outlined && `
    border: 5px solid green
  `}
`

export const SCBaseButton2 = styled('button')<ButtonProps>(({ variant, outlined }) => {
  const baseButton = {
    paddingTop: '12px',
    paddingRight: '24px',
    paddingBottom: '12px',
    paddingLeft: '24px',
    borderRadius: '32px',
    fontWeight: '700',
    color: '#472300',
    cursor: 'pointer',
  }

  const primaryStyles = {
    backgroundColor: 'red',
    border: '3px solid red',
    '@media(min-width: 788px)': {
      backgroundColor: 'pink'
    },
    '@media(min-width: 1024px)': {
      backgroundColor: 'green'
    },
    '&:disabled': {
      backgroundColor: 'grey',
      border: '3px solid grey',
    },
    '&:hover': {
      border: '3px solid purple',
    },
    '&:active': {
      backgroundColor: 'orange',
      border: '3px solid orange',
    },
  }

  const secondaryStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: '#484B50',
    border: '2px solid #000000',

    '&:disabled': {
      border: '2px solid #565960',
    },
    '&:hover': {
      border: '3px solid #000000',
    },
    '&:active': {
      border: '2px solid #484B50',
    },
  }

  return {
    ...baseButton,
    ...(variant === 'primary' && primaryStyles),
    ...(variant === 'secondary' && secondaryStyles),
    ...(outlined && {outline: 'red'})
  }
})