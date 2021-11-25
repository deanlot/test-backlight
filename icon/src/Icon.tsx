import React from 'react';
import CustomIcon from '../../custom-icon/src/CustomIcon';
import { icons, PickedSVGProps } from '../icons/icons';
import { Svg } from './Icon.styles';
import { getScale } from './utils';

/**
 Icon component that renders SVGs from our icon library
 */
const Icon = ({ icon, size = 'm', ...props }: IconProps) => {
  const { paths, sizes, width, height, fill, stroke, strokeLinecap, strokeLinejoin, strokeWidth, transform } =
    icons[icon];
  const sizeDimensions = sizes[size];

  const SVG = (
    <Svg width={sizeDimensions} height={sizeDimensions} css={{ width: sizeDimensions, height: sizeDimensions }}>
      {paths.map((path) => {
        const scale = getScale(sizeDimensions, width, height);

        return (
          <g transform={`scale(${scale.width}, ${scale.height})`}>
            <path
              d={path}
              key={path}
              fill={props.fill || fill}
              stroke={props.stroke || stroke}
              strokeLinecap={props.strokeLinecap || strokeLinecap}
              strokeLinejoin={props.strokeLinejoin || strokeLinejoin}
              strokeWidth={props.strokeWidth || strokeWidth}
              transform={props.transform || transform}
            />
          </g>
        );
      })}
    </Svg>
  );

  return <CustomIcon label={icon} svg={SVG} {...props} />;
};

interface IconProps extends PickedSVGProps {
  //TODO: I think this could be better, not sure if this giant icons object is the right way to go
  icon: keyof typeof icons;
  size?: 's' | 'm' | 'l' | 'xl';
}

export default Icon;
