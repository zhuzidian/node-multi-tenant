create database conrepo_multi_tenant
;
\c conrepo_multi_tenant

create schema tenant1
;
create schema tenant2
;
\dn

set schema 'tenant1'
;
create table account (
  id serial,
  name text,
  primary key(id)
)
;
insert into account (name) values ('tenant1-user')
;


set schema 'tenant2'
;
create table account (
  id serial,
  name text,
  primary key(id)
)
;
insert into account (name) values ('tenant2-user')
;
