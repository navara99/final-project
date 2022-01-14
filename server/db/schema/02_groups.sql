DROP TABLE IF EXISTS groups
CASCADE;

CREATE TABLE groups
(
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  email varchar,
  industry varchar,
  website varchar,
  description varchar NOT NULL
);