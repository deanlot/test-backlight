// use the minimum scale multiplier to prevent the svg from overflowing out of the view box
export const getScaleMultiplier = (selectedSize, width, height): number =>
  Math.min(selectedSize / width, selectedSize / height);

type TranslationValues = {
  translateX: number;
  translateY: number;
};

export const getCenteringTranslationValues = (size, width, height, scaleMultiplier): TranslationValues => ({
  translateX: (size - width * scaleMultiplier) / 2,
  translateY: (size - height * scaleMultiplier) / 2,
});
