create table course (course_id integer,
					  course_name varchar(100),
					  duration_months integer
);

insert into course (course_id, course_name, duration_months) values(101, 'cloud computing', 6);

insert into course (course_id, course_name, duration_months) values(102, 'Full stack', 7);

insert into course (course_id, course_name, duration_months) values(103, 'Digital marketing', 5);

insert into course (course_id, course_name, duration_months) values(104, 'Python', 6);

insert into course (course_id, course_name, duration_months) values(105, 'Operating System', 6);

insert into course (course_id, course_name, duration_months) values(106, 'Mobile development', 5);

select * from course;

select p.name,p.course_id,c.course_name from professor p inner join course c on p.course_id=c.course_id;

select p.name,p.course_id,c.course_name from professor p left join course c on p.course_id=c.course_id;

select p.name,p.course_id,c.course_name,c.duration_months from professor p right join course c on p.course_id=c.course_id;
