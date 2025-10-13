CREATE DATABASE school;

USE school;

SET SQL_SAFE_UPDATES = 0; 

CREATE TABLE Student (
    roll_no INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50),
    marks INT
);

INSERT INTO Student (roll_no, name, city, marks) VALUES
(110, 'adam', 'Delhi', 76),
(108, 'bob', 'Mumbai', 65),
(124, 'casey', 'Pune', 94),
(112, 'duke', 'Pune', 80);

SELECT * FROM Student;

SELECT * FROM Student 
WHERE marks > 75;

SELECT DISTINCT city FROM Student;

SELECT city, max(marks) 
FROM Student
GROUP BY city;

SELECT avg(marks) FROM Student;

ALTER TABLE Student
ADD COLUMN grade VARCHAR(2);

UPDATE Student
SET grade = CASE
    WHEN marks > 80 THEN 'O'
    WHEN marks BETWEEN 70 AND 80 THEN 'A'
    WHEN marks BETWEEN 60 AND 69 THEN 'B'
    ELSE 'C'
END;



