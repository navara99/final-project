-- DROP TABLE IF EXISTS fairs_jobs CASCADE; 

-- CREATE TABLE fairs_jobs (
--   id SERIAL PRIMARY KEY,
--   fair_id int NOT NULL REFERENCES fairs(id) ON DELETE CASCADE,
--   job_id int NOT NULL REFERENCES jobs(id) ON DELETE CASCADE
-- );