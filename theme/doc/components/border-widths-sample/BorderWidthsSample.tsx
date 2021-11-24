import React from 'react';
import { ReactElement } from 'react';
import { Sample, SampleContainer } from './BorderWidthsSample.styles';

type BorderWidthsProps = {
  token: string;
  value: string;
};

const BorderWidthsSample = ({ token, value }: BorderWidthsProps): ReactElement => (
  <SampleContainer key={token}>
    <div>{token}</div>
    <Sample css={{ borderWidth: value }} />
  </SampleContainer>
);

export default BorderWidthsSample;
