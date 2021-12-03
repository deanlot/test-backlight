import { styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledDisclaimer = styled(BaseTypography, {
  fontFamily: '$disclaimer',
  fontWeight: '$regular',
  fontStyle: 'italic',
  fontSize: '$2',
  lineHeight: '$5', // TODO: REVIEW - This is not line height #2. Figma says 5 which is much larger.
});
