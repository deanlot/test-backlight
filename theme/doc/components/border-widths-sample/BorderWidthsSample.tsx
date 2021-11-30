import React from 'react';
import { ReactElement } from 'react';
import { Sample } from './BorderWidthsSample.styles';

type BorderWidthsProps = {
  token: string;
  value: string;
};

const BorderWidthsSample = ({ token, value }: BorderWidthsProps): ReactElement => (
  <>
    <div>{token}</div>
    <Sample css={{ borderWidth: value }} />
  </>
);

export default BorderWidthsSample;
