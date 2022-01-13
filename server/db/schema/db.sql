CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "profile_picture" varchar,
  "password" varchar NOT NULL,
  "username" varchar UNIQUE NOT NULL,
  "bio" varchar
);

CREATE TABLE "groups" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" varchar NOT NULL
);

CREATE TABLE "users_groups" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "group_id" int
);

CREATE TABLE "fairs" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "host_id" int,
  "description" varchar NOT NULL,
  "start_time" timestamp NOT NULL,
  "end_time" timestamp NOT NULL,
  "poster" varchar DEFAULT '/public/fairs/something.jpg'
);

CREATE TABLE "fairs_groups" (
  "id" SERIAL PRIMARY KEY,
  "fair_id" int,
  "group_id" int
);

CREATE TABLE "fairs_users" (
  "id" SERIAL PRIMARY KEY,
  "fair_id" int,
  "user_id" int
);

CREATE TABLE "messages" (
  "id" SERIAL PRIMARY KEY,
  "sender_id" int,
  "receiver_id" int,
  "message" varchar
);

CREATE TABLE "jobs" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "created_at" datetime DEFAULT (now()),
  "description" varchar NOT NULL,
  "location" varchar NOT NULL,
  "employer_id" int NOT NULL
);

CREATE TABLE "applications" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "user_id" int NOT NULL,
  "job_id" int NOT NULL,
  "resume" varchar NOT NULL
);

CREATE TABLE "interview" (
  "id" SERIAL PRIMARY KEY,
  "application_id" int NOT NULL,
  "interviewer_id" int NOT NULL
);

CREATE TABLE "fairs_jobs" (
  "id" SERIAL PRIMARY KEY,
  "fair_id" int NOT NULL,
  "job_id" int NOT NULL
);

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "users_groups" ("user_id");

ALTER TABLE "groups" ADD FOREIGN KEY ("id") REFERENCES "users_groups" ("group_id");

ALTER TABLE "groups" ADD FOREIGN KEY ("id") REFERENCES "fairs" ("host_id");

ALTER TABLE "fairs" ADD FOREIGN KEY ("id") REFERENCES "fairs_groups" ("fair_id");

ALTER TABLE "groups" ADD FOREIGN KEY ("id") REFERENCES "fairs_groups" ("group_id");

ALTER TABLE "fairs" ADD FOREIGN KEY ("id") REFERENCES "fairs_users" ("fair_id");

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "fairs_users" ("user_id");

ALTER TABLE "messages" ADD FOREIGN KEY ("sender_id") REFERENCES "users" ("id");

ALTER TABLE "messages" ADD FOREIGN KEY ("receiver_id") REFERENCES "users" ("id");

ALTER TABLE "jobs" ADD FOREIGN KEY ("employer_id") REFERENCES "groups" ("id");

ALTER TABLE "applications" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "applications" ADD FOREIGN KEY ("job_id") REFERENCES "jobs" ("id");

ALTER TABLE "interview" ADD FOREIGN KEY ("application_id") REFERENCES "applications" ("id");

ALTER TABLE "interview" ADD FOREIGN KEY ("interviewer_id") REFERENCES "users" ("id");

ALTER TABLE "fairs_jobs" ADD FOREIGN KEY ("fair_id") REFERENCES "fairs" ("id");

ALTER TABLE "fairs_jobs" ADD FOREIGN KEY ("job_id") REFERENCES "jobs" ("id");
