import React from 'react';
import { icons } from '../../icons/icons';
import Icon from '../../src/Icon';
import { IconContainer } from './IconPreview.styles';

const IconPreview = () =>
  Object.keys(icons).map((icon) => (
    <IconContainer>
      <Icon icon={icon} key={icon} />
    </IconContainer>
  ));

export default IconPreview;
