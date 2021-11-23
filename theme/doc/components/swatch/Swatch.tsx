import React from 'react';
import { ReactElement } from 'react';
import { ColorSample, Label, Samples, SwatchContainer, TextSample } from './Swatch.styles';

type SwatchProps = {
  token: string,
  color: string,
  group: string
}

const Swatch = ({ color, token, group } : SwatchProps) : ReactElement => {
  return <SwatchContainer>
    <Samples>
      <ColorSample css={{ backgroundColor: color }} />
      <Label>{token.replace(`${group}-`, "")}</Label>
      <TextSample>
        {color}
      </TextSample>
    </Samples>
  </SwatchContainer>
}

export default Swatch;