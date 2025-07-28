create table orders (
    order_id serial primary key,
    customer_id integer references customer(customer_id),
    employee_id integer references employees(employee_id),
    order_date timestamp default current_timestamp,
    table_number integer,
    status VARCHAR(20) 
);

insert into orders (customer_id, employee_id, table_number, status) values
    (1, 1, 5, 'completed'),
    (2, 2, 3, 'pending'),
    (3, 1, 1, 'completed'),
    (4, 3, 2, 'cancelled'),
    (5, 2, 4, 'in progress'),
    (1, 1, 6, 'completed'),
    (2, 3, 2, 'completed');
	
insert into orders (customer_id, employee_id, table_number, status) values (6, 1, 7, 'completed'),
    (7, 2, 3, 'pending'),
    (8, 3, 5, 'completed'),
    (9, 1, 4, 'in progress');
	
select * from orders;	

create index idx_orders_date on orders(order_date);

create index idx_orders_employee on orders(employee_id);