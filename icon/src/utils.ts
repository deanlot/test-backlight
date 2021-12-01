// use the minimum scale multiplier to prevent the svg from overflowing out of the view box
export const getScaleMultiplier = (selectedSize, width, height) =>
  Math.min(selectedSize / width, selectedSize / height);

export const getCenteringTranslationValues = (size, width, height, scaleMultiplier) => ({
  translateX: (size - width * scaleMultiplier) / 2,
  translateY: (size - height * scaleMultiplier) / 2,
});
