copy applications (
  name,
  user_id,
  job_id,
  resume
) FROM '/Users/yagneshparekh/lighthouse/final-project/server/db/raw_data/applications.csv' -- replace path for related .csv file from your folder
DELIMITER ','
CSV HEADER;