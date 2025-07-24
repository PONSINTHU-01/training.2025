create table products(
	product_no integer primary key,
	name text not null,
	price numeric
);

insert into products(product_no,name,price) values(1,'soap',50);

insert into products(product_no,name,price) values(2,'shampoo',10);
insert into products(product_no,name,price)values(5,'detergent',100);

select * from products;

create table orders(
	order_id integer primary key,
	product_no integer references products(product_no),
	qunatity integer
);
alter table orders rename product_no to prod_id;

INSERT INTO orders(order_id, prod_id, qunatity) VALUES (101, 1, 3); 
INSERT INTO orders(order_id, prod_id, qunatity) VALUES (102, 2, 5);

delete from orders where order_id=101;
delete from orders where order_id=102;

select * from orders;
select p.product_no,p.name,o.order_id,o.qunatity from products p join orders o on p.product_no=o.prod_id;
select p.product_no,p.name,o.order_id,o.qunatity from products p left join orders o on p.product_no=o.prod_id;