import { Sizes } from '../../types';

export type IconProps = {
  /**
   * an accessible label for your icon, a default one will be given if not specified
   */
  label?: string;
  /**
   * for normal icons s=12, m=16, l=20 xl=24, for brand icons s=12, m=16, l=24, xl=40
   */
  size?: Sizes;
  /**
   * the fill color of the icon
   */
  fill?: string;
  /**
   * the stroke color of the icon
   */
  color?: string;
};
