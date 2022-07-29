USE employee_db;

INSERT INTO department (id, name)
VALUES (1, "Engineering"),
       (2, "Marketing"),
       (3, "Sales"),
       (4, "Finance"),
       (5, "Legal");

INSERT INTO role (title, department, department_id, salary)
VALUES ("Software Engineer I", "Engineering", 1, 125000),
       ("Senior Software Engineer", "Engineering", 1, 200000),
       ("Demand Generation Lead", "Marketing", 2, 80000),
       ("Director of Marketing", "Marketing", 2, 160000),
       ("SDR", "Sales", 3, 65000),
       ("Sales AE", "Sales", 3, 80000),
       ("Accountant", "Finance", 4, 90000),
       ("CFO", "Finance", 4, 300000),
       ("Legal Assistant", "Legal", 5, 100000),
       ("Lawyer", "Legal", 5, 215000);

INSERT INTO employee (id, first_name, last_name, role, role_id, manager, manager_id)
VALUES (1, "Greg", "Marzec", "CFO", 8, NULL, NULL),
       (2, "John", "Smith", "Senior Software Engineer", 2, NULL, NULL),
       (3, "Sally", "Mae", "Software Engineer I", 1, "John Smith", 2),
       (4, "Jamie", "Roe", "Sales AE", 6, NULL, NULL),
       (5, "Josh", "Scheuring", "SDR", 5, "Jamie Roe", 4),
       (6, "Alex", "Farley", "Lawyer", 10, NULL, NULL),
       (7, "Nicholas", "Bergo", "Legal Assistant", 9, "Alex Farley", 6),
       (8, "Lily", "Kot", "Director of Marketing", 4, NULL, NULL),
       (9, "Kelli", "Frank", "Demand Generation Lead", 3, "Lily Kot", 8),
       (10, "Bryce", "Watson", "Accountant", 7, "Greg Marzec", 1);

