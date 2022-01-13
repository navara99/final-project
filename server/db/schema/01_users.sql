DROP TABLE IF EXISTS users CASCADE; 

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name varchar NOT NULL,
  last_name varchar NOT NULL,
  email varchar UNIQUE NOT NULL,
  profile_picture varchar,
  password varchar NOT NULL,
  username varchar UNIQUE NOT NULL,
  bio varchar
);