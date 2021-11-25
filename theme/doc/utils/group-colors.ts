export const groupColors = (colors: { [key: string]: string | number | boolean }) =>
  Object.keys(colors).reduce((grouped, color) => {
    const group = color.split('-')[0];
    grouped[group] = grouped[group] || {};
    grouped[group][color] = colors[color];
    return grouped;
  }, {});
