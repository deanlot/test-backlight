import React from 'react';
import { LoadingIcon } from './Loading.styles';

type LoadingProps = {
  size?: number | string;
};

const Loading = ({ size = '12px' }: LoadingProps) => <LoadingIcon css={{ width: size, height: size }} />;

export default Loading;
