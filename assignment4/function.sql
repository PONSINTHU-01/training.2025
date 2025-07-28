select o.table_number, b.total_amount from orders o join bills b on o.order_id = b.order_id where 
   b.total_amount > 500 and DATE(b.bill_date) = current_date;

select e.employee_id, e.name, count(*) as bills_handled from bills b join orders o on b.order_id = o.order_id
  join employees e on o.employee_id = e.employee_id where date(b.bill_date) = current_date
  group by e.employee_id;
  
select mi.item_name, sum(oi.quantity)as total_sold from OrderItems oi join MenuItems mi on 
 oi.item_id = mi.item_id join orders o on oi.order_id = o.order_id 
 where o.order_date >= current_date - interval '7 days' group by mi.item_name order by total_sold desc limit 5;
  
select * from bills where payment_status = 'unpaid' and bill_date < current_date - interval '14 days';



