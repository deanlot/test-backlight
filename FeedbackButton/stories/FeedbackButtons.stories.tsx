import React from 'react';
import FeedbackButton from '../src/FeedbackButton';
import { layout } from '../../utils/src/story-decorator';

export default layout;

export const primaryReady = () => (
  <FeedbackButton
    variant={'primary'}
    showOnClickResult
    onClickAsync={(e) => {
      return Promise.resolve();
    }}
  >
    PRIMARY
  </FeedbackButton>
);