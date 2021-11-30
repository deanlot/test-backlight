import React from 'react';
import { styled } from '@stitches/react';
import * as RadixDialog from '@radix-ui/react-dialog';

export const Container = styled(RadixDialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  background: '$surface',
  borderRadius: '$4 $0 $0 $4',
  minWidth: 311,
  maxWidth: 311,
  height: '100vh',
  minHeight: '100vh',
  maxHeight: '100vh',
});

export const Overlay = styled(RadixDialog.Overlay, {
  width: '100vw',
  height: '100vh',
  filter: 'blur(4px)'
});

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 80,
  maxHeight: 80,
  padding: '$4 $3 $2 $5'
});

export const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'stretch',
  borderWidth: '$borderWidths$1',
  borderStyle: 'dashed',
  borderColor: '$onSurface-borderMuted',
  borderRadius: '$1',
  margin: '$0 $5 $5 $5',
  flexGrow: 1
});
