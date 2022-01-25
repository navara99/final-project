DROP TABLE IF EXISTS jobs CASCADE;

CREATE TABLE jobs
(
  id SERIAL PRIMARY KEY,
  title varchar,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  description varchar NOT NULL,
  experience varchar NOT NULL,
  location varchar NOT NULL,
  salary varchar NOT NULL,
  organization_id int NOT NULL REFERENCES organizations(id) ON DELETE CASCADE
);