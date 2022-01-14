-- -- Users table seeds here (Example)
-- INSERT INTO users (name) VALUES ('Alice');
-- INSERT INTO users (name) VALUES ('Kira');
copy users (
  first_name,
  last_name,
  email,
  profile_picture,
  password,
  username,
  bio 
) 
FROM '/Users/yagneshparekh/lighthouse/final-project/server/db/raw_data/users.csv' -- replace path for related .csv file from your folder
DELIMITER ','
CSV HEADER;