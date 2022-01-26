DROP TABLE IF EXISTS users_organizations CASCADE;  

CREATE TABLE users_organizations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  admin BOOLEAN NOT NULL
);