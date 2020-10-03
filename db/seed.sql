USE employee_tracker_db

INSERT INTO department (id, name)
VALUES
(1, "Front End"),
(2,"Produce"),
(3,"Meat"),
(4,"Seafood"),
(5,"Deli");

INSERT INTO role (id, title, salary, department_id)
VALUES
(5, "Cashier Manager", 50000, 1),
(6, "Service Desk Clerk", 30000, 1),
(7, "Produce Clerk", 35000, 2),
(8, "Butcher", 45000, 3),
(9, "Deli Counter Clerk", 30000, 5),
(10, "General Manager", 85000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Roger", "Federer", 10, null),
("Stan", "Wawrinka", 8, 1),
("Rafa", "Nadal", 9, 1),
("Kei", "Nishikori", 7, 1),
("Novak", "Djokovic", 8, 1),
("Pete", "Sampras", 5, 1),
("Nick", "Kyrgios", 6, 1);