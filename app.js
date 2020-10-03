const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: null,
  database: "employee_tracker_db"
});

connection.connect(function (err) {
  if (err) {
      console.log(err);
  }
  console.log("Connected as id: ", connection.threadId + "\n");
  start();
});

function start() {
    inquirer
      .prompt({
        name: "employeeStart",
        type: "list",
        message: "What would you like to do?",
        choices: [
                  "Add a department",
                  "Add a role",
                  "Add an employee",
                  "View departments",
                  "View roles",
                  "View employees",
                  "Update an employee's role",
                  "Exit"
                ]
      })
      .then((answer) => {
      switch(answer.employeeStart) {
          case "Add a department" :
              addDepartment();
              break;
          case "Add a role" :
              addRole();
              break;
          case "Add an employee" :
            console.log("test");
              addEmployee();
              break;
          case "View departments" :
              viewDepartments();
              break;
          case "View roles" :
              viewRoles();
              break;
          case "View employees" :
              viewEmployees();
          case "Update an employee's role" :
              updateRole();
              break;
          case "Exit":
              connection.end();                      

      }
    });  
}
  
function addDepartment() {

  inquirer.prompt([
    {
    type: "input",
    message: "What is the name of the new department?",
    name: "deptName"
    }
    // {
    //   type: "input",
    //   message: "What is the department id number?",
    //   name: "deptID"
    // }
  ])
  .then(function(answer){

      connection.query("INSERT INTO department (department_name) VALUES (?)", [answer.deptName] , function(err, res) {
          if (err) throw err;
          console.table(res)
          start()
      })
  })

}

function addRole() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What's the name of the role?",
      name: "roleName"
    },
    {
      type: "input",
      message: "What is the salary for this role?",
      name: "salaryTotal"
    },
    {
      type: "input",
      message: "What is the department id number?",
      name: "deptID"
    }
  ])
  .then(function(answer) {


    connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.deptID], function(err, res) {
      if (err) throw err;
      console.table(res);
      start();
    });
  });
}

function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "What's the first name of the employee?",
      name: "firstName"
    },
    {
      type: "input",
      message: "What's the last name of the employee?",
      name: "lastName"
    },
    {
      type: "input",
      message: "What is the employee's role id number?",
      name: "roleID"
    },
    {
      type: "input",
      message: "What is the manager id number?",
      name: "managerID"
    }
  ])
  .then(function(answer) {

    
    connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function(err, res) {
      if (err) throw err;
      console.table(res);
      start();
    });
  });
}

function viewDepartments() {
  // select from the db
  let query = "SELECT * FROM department";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
  // show the result to the user (console.table)
}

function viewRoles() {
    // select from the db
  let query = "SELECT * FROM role";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
  // show the result to the user (console.table)
}

function viewEmployees() {
    // select from the db
  let query = "SELECT * FROM employee";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
  // show the result to the user (console.table)
}

function updateRole() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "Which employee would you like to update?",
      name: "employeeTransfer"
    },

    {
      type: "input",
      message: "What do you want to update to?",
      name: "updateRole"
    }
  ])
  .then(function(answer) {

    connection.query('UPDATE employee SET role_id=? WHERE first_name= ?',[ answer.updateRole, answer.employeeTransfer],function(err, res) {
      console.table(res);
      start();
    });
  });
}




