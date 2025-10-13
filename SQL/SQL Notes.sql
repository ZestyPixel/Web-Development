CREATE DATABASE IF NOT EXISTS COLLEGE;
CREATE DATABASE xyz;
DROP DATABASE IF EXISTS xyz;
USE college;
CREATE TABLE IF NOT EXISTS student(
	rollno INT NOT NULL UNIQUE PRIMARY KEY,
    name VARCHAR(20),
    age INT DEFAULT 18 CHECK(age>= 16 AND age<=100)
);

INSERT INTO student (rollno, name, age)
VALUES
(1, 'Umar', 21),
(2, 'John', 29),
(3, 'Jake', 18),
(4, 'Jacob', 17),
(5, 'Sophia', 22),
(6, 'Emma', 19),
(7, 'Liam', 16),
(8, 'Olivia', 24),
(9, 'Noah', 25),
(10, 'Ava', 25),
(11, 'Ethan', 27),
(12, 'Mia', 28),
(13, 'James', 28),
(14, 'Isabella', 30),
(15, 'Lucas', 31),
(16, 'Amelia', 32),
(17, 'Benjamin', 33),
(18, 'Charlotte', 34),
(19, 'Henry', 35),
(20, 'Harper', 36);

SELECT * FROM student;

SHOW TABLES; 
-- costraints are limits that can be placed: NOT NULL, UNIQUE, DEFAULT, CHECK
-- PRIMARY KEY must be unique. Primary key makes a column unique and not null. You can only have one primary key BUT it can be a composite key(include multiple columns).
-- FOREIGN KEY(column name) REFRENCES table_2_name(column name). You can have many foreign keys and they can have duplicate and null values.
-- SELECT column name/* for selecting all/ DISTINCT FROM table name --

SELECT name
FROM student 
WHERE age+1 = 18;

/* 
Arithmetic Operators :
    +, -, *, /, % 

Comparison Operators :
    =, !=, >, >=, <, <=

Logical Operators :
    AND, OR, NOT, IN, BETWEEN, ALL, LIKE, ANY

Bitwise Operators :
    &  (Bitwise AND), |  (Bitwise OR)
*/

SELECT *
FROM student 
WHERE age<20 AND age>16;

SELECT name, age 
FROM student
WHERE age = 16 OR age = 17;

SELECT *
FROM student 
WHERE age BETWEEN 19 AND 22;

SELECT * 
FROM student
WHERE name IN ("Umar", "Jacob");

SELECT *
FROM student
WHERE age NOT IN (16, 17);

-- To limit the no of rows returned
SELECT * 
FROM student
LIMIT 5;

-- To order in ascending or descending according to one or more columns
SELECT age, rollno FROM student
ORDER BY age, rollno ASC; 

-- Aggregrate functions
-- COUNT(), MAX(), MIN(), SUM(), AVG()

SELECT count(name)
FROM student
WHERE age = 18;

SELECT max(age)
FROM student;

SELECT min(age)
FROM student;

SELECT avg(age)
FROM student;

-- Group by clause groups rows that have the same values into summary rowes. Generally we use it with an aggregate function
-- We can only individually use columns that are used by group by in this statement. The ones not grouped by can only be used in an aggregrate function.
-- Having condition only applies to the group by column
SELECT age, count(rollno)
FROM student
GROUP BY age
HAVING age>18;

-- General Order: SELECT-> FROM-> WHERE-> GROUP BY-> HAVING-> ORDER BY

-- So that we can update the table
SET SQL_SAFE_UPDATES = 0; 

UPDATE student
SET age = 19
WHERE rollno = 5;

-- Delete rows
DELETE FROM student
WHERE age = 17;

-- Alter(to change the schema)
ALTER TABLE student
ADD COLUMN grade INT DEFAULT "A";

ALTER TABLE student
DROP COLUMN grade ;

ALTER TABLE student
RENAME TO students;

-- To Rename
ALTER TABLE student
CHANGE COLUMN rollno RollNo INT; 

-- To change datatype/constraints
ALTER TABLE student
MODIFY name varchar(30) DEFAULT NULL;

-- Truncate empties all of the data from the table, but does not delete the table itself
TRUNCATE TABLE student;






 














