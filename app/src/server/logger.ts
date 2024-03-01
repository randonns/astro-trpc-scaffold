import pino from "pino"

export default pino({
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    level: (label) => ({ level: label }),
    bindings: () => ({}),
  },
})
