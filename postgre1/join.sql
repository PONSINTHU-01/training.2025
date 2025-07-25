create table professor(p_id integer primary key,
					  name varchar(100),
					  course_id integer);
					  
insert into professor(p_id,name,course_id)values(1,'Janeela',101);	

insert into professor(p_id,name,course_id)values(2,'Annie',102);

insert into professor(p_id,name,course_id)values(3,'Gini',103);	

insert into professor(p_id,name,course_id)values(4,'JeyaSudha',NULL);

insert into professor(p_id,name,course_id)values
                      (5,'Ramesh',104),
                      (6,'Jenifer',NULL );

select * from professor;




