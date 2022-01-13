DROP TABLE IF EXISTS groups CASCADE; 

CREATE TABLE groups (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  description varchar NOT NULL
);