import React from 'react';
import { styled } from '@stitches/react';

export const GroupContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const IconContainer = styled('div', {
  padding: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const IconName = styled('p', {
  fontSize: '10px',
});
