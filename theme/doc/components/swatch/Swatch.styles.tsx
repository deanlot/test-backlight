import { styled } from '@stitches/react';

export const SwatchContainer = styled("div", {
  marginBottom: 32,
  fontSize: 11,
});

export const Label = styled("div", {
  textTransform: "capitalize",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  width: 85,
  textAlign: "center"
});

export const Samples = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,
  width: "fit-content"
});

export const ColorSample = styled("div", {
  width: 40,
  height: 40,
  boxShadow: '0 2px 8px rgba(149, 157, 165, 0.3)',
  borderRadius: "50%"
});

export const TextSample = styled("div", {
  textTransform: "uppercase"
});