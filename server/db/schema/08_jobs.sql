DROP TABLE IF EXISTS jobs CASCADE;

CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  name varchar,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  description varchar NOT NULL,
  location varchar NOT NULL,
  employer_id int NOT NULL REFERENCES groups(id) ON DELETE CASCADE
);