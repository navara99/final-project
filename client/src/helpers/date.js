export const formatDate = (timestamp) => {
  const date = new Date(timestamp).toDateString();
  const formatedDate = date.slice(0, -5);
  const year = date.slice(-5);
  return formatedDate + ", " + year;
};

export const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const time = hours + ":" + minutes + " " + ampm;
  return time;
};

export const formatStartEndTime = (start, end) => {
  const startTime = formatTime(start);
  const endTime = formatTime(end);

  return startTime + " - " + endTime;
};
