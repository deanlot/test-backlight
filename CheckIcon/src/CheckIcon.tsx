import React, { SVGProps } from 'react';
import { PickedSVGProps, Sizes } from '../../icon/icons/icons';
import Icon from '../../icon/src/Icon';

const sizesMeta: SizesMeta = {
  s: {
    d: 'M9 3.2002L5.4 8.0002L3 5.6002',
    stroke: '#121316',
    strokeWidth: '1.125',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  m: {
    d: 'M12.5 4.7998L7.1 11.9998L3.5 8.3998',
    stroke: '#121316',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  l: {
    d: 'M16 5.3999L8.8 14.9999L4 10.1999',
    stroke: '#121316',
    strokeWidth: '1.875',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  xl: {
    d: 'M21 3.6001L10.2 18.0001L3 10.8001',
    stroke: '#121316',
    strokeWidth: '2.25',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
};

const CheckIcon = ({ size = 'm', stroke, label }: CheckIconProps) => {
  const selectedSizeMeta = sizesMeta[size];
  return <Icon label={label || 'check'} size={size} {...selectedSizeMeta} stroke={stroke || selectedSizeMeta.stroke} />;
};

type CheckIconProps = Pick<SVGProps<SVGPathElement>, 'stroke'> & {
  label?: string;
  size?: Sizes;
};

type SizesMeta = {
  [key in Sizes]: PickedSVGProps;
};

export default CheckIcon;
