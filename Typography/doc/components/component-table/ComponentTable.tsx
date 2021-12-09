import React from 'react';
import { TitleText } from '../../../';
import { StyledComponentTable } from './ComponentTable.styles';

export const ComponentTable = () => (
  <StyledComponentTable>
    <TitleText variant="small">Component</TitleText>
    <TitleText variant="small">Tag</TitleText>
    <div>HeaderText</div>
    <div>h1 / h2 / h3</div>
    <div>TitleText</div>
    <div>h4 / h5 / h6</div>
    <div>LabelText</div>
    <div>span</div>
    <div>NumericText</div>
    <div>span</div>
    <div>ParagraphText</div>
    <div>p</div>
    <div>ActionText</div>
    <div>span</div>
    <div>HelperText</div>
    <div>span</div>
    <div>DisclaimerText</div>
    <div>span</div>
  </StyledComponentTable>
);
