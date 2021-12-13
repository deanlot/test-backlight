import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { StyledHelper } from './Helper.styles';

/**
 * Helper description goes here
 */
const Helper = ({ variant, children }: HelperProps) => <StyledHelper variant={variant}>{children}</StyledHelper>;

export interface HelperProps extends TypographyProps {
  variant?: 'error';
}

export default Helper;
