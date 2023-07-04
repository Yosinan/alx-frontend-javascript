export default function setFromArray(set, array) {
  if (Array.isArray(array)) {
    return new Set(array);
  }

  return set;
}