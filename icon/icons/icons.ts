import { SVGProps } from 'react';

type Icon = {
  paths: string[];
  size: string;
};

export type PickedSVGProps = Pick<
  SVGProps<SVGPathElement>,
  'fill' | 'stroke' | 'strokeLinecap' | 'strokeLinejoin' | 'strokeWidth' | 'transform'
>;

export type Icons = Record<string, Icon & PickedSVGProps>;

export const icons: Icons = {
  home: {
    size: '24px',
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
