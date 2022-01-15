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
      VALUES ($1, $2, $3, $4, $5)
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

  const addUserToOrganization = async (user_id, group_id, admin) => {
    const values = [user_id, group_id, admin];
    const queryString = `
      INSERT INTO users_groups (user_id, group_id, admin)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    try {
      await db.query(queryString, values);
    } catch (err) {
      console.log(err.message);
    };

  };

  const getOrganizationsByUser = async (user_id) => {
    const values = [user_id];
    const queryString = `
    SELECT groups.id, groups.name, groups.description, groups.email, groups.industry, groups.website FROM users_groups 
    JOIN users ON users.id = users_groups.user_id
    JOIN groups ON group_id = users_groups.group_id
    GROUP BY groups.id, users_groups.user_id
    HAVING user_id = $1;`;

    try {
      const result = await db.query(queryString, values);
      const { rows } = result;
      return rows;
    } catch (err) {
      console.log(err.message);
    };
  };

  const getAllOtherUsers = async (user_id) => {
    const values = [user_id];
    const queryString = `
    SELECT * FROM users
    WHERE users.id <> $1;
    `

    try {
      const result = await db.query(queryString, values);
      const { rows } = result;
      return rows;
    } catch (err) {
      console.log(err.message);
    };

  };

  return {
    createNewUser,
    getUserByValue,
    createNewOrganization,
    addUserToOrganization,
    getOrganizationsByUser,
    getAllOtherUsers
  };
};

module.exports = queryGenerator;