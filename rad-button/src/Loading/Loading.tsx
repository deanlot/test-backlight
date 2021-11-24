import React from 'react';
import { LoadingIcon } from './Loading.styles';

type LoadingProps = {
  size?: number | string;
};

const Loading = ({ size = '20px' }: LoadingProps) => (
  <LoadingIcon data-testid="loading-icon" css={{ width: size, height: size }} />
);

export default Loading;
