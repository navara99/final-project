const getData = ({ rows }) => rows;

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
      organization_name,
    } = event;
    const title = `Interview ${candidate_first_name} ${candidate_last_name} for ${job_title} (${organization_name})`;
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
    const { start, end, job_title, employer } = event;
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

const makeStallData = (data) => {
  return getData(data).map((event) => {
    const { start, end, fair_name, organization_name, fair_id } = event;
    const title = `${fair_name} (${organization_name})`;
    return {
      start,
      end,
      title,
      fairId: fair_id,
      isInterview: false,
      asJobSeeker: false,
    };
  });
};

const makeFairData = (data) => {
  return getData(data).map((event) => {
    const { start, end, fair_name, fair_id } = event;
    return {
      start,
      end,
      title: fair_name,
      fairId: fair_id,
      isInterview: false,
      asJobSeeker: true,
    };
  });
};

const queryGenerator = (db) => {
  const getSchedule = async (id) => {
    const values = [id];

    const interviewerQueryString = `
      SELECT interviews.start_time AS start,
      interviews.end_time AS end,
      users.first_name AS candidate_first_name,
      users.last_name AS candidate_last_name,
      jobs.name AS job_title,
      users.id AS candidate_id,
      applications.id AS application_id,
      organizations.name AS organization_name
      FROM interviews
      JOIN applications ON interviews.application_id = applications.id
      JOIN users ON users.id = applications.user_id
      JOIN jobs ON applications.job_id = jobs.id
      JOIN organizations ON jobs.employer_id = organizations.id
      WHERE interviewer_id = $1;
    `;

    const intervieweeQueryString = `
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

    const stallQueryString = `
      SELECT fairs.name AS fair_name,
      fairs.start_time AS start,
      fairs.end_time AS end,
      fair_id,
      organizations.name AS organization_name
      FROM fairs
      JOIN fairs_organizations ON fair_id = fairs.id
      JOIN organizations ON fairs_organizations.organization_id = organizations.id
      JOIN users_organizations ON users_organizations.organization_id = organizations.id
      WHERE user_id = $1;;
    `;

    const fairQueryString = `
      SELECT fairs.name AS fair_name,
      fairs.start_time AS start,
      fairs.end_time AS end,
      fair_id
      FROM fairs
      JOIN fairs_users ON fairs.id = fair_id
      WHERE user_id = $1;
    `;

    try {
      const dataConductInterview = await db.query(
        interviewerQueryString,
        values
      );
      const dataInterview = await db.query(intervieweeQueryString, values);
      const dataStall = await db.query(stallQueryString, values);
      const dataFair = await db.query(fairQueryString, values);

      let events = makeConductInterviewData(dataConductInterview);
      events = events.concat(makeInterviewData(dataInterview));
      events = events.concat(makeStallData(dataStall));
      events = events.concat(makeFairData(dataFair));
      return events;
    } catch (err) {
      console.log(err.message);
    }
  };

  return { getSchedule };
};

module.exports = queryGenerator;
