create table customer(customer_id serial primary key,
					  name varchar(100),
					  phone varchar(100),
					  email varchar(250),
					  created_at timestamp default current_timestamp);
					  
insert into customer(name,phone,email)values
                      ('Arjun', '9876543210', 'arjun@example.com'),
                      ('Sita', '9765432101', 'sita@example.com'),
                      ('Ravi', '9123456789', 'ravi@example.com'),
                      ('Meera', '9012345678', 'meera@example.com'),
                      ('Sunil', '9090909090', 'sunil@example.com');
insert into customer(name,phone,email)values('Ram', '9078655434','ram@gmail.com'),
					  ('suresh', '9087563412','suresh@gmail.com'),
					  ('kumar', '98099878678','kumar@gmail.com'),
					  ('Rajesh','98767789075','rajesh@gmail.com');
					  
select * from customer;

					  				  