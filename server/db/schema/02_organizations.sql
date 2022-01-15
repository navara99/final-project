DROP TABLE IF EXISTS organizations
CASCADE;

CREATE TABLE organizations
(
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  email varchar,
  industry varchar,
  website varchar,
  description varchar NOT NULL
);