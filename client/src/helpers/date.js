import moment from "moment-timezone";

export const formatDate = (timestamp) => {
  const date = new Date(timestamp).toDateString();
  const formatedDate = date.slice(0, -5);
  const year = date.slice(-5);
  return formatedDate + ", " + year;
};

export const formatStartEndTime = (start, end) => {
  const timezone = moment.tz.guess();
  const startTime = moment.tz(start, timezone).format('ha z');
  const endTime = moment.tz(end, timezone).format('ha z');

  return startTime.slice(0, -3) + " - " + endTime;
};
