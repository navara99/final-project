export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const formatedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}(${date.getDay()})`;
  // returns the day of the calendar month 1 to 31 at that time.
  // getMonth() returns the month number 0 to 11 at that time.
  // getFullYear()
  return formatedDate;
};
