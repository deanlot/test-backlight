import React from 'react';
import { TypographyProps } from '../base-typography/BaseTypography';
import { helperStyles, StyledHelper } from './Helper.styles';

const Helper = ({ children }: HelperProps) => <StyledHelper className={helperStyles()}>{children}</StyledHelper>;

export interface HelperProps extends TypographyProps {}

export default Helper;
