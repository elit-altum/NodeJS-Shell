const shell = require("shelljs");
const chalk = require("chalk");

// 01. Make a new directory
const mkDirCommand = (command) => {
  if (command[1] === "-p") {
    shell.mkdir("-p", command[2]);
  } else {
    shell.mkdir(command[1]);
  }
};

// 02. Switch current working directories
const cdCommand = (command) => {
  shell.cd(command[1]);
};

// 03. Clear the terminal working space
const clearCommand = (command) => {
  console.clear();
};

// 04. Create a new file
const touchCommand = (command) => {
  if (command[1].startsWith("-")) {
    shell.touch(command[1], command[2]);
  } else {
    shell.touch(command[1]);
  }
};

// 05. Delete a folder or a file
const rmCommand = (command) => {
  if (command[1].startsWith("-")) {
    shell.rm(command[1], command[2]);
  } else {
    shell.rm(command[1]);
  }
};

// 06. Show the current working directory
const pwdCommand = () => {
  console.log(chalk.bgGray(shell.pwd()));
};

// 07. List the current files and directories
const lsCommand = (command) => {
  const dirs = shell.ls().toString().split(",").join("  ");
  console.log(chalk.green(dirs));
};

// 08. Exit the terminal
const exitCommand = (command) => {
  console.log(chalk.blueBright("\nExiting terminal. Thank you."));
  process.exit(1);
};

// 09. Show the contents of a file(s)
const catCommand = (command) => {
  const files = [];
  for (i = 1; i < command.length; ++i) {
    files.push(command[i]);
  }

  const output = shell.cat(files).toString();
  console.log(output);
};

// 10. Echo a message
const echoCommand = (command) => {
  let message = "";
  for (i = 1; i < command.length; ++i) {
    message += command[i] + " ";
  }

  shell.echo(message);
};

// 11. Copy command
const cpCommand = (command) => {
  shell.cp(command[1], command[2]);
};

module.exports = {
  mkDirCommand,
  lsCommand,
  rmCommand,
  pwdCommand,
  touchCommand,
  clearCommand,
  cdCommand,
  exitCommand,
  catCommand,
  echoCommand,
  cpCommand,
};
