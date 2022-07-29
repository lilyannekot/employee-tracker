// Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database!`)
);

// Questions to add new department
const addDepartment = [
  {
    type: "input",
    name: "departmentName",
    message: "What is the name of the department you'd like to add?",
  },
];

// Questions to add new role
const addRole = [
  {
    type: "input",
    name: "roleTitle",
    message: "What is the name of the role you'd like to add?",
  },
  {
    type: "input",
    name: "roleSalary",
    message: "What is the salary of the role you'd like to add?",
  },
  {
    type: "list",
    name: "roleDepartment",
    message: "What department does the role belong in?",
    choices: ["Engineering", "Marketing", "Sales", "Finance", "Legal"],
  },
];

// Questions to add new employee
const addEmployee = [
  {
    type: "input",
    name: "employeeFirstName",
    message: "What is the first name of the employee you'd like to add?",
  },
  {
    type: "input",
    name: "employeeLastName",
    message: "What is the last name of this employee?",
  },
  {
    type: "input",
    name: "employeeRole",
    message: "What is the role of this employee?",
  },
  {
    type: "list",
    name: "employeeManager",
    message: "Who is the employee's manager?",
    choices: [
      "Greg Marzec, CFO",
      "Sally Mae, Software Engineer 1",
      "John Smith, Senior Software Engineer",
      "Josh Scheuring, SDR",
      "Jamie Roe, Sales AE",
      "Alex Farley, Lawyer",
      "Nicholas Bergo, Legal Assistant",
      "Lily Kot, Director of Marketing",
      "Kelli Frank, Demand Generation Lead",
      "Bryce Watson, Accountant",
    ],
  },
];

const employeeChoices = [
  "Greg Marzec",
  "Sally Mae",
  "John Smith",
  "Josh Scheuring",
  "Jamie Roe",
  "Alex Farley",
  "Nicholas Bergo",
  "Lily Kot",
  "Kelli Frank",
  "Bryce Watson",
];

// Questions to update an employee
const updateEmployee = [
  {
    type: "list",
    name: "selectEmployee",
    message: "What is the name of this employee?",
    choices: employeeChoices,
  },
  {
    type: "input",
    name: "newRole",
    message: "What is the id of the employee's new role?",
  },
];

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "starterPrompt",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ])
    .then(function (answers) {
      console.log(answers);
      if (answers.starterPrompt === "View all departments") {
        db.query("SELECT * FROM department", (err, results) => {
          if (err) {
            console.log(err);
          }
          console.table(results);
          return init();
        });
      } else if (answers.starterPrompt === "View all roles") {
        db.query("SELECT * FROM role", (err, results) => {
          if (err) {
            console.log(err);
          }
          console.table(results);
          return init();
        });
      } else if (answers.starterPrompt === "View all employees") {
        db.query("SELECT * FROM employee", (err, results) => {
          if (err) {
            console.log(err);
          }
          console.table(results);
          return init();
        });
      } else if (answers.starterPrompt === "Add a department") {
        inquirer.prompt(addDepartment).then(function (data) {
          console.table(data);
          db.query(
            `INSERT INTO department (name) VALUES("${data.departmentName}");`,
            (err, results) => {
              if (err) {
                throw err;
              }
            }
          );
          // How do I get the new department added to the list of all departments?
          return init();
        });
      } else if (answers.starterPrompt === "Add a role") {
        inquirer.prompt(addRole).then(function (data) {
          console.table(data);
          db.query(
            `INSERT INTO role (title, department, salary) VALUES("${data.roleTitle}", "${data.roleDepartment}", "${data.roleSalary}");`,
            (err, results) => {
              if (err) {
                throw err;
              }
            }
          );

          return init();
        });
      } else if (answers.starterPrompt === "Add an employee") {
        inquirer.prompt(addEmployee).then(function (data) {
          console.table(data);
          db.query(
            `INSERT INTO employee (first_name, last_name, role, manager_id) VALUES("${data.employeeFirstName}", "${data.employeeLastName}", "${data.employeeRole}", "${data.employeeManager}");`,
            (err, results) => {
              if (err) {
                throw err;
              }
            }
          );

          return init();
        });
      } else if (answers.starterPrompt === "Update an employee role") {
        inquirer.prompt(updateEmployee).then(function (data) {
          console.log(employeeChoices.indexOf(data.selectEmployee));
          db.query(
            `UPDATE employee SET role_id = ${
              data.newRole
            } WHERE employee.id = ${
              employeeChoices.indexOf(data.selectEmployee) + 1
            }`
          );
          return init();
        });
      }
    });
}

init();
