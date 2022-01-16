export const formatDate = (timestamp) => {
  const date = (new Date(timestamp)).toDateString();
  const formatedDate = date.slice(0, -5);
  const year = date.slice(-5);
  return formatedDate + ", " + year;
};

export const formatTime = (timestamp) => {
  const date = (new Date(timestamp)).toDateString();
  const formatedDate = date.slice(0, -5);
  const year = date.slice(-5);
  return formatedDate + ", " + year;
};
