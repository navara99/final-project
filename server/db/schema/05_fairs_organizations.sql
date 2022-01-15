DROP TABLE IF EXISTS fairs_organizations CASCADE; 

CREATE TABLE fairs_organizations (
  id SERIAL PRIMARY KEY,
  fair_id INTEGER REFERENCES fairs(id) ON DELETE CASCADE,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE
);