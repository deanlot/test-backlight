import React from 'react';
import { styled } from '@stitches/react';

/*
 * Display flex is required for "small" sized icons specifically, to ensure the svg is centered in side of the div.
 * Without it, the "small" sized svg will be pushed downwards outside of the div.
 */
export const IconContainer = styled('div', {
  display: 'flex',
});
