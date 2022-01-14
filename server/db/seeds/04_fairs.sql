copy fairs (
  name,
  host_id,
  description,
  start_time,
  end_time,
  poster
) FROM '/Users/yagneshparekh/lighthouse/final-project/server/db/raw_data/fairs.csv' -- replace path for related .csv file from your folder
DELIMITER ','
CSV HEADER;