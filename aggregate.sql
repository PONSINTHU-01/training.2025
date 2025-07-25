create table stud(id serial primary key,
				 name varchar(250),
				 marks integer,
				 sub varchar(10));
				
insert into stud(id,name,marks,sub)values('1','Charlie',80,'Maths'),('2','Gergo',77,'Science'),('3','Anto',90,'Maths'),('4','Brutus',60,'Tamil'),('5','Raju',45,'Science');			
				 
select * from stud;				 

select sum(marks)from stud where marks>70;

select count(*)from stud;

select * from stud order by marks;

select name,marks from stud order by marks desc;

select avg(marks)from stud;

select sum(marks)from stud;

select sub,count(marks)from stud group by sub;


