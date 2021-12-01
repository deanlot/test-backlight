import React from 'react';
import { TypographyProps } from '../base-typography/BaseTypography';
import { disclaimerStyles, StyledDisclaimer } from './Disclaimer.styles';

const Disclaimer = ({ children }: DisclaimerProps) => (
  <StyledDisclaimer className={disclaimerStyles()}>{children}</StyledDisclaimer>
);

export interface DisclaimerProps extends TypographyProps {}

export default Disclaimer;
