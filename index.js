const chalk = require("chalk");
const prompt = require("prompt-sync")({ sigint: true });

const helper = require("./utils/helpers");
const proc = require("./utils/process");

const functionDispatcher = {
  mkdir: helper.mkDirCommand,
  ls: helper.lsCommand,
  rm: helper.rmCommand,
  pwd: helper.pwdCommand,
  touch: helper.touchCommand,
  clear: helper.clearCommand,
  cd: helper.cdCommand,
  exit: helper.exitCommand,
  cat: helper.catCommand,
  echo: helper.echoCommand,
  cp: helper.cpCommand,
};

const fallbackCommand = () => {
  console.log(chalk.redBright("No such command found."));
};

while (1) {
  try {
    // Get command from the user
    const userCommand = String(prompt(`${chalk.magenta(process.cwd())} > `));

    // Split the commands by spaces
    const command = userCommand.split(" ");

    // Run the required command
    if (functionDispatcher.hasOwnProperty(command[0])) {
      functionDispatcher[command[0]](command);
    } else {
      fallbackCommand();
    }
  } catch (e) {
    console.log(chalk.redBright(`Invalid command format: `), e.message);
  }
}
