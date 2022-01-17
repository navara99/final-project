DROP TABLE IF EXISTS fairs CASCADE; 

CREATE TABLE fairs (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  host_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  description varchar NOT NULL,
  start_time timestamp NOT NULL,
  end_time timestamp NOT NULL,
  poster varchar DEFAULT 'https://communityimpact.com/uploads/images/2020/07/13/67515.jpg'
);