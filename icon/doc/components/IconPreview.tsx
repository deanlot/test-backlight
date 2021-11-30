import React from 'react';
import { GroupContainer, IconContainer, IconName } from './IconPreview.styles';
import CheckIcon from '../../icons/CheckIcon/src/CheckIcon';
import BenchIcon from '../../icons/BenchIcon/src/BenchIcon';

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
    </GroupContainer>
  );
};

export default IconPreview;
