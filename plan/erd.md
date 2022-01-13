Tables
- users
- business_profile
- bridge table users:business_profile
- career fair
- bridge table career fair:business_profile
- messages
- jobs
- application
- interviews
- bridge table jobs:career fair
- bridge table career fair:users

## dbdiagram.io

<!-- Table users as U {
id int [pk, increment] // auto-increment
first_name varchar [not null] 
last_name varchar [not null]
email varchar [not null, unique] 
profile_picture varchar
password varchar [not null] 
username varchar [not null, unique] 
bio varchar 
} 

Table groups {
id int [pk, increment] 
name varchar [not null] 
description varchar [not null] 
}


Table users_groups {
id int [pk, increment]
user_id int
group_id int
} 

Ref: U.id > users_groups.user_id
Ref: groups.id > users_groups.group_id 

Table fairs {
id int [pk, increment]
name varchar [not null] 
host_id int
description varchar [not null]
start_time timestamp [not null]
end_time timestamp [not null]
poster varchar [default: "/public/fairs/something.jpg"]
}

Ref: groups.id > fairs.host_id

Table fairs_groups {
id int [pk, increment]
fair_id int
group_id int
} 

Ref: fairs.id > fairs_groups.fair_id
Ref: groups.id > fairs_groups.group_id 

Table fairs_users {
id int [pk, increment]
fair_id int
user_id int
} 

Ref: fairs.id > fairs_users.fair_id
Ref: users.id > fairs_users.user_id 

Table messages {
id int [pk, increment]
sender_id int
receiver_id int
message varchar
} 

Ref: messages.sender_id > users.id
Ref: messages.receiver_id > users.id 

Table jobs {
id int [pk, increment]
name varchar
created_at datetime [default: `now()`] 
description varchar [not null]
location varchar [not null]
employer_id int [not null]
} 

Ref: jobs.employer_id > groups.id 

Table applications {
id int [pk, increment]
name varchar
user_id int [not null]
job_id int [not null]
resume varchar [not null]
}

Ref: applications.user_id > users.id
Ref: applications.job_id > jobs.id 

Table interview {
id int [pk, increment]
application_id int [not null]
interviewer_id int [not null]
} 

Ref: interview.application_id > applications.id
Ref: interview.interviewer_id > users.id 

Table fairs_jobs {
id int [pk, increment]
fair_id int [not null]
job_id int [not null]
} 

Ref: fairs_jobs.fair_id > fairs.id
Ref: fairs_jobs.job_id > jobs.id  -->