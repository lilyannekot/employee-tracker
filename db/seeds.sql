INSERT INTO department (id, name)
VALUES (1, "Engineering"),
       (2, "Marketing"),
       (3, "Sales"),
       (4, "Finance"),
       (5, "Legal");

INSERT INTO role (title, department_id, salary)
VALUES ("Software Engineer I", 1, 125000),
       ("Senior Software Engineer", 1, 200000),
       ("Demand Generation Lead", 2, 80000),
       ("Director of Marketing", 2, 160000),
       ("SDR", 3, 65000),
       ("Sales AE", 3, 80000),
       ("Accountant", 4, 90000),
       ("CFO", 4, 300000),
       ("Legal Assistant", 5, 100000),
       ("Lawyer", 5, 215000);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Greg", "Marzec", 8, NULL),
       (2, "Sally", "Mae", 1, 3),
       (3, "John", "Smith", 2, NULL),
       (4, "Josh", "Scheuring", 5, 5),
       (5, "Jamie", "Roe", 6, NULL),
       (6, "Alex", "Farley", 10, NULL),
       (7, "Nicholas", "Bergo", 9, 10),
       (8, "Lily", "Kot", 4, NULL),
       (9, "Kelli", "Frank", 3, 8),
       (10, "Bryce", "Watson", 7, 1);

