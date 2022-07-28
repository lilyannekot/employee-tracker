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
    }
];

const addRole = [
    {
        type: "input",
        name: "roleName",
        message: "What is the name of the role you'd like to add?"
    },
    {
        type: "input",
        name: "roleSalary",
        message: "What is the salary of the role you'd like to add?"
    },
    {
        type: "list",
        name: "roleDepartment",
        message: "What department does the role belong in?",
        choices: [
            "Engineering",
            "Marketing",
            "Sales",
            "Finance",
            "Legal",
        ],
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
  .then(function(answers) {
    if (answers.starterPrompt === "View all departments") {
      db.query("SELECT * FROM department", (err, results) => {
        console.log(results);
      });
    } else if (answers.starterPrompt === "View all roles") {
      db.query("SELECT * FROM role", (err, results) => {
        console.log(results);
      });
    } else if (answers.starterPrompt === "View all employees") {
      db.query("SELECT * FROM employee", (err, results) => {
        console.log(results);
      });
    } else if (answers.starterPrompt === "Add a department") {
        inquirer.prompt(addDepartment)
        .then (function(data) {
            console.log(data);
            // How do I get the new department added to the list of all departments?
        })
    } else if (answers.starterPrompt === "Add a role") {
        inquirer.prompt(addRole)
        .then (function(data)) {
            console.log(data);
        }
    }
  })
}
