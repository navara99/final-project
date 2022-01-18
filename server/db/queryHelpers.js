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
    }
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

  const getAllFairs = async () => {
    const queryString = `SELECT * FROM fairs;`;

    try {
      const result = await db.query(queryString);
      const data = getData(result);

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  // Individual Fair
  const getFair = async (fair_id) => {
    const values = [fair_id];
    const queryString = `
    SELECT 
    fairs.id as Fair_Id, 
    fairs.description as Fair_Desc, 
    fairs.name as Fair_Name, 
    fairs.poster as POSTER, 
    (SELECT organizations.name FROM organizations WHERE host_id = organizations.id)as Host_Name, 
    organizations.id as Organizations_Id, 
    organizations.name as Organizations_Name, 
    organizations.description as Organizations_Desc 
    FROM fairs
    JOIN fairs_organizations ON (fairs.id = fairs_organizations.fair_id) 
    JOIN organizations ON (organizations.id = fairs_organizations.organization_id)
    WHERE fairs.id = $1
    `;

    try {
      const result = await db.query(queryString, values);
      return getData(result);
    } catch (err) {
      console.log(err.message);
    }
  };

  const createNewOrganization = async ({
    name,
    description,
    email,
    industry,
    website,
  }) => {
    const values = [name, description, email, industry, website];
    const queryString = `
      INSERT INTO organizations (name, description, email, industry, website)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    try {
      const result = await db.query(queryString, values);
      const newOrganizationInfo = getFirstRecord(result);
      return newOrganizationInfo;
    } catch (err) {
      console.log(err);
    }
  };

  const addUserToOrganization = async (user_id, organization_id, admin) => {
    const values = [user_id, organization_id, admin];
    const queryString = `
      INSERT INTO users_organizations (user_id, organization_id, admin)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    try {
      await db.query(queryString, values);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getOrganizationsByUser = async (user_id) => {
    const values = [user_id];
    const queryString = `
    SELECT organizations.*
    FROM users_organizations
    JOIN users ON users.id = users_organizations.user_id
    JOIN organizations ON organizations.id = users_organizations.organization_id
    GROUP BY organizations.id, users_organizations.user_id, users_organizations.admin
    HAVING users_organizations.user_id = $1;`;

    try {
      const result = await db.query(queryString, values);
      const { rows } = result;
      return rows;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getAllOtherUsers = async (user_id) => {
    const values = [user_id];
    const queryString = `
    SELECT * FROM users
    WHERE users.id <> $1;
    `;

    try {
      const result = await db.query(queryString, values);
      const { rows } = result;
      return rows;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getAllApplicationsByJobId = async (job_id) => {
    const values = [job_id];
    const queryString = `
    SELECT applications.*, users.first_name, users.last_name FROM applications
    JOIN jobs ON jobs.id = applications.user_id
    JOIN users ON applications.user_id = users.id
    WHERE jobs.id = $1;
    `;

    try {
      const result = await db.query(queryString, values);
      return result.rows;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getAllJobsByOrganizationId = async (organization_id) => {
    const values = [organization_id];
    const queryString = `
    SELECT jobs.* FROM jobs
    JOIN organizations ON jobs.organization_id = organizations.id
    WHERE organizations.id = $1
    ORDER BY jobs.created_at DESC;
    `

    try {
      const result = await db.query(queryString, values);
      const jobs = await Promise.all(
        result.rows.map(async (job) => {
          const jobWithApplicationArr = await getAllApplicationsByJobId(job.id);
          return { ...job, applications: jobWithApplicationArr };
        })
      );
      return jobs;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getAllMembersByOrganizationId = async (organization_id) => {
    const values = [organization_id];
    const queryString = `
    SELECT users.*, users_organizations.admin FROM users
    JOIN users_organizations ON users.id = users_organizations.user_id
    WHERE users_organizations.organization_id = $1
    ORDER BY users.first_name;
    `

    try {
      const result = await db.query(queryString, values);
      return result.rows;
    } catch (err) {
      console.log(err.message);
    }
  };

  const checkIfIAmMember = async (organization_id, user_id) => {
    const values = [organization_id, user_id];
    const queryString = `
    SELECT COUNT(*)
    FROM users_organizations
    WHERE organization_id = $1 AND user_id = $2;
    `;

    try {
      const result = await db.query(queryString, values);
      const { count } = getFirstRecord(result);
      return Number(count) ? true : false;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getOrganizationDetails = async (organization_id) => {
    const values = [organization_id];
    const queryString = `
    SELECT organizations.*
    FROM organizations
    WHERE organizations.id = $1;
    `;

    try {
      const result = await db.query(queryString, values);
      return getFirstRecord(result);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getAllFairsByOrganizationId = async (organization_id) => {
    const values = [organization_id];
    const queryString = `
    SELECT fairs.* FROM fairs
    JOIN fairs_organizations ON fairs.host_id = fairs_organizations.fair_id
    WHERE fairs_organizations.organization_id = $1
    ORDER BY fairs.start_time DESC;
    `;

    try {
      const result = await db.query(queryString, values);
      return result.rows;
    } catch (err) {
      console.log(err.message);
    }
  };

  const addJobToOrganization = async (organization_id, { title, description, experience, location, salary }) => {
    const values = [organization_id, title, description, experience, location, salary];
    const queryString = `
      INSERT INTO jobs (organization_id, title, description, experience, location, salary)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    try {
      const result = await db.query(queryString, values);
      const newJob = getFirstRecord(result);
      return newJob;
    } catch (err) {
      console.log(err.message);
    };

  };

  const createNewFair = async (name, description, startTime, endTime, hostId) => {
    const values = [name, description, startTime, endTime, hostId];
    const queryString = `
      INSERT INTO fairs (name, description, start_time, end_time, host_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    try {
      const result = await db.query(queryString, values);
      const newFair = getFirstRecord(result);
      return newFair;
    } catch (err) {
      console.log(err.message);
    };

  };

  //Messages queryhelper functions

  // Get All messages
  const getMessagesByUserId = async (user_id) => {
    const values = [user_id];
    const queryString = `
    SELECT * FROM messages WHERE sender_id = $1 OR receiver_id = $1
    `
    try {
      const result = await db.query(queryString, values);
      //getting other users 
      const other_users = result.rows.reduce((prev, curr) => {

        if (curr.sender_id !== user_id &&
          !prev.includes(curr.sender_id)) {
          prev.push(curr.sender_id)
        }
        if (curr.receiver_id !== user_id && !prev.includes(curr.receiver_id)) {
          prev.push(curr.receiver_id)
        }
        return prev;
      }, [])

      const contacts = await Promise.all(other_users.map(async (userId) => {
        const userInfo = await getUserByValue('id', userId);
        const userWithoutPassword = Object.assign({}, userInfo);
        delete userWithoutPassword.password;
        return userWithoutPassword;
      }))

      return { messagesArr: result.rows, contacts };
    } catch (error) {
      console.log(error)
    }
  }

  // create NewMessage

  const createNewMessage = async ({ sender_id, receiver_id, message }) => {
    try {
      const values = [sender_id, receiver_id, message];
      const queryString = `
        INSERT INTO  messages (sender_id , receiver_id, message)
        VALUES ($1, $2, $3)
        RETURNING *;
      `;
      const result = await db.query(queryString, values);
      return getFirstRecord(result);
    } catch (error) {
      console.log(error);
    }
  }

  // Get jobs by search

  const getJobsBySearch = async (searchTerm) => {
    const values = searchTerm ? ["%" + searchTerm + "%"] : null;
    const queryString = searchTerm ? `
    SELECT * FROM jobs
    WHERE title ILIKE $1 OR description ILIKE $1 OR location ILIKE $1;
    `: "SELECT * FROM jobs;";

    try {
      const result = await db.query(queryString, values);
      return result.rows;
    } catch (error) {
      console.log(error);
    };

  }

  return {
    createNewUser,
    getUserByValue,
    createNewOrganization,
    addUserToOrganization,
    getOrganizationsByUser,
    getAllOtherUsers,
    getAllFairs,
    getFair,
    getAllJobsByOrganizationId,
    getAllMembersByOrganizationId,
    getAllFairsByOrganizationId,
    getAllApplicationsByJobId,
    getOrganizationDetails,
    checkIfIAmMember,
    addJobToOrganization,
    createNewFair,
    getMessagesByUserId,
    createNewMessage,
    addJobToOrganization,
    getJobsBySearch
  };
};

module.exports = queryGenerator;
