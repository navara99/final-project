export const objectIsEmpty = (obj) => {
  const numOfKey = Object.keys(obj).length;
  if (!numOfKey) return true;
  return false;
};