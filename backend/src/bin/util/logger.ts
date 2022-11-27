import util from "util";

const log = console.log;
console.log = (message?: any, ...optionalParams: any[]) => {
  log(
    `\u001b[38;5;240m[${new Date().toLocaleTimeString()}]\x1b[0m \u001b[38;5;69m[LOG]\x1b[0m:`,
    util.format(message, ...optionalParams)
  );
};

const error = console.error;
console.error = (message?: any, ...optionalParams: any[]) => {
  error(
    `\u001b[38;5;240m[${new Date().toLocaleTimeString()}]\x1b[0m \u001b[38;5;124m[ERROR]\x1b[0m:`,
    util.format(message, ...optionalParams)
  );
};

const warn = console.warn;
console.warn = (message?: any, ...optionalParams: any[]) => {
  warn(
    `\u001b[38;5;240m[${new Date().toLocaleTimeString()}]\x1b[0m \u001b[38;5;227m[WARN]\x1b[0m:`,
    util.format(message, ...optionalParams)
  );
};
