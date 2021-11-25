import React from 'react';
import { IconPreset, Sizes } from '../icon/icons/icons';
import Icon from '../icon/src/Icon';

const HomeIcon = ({ size, color, fill }) => {
  // const sizes = { s: 12, m: 24, l: 36, xl: 48 };
  // const width = 24;
  // const height = 24;
  // const stroke = '#000';
  // const strokeLinecap = 'round';
  // const strokeLinejoin = 'round';
  // const fillPreset = 'none';
  // const strokeWidth = '1.5';
  // const paths = [
  //   'M22.272,23.247a.981.981,0,0,0,.978-.978V9.747a1.181,1.181,0,0,0-.377-.8L12,.747,1.127,8.947a1.181,1.181,0,0,0-.377.8V22.269a.981.981,0,0,0,.978.978Z',
  // ];

  const preset: IconPreset = {
    sizes: { s: 12, m: 24, l: 36, xl: 48 },
    width: 24,
    height: 24,
    fill: 'none',
    stroke: '#000',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '1.5',
    paths: [
      'M22.272,23.247a.981.981,0,0,0,.978-.978V9.747a1.181,1.181,0,0,0-.377-.8L12,.747,1.127,8.947a1.181,1.181,0,0,0-.377.8V22.269a.981.981,0,0,0,.978.978Z',
    ],
  };

  return (
    <Icon
      paths={preset.paths}
      width={preset.sizes[size]}
      height={preset.sizes[size]}
      stroke={color || preset.stroke}
      fill={fill || preset.fill}
      strokeLinecap={preset.strokeLinecap}
      strokeLinejoin={preset.strokeLinejoin}
    />
  );
};

type HomeIconProps = {
  size: Sizes;
  color: string;
  fill: string;
};

export default HomeIcon;
//
//
// sizes: ,
// width: 24,
//   height: 24,
//   fill: 'none',
//   stroke: '#000',
//   strokeLinecap: 'round',
//   strokeLinejoin: 'round',
//   strokeWidth: '1.5',
//   paths: ,
