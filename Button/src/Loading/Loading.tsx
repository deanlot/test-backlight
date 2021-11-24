import React from 'react';
import { LoadingIcon, loadingIconStyling } from './Loading.styles';

type Variant = 'primary' | 'secondary' | 'ghost';

type LoadingProps = {
  size?: number | string;
  variant?: Variant;
};

const Loading = ({ size = '20px', variant = 'primary' }: LoadingProps) => (
  <LoadingIcon
    className={loadingIconStyling({ variant })}
    data-testid="loading-icon"
    css={{ width: size, height: size }}
  />
);

export default Loading;
