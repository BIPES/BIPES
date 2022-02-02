drop table if exists projects;

create table mqtt (
  stamp datetime not null default(cast((julianday('now') - 2440587.5)*86400000 as integer)),
  sid varchar(25) not null,
  time varchar(6) primary key,
  topic varchar(18) not null,
  message real not null,
);

create trigger stamped update of sid, time, topic, message
begin
  update mqtt set stamp = cast((julianday('now') - 2440587.5)*86400000 as integer) where stamp = old.stamp;
end;
