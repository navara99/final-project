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
      const values = [senderId, receiverId, message];
      const queryString = `
        INSERT INTO  messages (sender_id , receiver_id, message)
        VALUES ($1, $2, $3)
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

  return { sendInterviewInvitation };
};

module.exports = interviewQueryGenerator;
