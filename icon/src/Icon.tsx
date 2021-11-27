import React, { ReactElement } from 'react';
import CustomIcon from '../../custom-icon/src/CustomIcon';
import { SVGStyleWrapper } from './Icon.styles';

/**
 Icon component that renders SVGs from our icon library
 */
const Icon = ({ label, color, svg }: IconProps) => (
  <CustomIcon
    label={label}
    svg={
      <SVGStyleWrapper
        css={{
          [`& svg > path`]: {
            ...(color && { stroke: color }),
          },
        }}
      >
        {svg}
      </SVGStyleWrapper>
    }
  />
);

type IconProps = {
  label: string;
  color?: string;
  svg: ReactElement;
};

export default Icon;
