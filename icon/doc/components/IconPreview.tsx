import React from 'react';
import { GroupContainer, IconContainer, IconName } from './IconPreview.styles';
import CheckIcon from '../../icons/CheckIcon/src/CheckIcon';
import BenchIcon from '../../icons/BenchIcon/src/BenchIcon';
import ArrowRightIcon from '../../icons/ArrowRightIcon/src/ArrowRightIcon';
import CloseIcon from '../../icons/CloseIcon/src/CloseIcon';

const IconPreview = () => {
  return (
    <GroupContainer>
      <IconContainer>
        <CheckIcon />
        <IconName>CheckIcon</IconName>
      </IconContainer>
      <IconContainer>
        <BenchIcon />
        <IconName>BenchIcon</IconName>
      </IconContainer>
      <IconContainer>
        <ArrowRightIcon />
        <IconName>ArrowRightIcon</IconName>
      </IconContainer>
      <IconContainer>
        <CloseIcon />
        <IconName>CloseIcon</IconName>
      </IconContainer>
    </GroupContainer>
  );
};

export default IconPreview;
