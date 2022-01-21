const getData = ({ rows }) => rows;

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
  
  const responseToInterviewInvitation = () => {

  };

  return { sendInterviewInvitation, responseToInterviewInvitation };
};

module.exports = interviewQueryGenerator;
