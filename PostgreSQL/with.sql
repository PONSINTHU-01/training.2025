create table stuedent(student_id integer primary key ,
					 name varchar(100)not null,
					 marks int);
insert into stuedent (student_id,name,marks)values(101,'ram',80),(102,'ramya',90),(103,'raju',60);

select * from stuedent;

with top_stud as(
     select name,marks from stuedent)
	 select * from top_stud where marks>60;
	 
insert into stuedent (student_id,name,marks)values(104,'priya',70),(105,'selvi',79);

create index idx_marks on stuedent(marks);

select name,marks from stuedent where marks>70;

	 