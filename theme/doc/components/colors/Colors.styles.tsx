import { styled } from '@stitches/react';

export const GroupLabel = styled("h2", {
  textTransform: "capitalize"
})

export const Swatches = styled("div", {
  display: "grid",
  gridAutoFlow: "row",
  gridTemplateColumns: "repeat( auto-fit, 70px)",
  gap: 16
})