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
      // this styled component just removes lineheight to ensure the wrapping div does not affect spacing at all
      // it also allows us access to the css prop over the usual react inline style prop
      <SVGStyleWrapper
        css={{
          [`& svg > path`]: {
            // @Jason be proud of me, I did the thing!!
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
