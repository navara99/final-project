const getData = ({ rows }) => rows;
const getFirstRecord = (result) => getData(result)[0];

const queryGenerator = (db) => {

  const createNewUser = async (userInfo) => {
    const { email, password, username, firstName, lastName } = userInfo;
    const values = [email, password, username, firstName, lastName];
    const queryString = `
      INSERT INTO users (email, password, username, first_name, last_name)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    try {
      const result = await db.query(queryString, values);
      const newUserInfo = getFirstRecord(result);

      return newUserInfo;
    } catch (err) {
      console.log(err);
    };
  };

  const getUserByValue = async (columnName, value) => {
    const values = [value];
    const queryString = `SELECT * FROM users WHERE ${columnName} = $1;`;

    try {
      const result = await db.query(queryString, values);
      const userInfo = getFirstRecord(result);

      return userInfo;
    } catch (err) {
      console.log(err);
    }
  };

  const createNewOrganization = async ({ name, description, email, industry, website }) => {
    const values = [name, description, email, industry, website];
    const queryString = `
      INSERT INTO groups (name, description, email, industry, website)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    try {
      const result = await db.query(queryString, values);
      const newOrganizationInfo = getFirstRecord(result);

      return newOrganizationInfo;
    } catch (err) {
      console.log(err);
    };
  }

  return { createNewUser, getUserByValue, createNewOrganization };
};

module.exports = queryGenerator;