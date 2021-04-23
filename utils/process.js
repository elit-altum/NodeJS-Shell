const cp = require("child_process");

const daemonizeTerminal = () => {
  const terminalProcess = cp.fork("./index.js", {
    detached: true,
    killSignal: "SIGTERM",
    stdio: ["none", "none", "none", "none"],
  });

  terminalProcess.unref();
  return terminalProcess.pid;
};

const launchTerminal = () => {
  const terminalProcess = cp.fork("./index.js");
  return terminalProcess.pid;
};

module.exports = {
  daemonizeTerminal,
  launchTerminal,
};
