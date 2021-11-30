import { SVGProps } from 'react';

export type Sizes = 's' | 'm' | 'l' | 'xl';

export type PickedSVGProps = Pick<
  SVGProps<SVGPathElement>,
  'fill' | 'stroke' | 'strokeLinecap' | 'strokeLinejoin' | 'strokeWidth' | 'transform' | 'd'
>;
