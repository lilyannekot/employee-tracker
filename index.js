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
        "Add an employee",
        "Update an employee role",
      ],
    },
  ])
  .then(function (answers) {
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
    }
  });
