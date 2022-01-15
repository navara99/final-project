DROP TABLE IF EXISTS fairs CASCADE; 

CREATE TABLE fairs (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  host_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  description varchar NOT NULL,
  start_time timestamp NOT NULL,
  end_time timestamp NOT NULL,
  poster varchar DEFAULT '/public/fairs/something.jpg'
);