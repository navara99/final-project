const getData = ({ rows }) => rows;
const getFirstRecord = (result) => getData(result)[0];

const queryGenerator = (db) => {
  const getSchedule = async (id) => {
    const values = [id];
    const conductInterviewQueryString = `
    SELECT interviews.start_time AS start,
    interviews.end_time AS end,
    users.first_name AS candidate_first_name,
    users.last_name AS candidate_last_name,
    jobs.name AS job_title,
    users.id AS candidateId,
    applications.id AS applicationId
    FROM interviews
    JOIN applications ON interviews.application_id = applications.id
    JOIN users ON users.id = applications.user_id
    JOIN jobs ON applications.job_id = jobs.id
    WHERE interviewer_id = $1;
  `;

    try {
      const dataConductInterview = await db.query(
        conductInterviewQueryString,
        values
      );
      const events = getData(dataConductInterview).map((event) => {
        console.log("HI");
        const {
          start,
          end,
          candidate_first_name,
          candidate_last_name,
          job_title,
          candidateId,
          applicationId
        } = event;
        const title = `Interview ${candidate_first_name} ${candidate_last_name} for ${job_title}`;
        return { start, end, title, candidateId, applicationId };
      });
      console.log("EVENTS", events);
      return events;
    } catch (err) {
      console.log(err.message);
    }
  };

  return { getSchedule };
};

module.exports = queryGenerator;
