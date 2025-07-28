create table OrderItems (
    order_item_id serial primary key,
    order_id integer references orders(order_id),
    item_id integer references MenuItems(item_id),
    quantity integer ,
    item_price NUMERIC,
    UNIQUE(order_id, item_id)
);

insert into OrderItems (order_id, item_id, quantity, item_price) values
                  (1, 2, 1, 150.00),  
                  (1, 3, 2, 40.00),   
				  (2, 1, 1, 120.00), 
				  (2, 5, 1, 60.00),  
				  (3, 4, 3, 30.00),  
				  (3, 2, 1, 150.00);  
				  
select * from OrderItems;				  
