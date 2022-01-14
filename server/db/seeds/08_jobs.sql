copy jobs (
  name,
  created_at,
  description,
  location ,
  employer_id
) FROM '/Users/yagneshparekh/lighthouse/final-project/server/db/raw_data/jobs.csv' -- replace path for related .csv file from your folder
DELIMITER ','
CSV HEADER;