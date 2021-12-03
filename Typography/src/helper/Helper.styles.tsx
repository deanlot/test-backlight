import { styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledHelper = styled(BaseTypography, {
  fontFamily: '$helper',
  fontWeight: '$regular',
  fontStyle: 'italic',
  fontSize: '$2',
  lineHeight: '$4', // TODO: REVIEW - This is not line height #2. Figma says 4 which is much larger to provide white space. Should this be line height #2 + padding instead?
});
