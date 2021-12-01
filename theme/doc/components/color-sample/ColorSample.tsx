import React from 'react';
import { ReactElement } from 'react';
import { Label, Sample, Samples, SampleContainer, TextSample } from './ColorSample.styles';

type SwatchProps = {
  token: string;
  color: string | number | boolean;
  group: string;
};

const ColorSample = ({ color, token, group }: SwatchProps): ReactElement => (
  <SampleContainer>
    <Samples>
      <Sample css={{ backgroundColor: color as string }} />
      <Label>{token.replace(`${group}-`, '')}</Label>
      <TextSample>{color}</TextSample>
    </Samples>
  </SampleContainer>
);

export default ColorSample;
