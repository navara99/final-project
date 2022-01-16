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
    SELECT users_organizations.admin, organizations.id, organizations.name, organizations.description, organizations.email, organizations.industry, organizations.website FROM users_organizations 
    JOIN users ON users.id = users_organizations.user_id
    JOIN organizations ON organization_id = users_organizations.organization_id
    GROUP BY organizations.id, users_organizations.user_id, users_organizations.admin
    HAVING user_id = $1;`;

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
    JOIN organizations ON jobs.employer_id = organizations.id
    WHERE organizations.id = $1;
    `;

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
    WHERE users_organizations.organization_id = $1;
    `;

    try {
      const result = await db.query(queryString, values);
      return result.rows;
    } catch (err) {
      console.log(err.message);
    }
  };

  const checkIfIAmMember = async (organization_id, user_id) => {
    const values = [organization_id, user_id];
    console.log(user_id, organization_id);
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
    WHERE fairs_organizations.organization_id = $1;
    `;

    try {
      const result = await db.query(queryString, values);
      return result.rows;
    } catch (err) {
      console.log(err.message);
    }
  };

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
  };
};

module.exports = queryGenerator;
