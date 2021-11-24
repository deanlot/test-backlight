import React from 'react';
import CustomIcon from '../../custom-icon/src/CustomIcon';
import { icons, PickedSVGProps } from '../../icons/icons';

interface IconProps extends PickedSVGProps {
  iconName: keyof typeof icons;
  size?: string;
  fill?: string;
  strokeLineJoin?: string;
  strokeWidth?: string;
  transform?: string;
}

const Icon = ({ iconName, ...props }: IconProps) => {
  const { paths, size, fill, stroke, strokeLinecap, strokeLinejoin, strokeWidth, transform } = icons[iconName];
  const svgSize = props.size || size;

  const SVG = (
    <svg width={svgSize} height={svgSize}>
      {paths.map((path) => (
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
      ))}
    </svg>
  );

  return <CustomIcon label={iconName} svg={SVG} {...props} />;
};

export default Icon;
