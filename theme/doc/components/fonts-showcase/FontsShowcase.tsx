import React from 'react';
import { ReactElement } from 'react';
import { FontLabel, FontRow, FontValue } from './FontsShowcase.styles';

const FontsShowcase = ({ theme }): ReactElement => (
  <div>
    {Object.keys(theme.fonts).map((token) => (
      <FontRow>
        <FontLabel>{token}</FontLabel>
        <FontValue css={{ fontFamily: theme.fonts[token] }}>{theme.fonts[token]}</FontValue>
      </FontRow>
    ))}
  </div>
);

export default FontsShowcase;
