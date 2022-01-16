DROP TABLE IF EXISTS interviews CASCADE;

CREATE TABLE interviews (
  id SERIAL PRIMARY KEY,
  application_id int NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
  interviewer_id int NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  start_time timestamp NOT NULL,
  end_time timestamp NOT NULL
);