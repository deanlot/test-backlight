import React from 'react';
import { styled } from '@stitches/react';
import * as RadixDialog from '@radix-ui/react-dialog';

export const ContentContainer = styled(RadixDialog.Content, {
  position: 'fixed',
  top: '50%',
  right: '0',
  transform: 'translate(0, -50%)',
  backgroundColor: '$surface',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '$4 $0 $0 $4',
  minWidth: 480,
  maxWidth: 480,
  height: '100%',
  zIndex: '31', // TODO: this z-index implementation might need to be improved
  '@media screen and (max-width: 480px)': {
    minWidth: '100vw',
    maxWidth: '100vw',
  },
});

export const Overlay = styled(RadixDialog.Overlay, {
  position: 'fixed',
  inset: 0,
  backdropFilter: 'blur(6px) brightness(0.2)',
  zIndex: '30', // TODO: this z-index implementation might need to be improved
});

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 80,
  maxHeight: 80,
  padding: '$4 $3 $2 $5',
});

export const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'stretch',
  borderRadius: '$1',
  margin: '$0 $5 $5 $5',
  flexGrow: 1,
});
