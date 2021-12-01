import React from 'react';
import FeedbackButton from '../src/FeedbackButton';
import { StoryLayout } from '~/layout';

export default StoryLayout;

export const solidReady = () => (
  <FeedbackButton
    onClick={(e) => {
      return Promise.resolve();
    }}
  >
    SOLID
  </FeedbackButton>
);
