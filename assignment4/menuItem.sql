create table MenuItems (
    item_id serial primary key,
    item_name varchar(100) not null,
    category varchar(50),
    price integer,
    available boolean default true
);

insert into MenuItems (item_name, category, price, available) values
        ('Pizza', 'Mains', 250, true),
        ('Chicken Biryani', 'Mains', 300, true),
        ('Paneer Butter Masala', 'Mains', 280, true),
        ('Veg Manchurian', 'Starter', 180, true),
		('French Fries', 'Starter', 120, true),
		('Lemon Juice', 'Beverage', 60, true),
		('Chocolate Milkshake', 'Beverage', 150, true),
		('Vanilla Ice Cream', 'Dessert', 100, true),
		('Gulab Jamun', 'Dessert', 90, false),
		('Grilled Sandwich', 'Snacks', 130, true),
		('Masala Dosa', 'Breakfast', 80, true),
		('Idli Sambar', 'Breakfast', 70, true),
		('Tandoori Chicken', 'Mains', 350, false);

select * from MenuItems;