import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledHelper = styled(BaseTypography);
export const helperStyles = css({
  fontFamily: '$fonts$helper',
  fontWeight: '$fontWeights$regular',
  fontStyle: 'italic',
  fontSize: '$fontSizes$2',
  lineHeight: '$lineHeights$4', // TODO: REVIEW - This is not line height #2. Figma says 4 which is much larger to provide white space. Should this be line height #2 + padding instead?
});
