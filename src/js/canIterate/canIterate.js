export function canIterate(value) {
  if (value === null || value === undefined) {
    return false;
  }
  return !!value[Symbol.iterator];
}
