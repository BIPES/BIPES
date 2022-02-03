drop table if exists mqtt;

create table mqtt (
  lastEdited datetime not null default(cast((julianday('now') - 2440587.5)*86400000 as integer)) primary key,
  session varchar(18) not null,
  topic varchar(18) not null,
  data text not null
);

create trigger stamped update of session, topic, data on mqtt
begin
  update mqtt set lastEdited = cast((julianday('now') - 2440587.5)*86400000 as integer) where lastEdited = old.lastEdited;
end;
