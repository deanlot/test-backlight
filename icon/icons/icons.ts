import { SVGProps } from 'react';

export type Sizes = 's' | 'm' | 'l' | 'xl';
type IconMeta = {
  sizes: {
    [key in Sizes]: number;
  };
  width: number;
  height: number;
  paths: string[];
};

export type PickedSVGProps = Pick<
  SVGProps<SVGPathElement>,
  'fill' | 'stroke' | 'strokeLinecap' | 'strokeLinejoin' | 'strokeWidth' | 'transform' | 'd'
>;

export type IconPreset = IconMeta & PickedSVGProps;

export type Icons = Record<string, IconPreset>;

export const icons: Icons = {
  home: {
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
  },
};
