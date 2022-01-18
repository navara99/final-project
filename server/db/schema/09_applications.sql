DROP TABLE IF EXISTS applications
CASCADE;

CREATE TABLE applications
(
  id SERIAL PRIMARY KEY,
  message varchar,
  user_id int NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  job_id int NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  resume varchar NOT NULL
);