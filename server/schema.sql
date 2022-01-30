drop table if exists projects;

create table projects (
  uid varchar(6) primary key,
  auth varchar(18) not null,
  author varchar(25) not null,
  name varchar(100) not null,
  createdAt datetime not null default(cast((julianday('now') - 2440587.5)*86400000 as integer)),
  lastEdited datetime not null default(cast((julianday('now') - 2440587.5)*86400000 as integer)),
  data text not null
);

create trigger update_projects update of name, data on projects
begin
  update projects set lastEdited = cast((julianday('now') - 2440587.5)*86400000 as integer) where auth = old.auth;
end;
