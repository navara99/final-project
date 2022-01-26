DROP TABLE IF EXISTS organizations
CASCADE;

CREATE TABLE organizations
(
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  email varchar,
  industry varchar,
  website varchar,
  description varchar NOT NULL,
  logo varchar DEFAULT 'https://www.yva.ai/hs-fs/hubfs/the_company_default_logo_574534.png?width=512&name=the_company_default_logo_574534.png'
);