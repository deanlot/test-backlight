import React from 'react';
import { TypographyProps } from '../base-typography/BaseTypography';
import { StyledHelper } from './Helper.styles';

const Helper = ({ children }: HelperProps) => <StyledHelper>{children}</StyledHelper>;

export interface HelperProps extends TypographyProps {}

export default Helper;
