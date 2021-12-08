import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { StyledDisclaimer } from './Disclaimer.styles';

/**
 * Disclaimer description goes here
 */
const Disclaimer = ({ children }: DisclaimerProps) => <StyledDisclaimer>{children}</StyledDisclaimer>;

export interface DisclaimerProps extends TypographyProps {}

export default Disclaimer;
