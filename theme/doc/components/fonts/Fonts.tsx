import React from 'react';
import { ReactElement } from 'react';
import { FontLabel, FontRow, FontValue } from './Fonts.styles';

const Fonts = ({ theme }) : ReactElement => (
  <div>
    {
      Object.keys(theme.fonts).map(token => (
        <FontRow>
          <FontLabel>{token}</FontLabel>
          <FontValue css={{ fontFamily: theme.fonts[token] }}>
            {theme.fonts[token]}
          </FontValue>
        </FontRow>)
      )
    }
  </div>
)

export default Fonts;