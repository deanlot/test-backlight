export const getScaleMultiplier = (selectedSize, width, height) => ({
  widthMultiplier: selectedSize / width,
  heightMultiplier: selectedSize / height,
});
