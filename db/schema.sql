DROP DATABASE IF EXISTS emplyoyee_tracker_db;

CREATE DATABASE emplyoyee_tracker_db;

USE emplyoyee_tracker_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  department_name VARCHAR(30)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  salary DECIMAL,
  department_id INT
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT
);

