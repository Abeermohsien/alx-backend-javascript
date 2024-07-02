/**
 * changing a quantity.
 * @param {Map<String, number>} map - A map of name of
 * grocery and its quantity.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((v, k) => {
    if (v === 1) {
      map.set(k, 100);
    }
  });
}
