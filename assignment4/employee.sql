create table employees (
    employee_id serial primary key,
    name varchar(100) not null,
    role varchar(50) ,
    joining_date date default current_date
);
alter table employees add salary integer;

insert into employees (name, role, salary) values
          ('Ravi', 'Manager', 75000),
          ('Meena', 'Chef', 50000),
          ('Das', 'Waiter', 25000),
		  ('Divya', 'Cashier', 30000),
		  ('Suresh', 'Cleaner', 18000),
		  ('Priya', 'Receptionist', 28000),
		  ('Vignesh', 'Security', 20000),
		  ('Lakshmi', 'Chef', 52000),
		  ('Anand', 'Waiter', 26000),
		  ('Kiran', 'Manager', 77000);
		  
select * from employees;

		  
