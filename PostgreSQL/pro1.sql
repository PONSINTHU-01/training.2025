create table employees(
   id serial primary key,
   name varchar(100),
   role varchar(50),
   salary integer
)

Insert into employees(name,role,salary)values('Ram','developer',50000);
Insert into employees(name,role,salary)values('Ram','Engineer',60000);
Insert into employees(name,role,salary)values('prakash','Manager',700000),
                                             ('Rahul','Developer',40000),
											 ('Alice','Traniee','30000');
INSERT INTO employees(name, role, salary) VALUES('Sita', 'Manager', 80000);
INSERT INTO employees(name, role, salary) VALUES('Lakshman', 'Developer', 55000);
INSERT INTO employees(name, role, salary) VALUES('Bharat', 'Tester', 45000);
INSERT INTO employees(name, role, salary) VALUES('Hanuman', 'Team Lead', 90000);

update employees set name='Raji' where id='6';

Select * from employees;

select * from employees where age IS NULL;

select DISTINCT role from employees;

Alter table employees add age integer;

update employees set role='Developer' where id=4;

select * from employees where role='Manager';

select * from employees where salary<>60000;

select name from employees where age IS NULL;
select Distinct role from employees;

select * from employees where name LIKE 'R%';

select name from employees where role in('Developer','Manager');

delete from employees where id=6;