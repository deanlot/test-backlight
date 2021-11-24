import React from 'react';
import { ReactElement } from 'react';
import BorderWidthsSample from '../border-widths-sample/BorderWidthsSample';
import { BorderWidthsContainer } from './BorderWidthsShowcase.styles';

const BorderWidthsShowcase = ({ theme }): ReactElement => (
  <BorderWidthsContainer>
    {Object.keys(theme.borderWidths).map((token) => (
      <BorderWidthsSample key={token} token={token} value={theme.borderWidths[token]} />
    ))}
  </BorderWidthsContainer>
);

export default BorderWidthsShowcase;
