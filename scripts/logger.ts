const INFO = 0;
const WARN = 1;
const ERROR = 2;

const LOG_LEVEL = process.env.NODE_ENV == "development" ? INFO : WARN;

export class Logger {
    static info(message: string) {
        if (LOG_LEVEL > INFO) {
            return;
        }
        console.log(`[\x1b[1;32mInfo\x1b[0m] ${message}`)
    }
    static warn(message: string) {
        if (LOG_LEVEL > WARN) {
            return;
        }
        console.log(`[\x1b[1;33mWarn\x1b[0m] ${message}`);
    }
    static error(message: string) {
        if (LOG_LEVEL > ERROR) {
            return;
        }
        console.log(`[\x1b[1;31mError\x1b[0m] ${message} `)
    }
}