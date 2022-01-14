copy groups (
 name,
description 
) FROM '/Users/yagneshparekh/lighthouse/final-project/server/db/raw_data/groups.csv' -- replace path for related .csv file from your folder
DELIMITER ','
CSV HEADER;