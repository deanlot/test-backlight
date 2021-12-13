import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { StyledDisclaimerText } from './DisclaimerText.styles';

/**
 * Disclaimer description goes here
 */
export const DisclaimerText = ({ children, color }: DisclaimerTextProps) => (
  <StyledDisclaimerText css={{ ...(color && { color }) }}>{children}</StyledDisclaimerText>
);

export interface DisclaimerTextProps extends TypographyProps {}
