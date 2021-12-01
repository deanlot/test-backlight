import React from 'react';
import AccessibleIcon from '../src/AccessibleIcon';
import { StoryLayout } from '~/layout';
export default StoryLayout;

const SVG = (
  <svg width="24px" height="24px">
    <path
      d="M22.272,23.247a.981.981,0,0,0,.978-.978V9.747a1.181,1.181,0,0,0-.377-.8L12,.747,1.127,8.947a1.181,1.181,0,0,0-.377.8V22.269a.981.981,0,0,0,.978.978Z"
      key="M22.272,23.247a.981.981,0,0,0,.978-.978V9.747a1.181,1.181,0,0,0-.377-.8L12,.747,1.127,8.947a1.181,1.181,0,0,0-.377.8V22.269a.981.981,0,0,0,.978.978Z"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const AccessibleIconOne = () => <AccessibleIcon label="home" svg={SVG} />;
