export const getScale = (selectedSize, width, height) => ({
  width: selectedSize / width,
  height: selectedSize / height,
});
