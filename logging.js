const log4js = require("log4js");
log4js.configure({
    appenders: {
        console: { type: "console" },
        file: {
            type: 'dateFile',
            filename: 'bot.log',
            numBackups: 3,
            pattern: 'yyyy-MM-dd',
        }
    },
    categories: {
        default: {
            appenders: ["file", "console"],
            level: "info"
        }
    },
    layouts: {
        customLayout: {
            type: 'pattern',
            pattern: '%d{hh:mm:ss} %-5p %c - %m',
        }
    }
});

const logger = log4js.getLogger();

module.exports = {
    logger
}