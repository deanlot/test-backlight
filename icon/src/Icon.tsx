import React from 'react';
import CustomIcon, { CustomIconProps } from '../../custom-icon/src/CustomIcon';
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
  const {
    paths,
    size: iconSize,
    fill,
    stroke,
    strokeLinecap,
    strokeLinejoin,
    strokeWidth,
    transform,
  } = icons[iconName];

  const size = props.size || iconSize;

  const SVG = (
    <svg width={size} height={size} style={{ width: size, height: size }}>
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
