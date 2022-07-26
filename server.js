// Dependencies
const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for JSON parsing and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
