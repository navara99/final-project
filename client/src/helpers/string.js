export const shortenStr = (str, num) => {
  const charCount = str.length;
  if (charCount < num) return str;
  return str.slice(0, num) + "...";
}
