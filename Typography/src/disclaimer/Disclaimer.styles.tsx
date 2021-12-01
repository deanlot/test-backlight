import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledDisclaimer = styled(BaseTypography);
export const disclaimerStyles = css({
  fontFamily: '$fonts$disclaimer',
  fontWeight: '$fontWeights$regular',
  fontStyle: 'italic',
  fontSize: '$fontSizes$2',
  lineHeight: '$lineHeights$5', // TODO: REVIEW - This is not line height #2. Figma says 5 which is much larger.
});
