const getData = ({ rows }) => rows;
const getFirstRecord = (result) => getData(result)[0];

const makeConductInterviewData = (data) => {
  return getData(data).map((event) => {
    const {
      start,
      end,
      candidate_first_name,
      candidate_last_name,
      job_title,
      candidate_id,
      application_id,
    } = event;
    const title = `Interview ${candidate_first_name} ${candidate_last_name} for ${job_title}`;
    return {
      start,
      end,
      title,
      candidateId: candidate_id,
      applicationId: application_id,
      isInterview: true,
      asJobSeeker: false,
    };
  });
};

const makeInterviewData = (data) => {
  return getData(data).map((event) => {
    const {
      start,
      end,
      job_title,
      employer
    } = event;
    const title = `Interview for ${job_title} at ${employer}`;
    return {
      start,
      end,
      title,
      isInterview: true,
      asJobSeeker: true,
    };
  });
};

const queryGenerator = (db) => {
  const getSchedule = async (id) => {
    const values = [id];
    const conductInterviewQueryString = `
    SELECT interviews.start_time AS start,
    interviews.end_time AS end,
    users.first_name AS candidate_first_name,
    users.last_name AS candidate_last_name,
    jobs.name AS job_title,
    users.id AS candidate_id,
    applications.id AS application_id
    FROM interviews
    JOIN applications ON interviews.application_id = applications.id
    JOIN users ON users.id = applications.user_id
    JOIN jobs ON applications.job_id = jobs.id
    WHERE interviewer_id = $1;
  `;

    const interviewQueryString = `
    SELECT interviews.start_time AS start,
    interviews.end_time AS end,
    jobs.name AS job_title,
    organizations.name AS employer
    FROM interviews
    JOIN applications ON interviews.application_id = applications.id
    JOIN jobs ON applications.job_id = jobs.id
    JOIN organizations ON jobs.employer_id = organizations.id
    WHERE applications.user_id = $1;
  `;

    try {
      const dataConductInterview = await db.query(
        conductInterviewQueryString,
        values
      );

      const dataInterview = await db.query(interviewQueryString, values);

      let events = makeConductInterviewData(dataConductInterview);
      events = events.concat(makeInterviewData(dataInterview));

      console.log("EVENTS", events);
      return events;
    } catch (err) {
      console.log(err.message);
    }
  };

  return { getSchedule };
};

module.exports = queryGenerator;
