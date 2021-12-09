import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { StyledHelperText } from './HelperText.styles';

/**
 * Helper description goes here
 */
export const HelperText = ({ children }: HelperTextProps) => <StyledHelperText>{children}</StyledHelperText>;

export interface HelperTextProps extends TypographyProps {}
