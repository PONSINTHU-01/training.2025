create table Bills (
    bill_id serial primary key,
    order_id integer references orders(order_id),
    bill_number varchar(20) unique not null,
    bill_date timestamp default current_timestamp,
    total_amount numeric CHECK (total_amount >= 0),
    payment_status varchar(10) CHECK (payment_status IN ('paid', 'unpaid')),
    payment_mode varchar(20) CHECK (payment_mode IN ('Cash', 'Card', 'UPI')),
    remarks varchar(100)
);

insert into Bills (order_id, bill_number, total_amount, payment_status, payment_mode, remarks)
values(1, 'BILL2025072701', 330.00, 'paid', 'UPI', 'Paid via PhonePe'),
(2, 'BILL2025072702', 150.00, 'unpaid', 'Cash', 'Customer will pay at counter'),
(3, 'BILL2025072703', 330.00, 'paid', 'Card', 'Swiped HDFC debit'),
(4, 'BILL2025072704', 300.00, 'paid', 'Cash', NULL),
(5, 'BILL2025072705', 340.00, 'unpaid', 'UPI', 'Table service pending');

insert into bills (order_id, bill_number, total_amount, payment_status, payment_mode, remarks)
values (6, 'BILL2025072706', 850.00, 'paid', 'Card', 'Big order');

select * from Bills;
