export const convertToCssUnit = (value?: string|number) => {
  if (value === undefined) {
    return 'auto';
  }

  if (typeof value === 'number') {
    return `${value}px`
  }

  return value;
}
