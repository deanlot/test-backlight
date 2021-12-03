import React from 'react';
import { TypographyProps } from '../base-typography/BaseTypography';
import { StyledDisclaimer } from './Disclaimer.styles';

const Disclaimer = ({ children }: DisclaimerProps) => <StyledDisclaimer>{children}</StyledDisclaimer>;

export interface DisclaimerProps extends TypographyProps {}

export default Disclaimer;
