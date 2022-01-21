const getData = ({ rows }) => rows;
const getFirstRecord = (result) => getData(result)[0];

const interviewQueryGenerator = (db) => {
  const sendInterviewInvitation = async (
    start,
    end,
    senderId,
    receiverId,
    applicationId,
    message
  ) => {
    try {
      const values = [senderId, receiverId, message, applicationId, start, end];
      const queryString = `
        INSERT INTO  messages (sender_id , receiver_id, message, is_invitation, application_id, start_time, end_time)
        VALUES ($1, $2, $3, true, $4, $5, $6)
        RETURNING *;
      `;
      const result = await db.query(queryString, values);
      // const userInfo = await getUserByValue("id", receiverId);
      // const userWithoutPassword = Object.assign({}, userInfo);
      // delete userWithoutPassword.password;
      // const newMessage = {
      //   messageObj: getFirstRecord(result),
      //   receiver: userWithoutPassword,
      // };
      return getData(result);
      // return getFirstRecord(result);
    } catch (error) {
      console.log(error);
    }
  };

  const responseToInterviewInvitation = async (
    id,
    application_id,
    start_time,
    end_time,
    interviewer_id,
    is_accepted,
    newMessage
  ) => {
    const values = [id, is_accepted, newMessage];
    const queryString = `
      UPDATE messages
      SET is_accepted = $2,
      message = $3
      WHERE id = $1
      RETURNING *;`;

    try {
      const result = await db.query(queryString, values);

      if (!is_accepted) return getData(result);

      const values2 = [application_id, interviewer_id, start_time, end_time];
      const queryString2 = `
      INSERT INTO interviews (application_id, interviewer_id, start_time, end_time)
      VALUES ($1, $2, $3, $4)
      RETURNING *;`;
      const result2 = await db.query(queryString2, values2);
      return getData(result2);
    } catch (error) {
      console.log(error);
    }
  };


  const getInterviewById = async (id) => {
    const values = [id];
    const queryString = `
    SELECT interviews.*, jobs.*, organizations.*
    FROM interviews 
    JOIN applications ON applications.id = interviews.application_id
    JOIN jobs ON applications.job_id = jobs.id
    JOIN organizations ON jobs.organization_id = organizations.id
    WHERE interviews.id = $1;
    `;

    try {
      const result = await db.query(queryString, values);
      const interview = getFirstRecord(result);
      console.log(interview);
      return interview;
    } catch (err) {
      console.log(err);
    }

  };

  return { sendInterviewInvitation, responseToInterviewInvitation, getInterviewById };
};

module.exports = interviewQueryGenerator;
