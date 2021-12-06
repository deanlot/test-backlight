import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { StyledHelper } from './Helper.styles';

/**
 * Helper description goes here
 */
const Helper = ({ children }: HelperProps) => <StyledHelper>{children}</StyledHelper>;

export interface HelperProps extends TypographyProps {}

export default Helper;
