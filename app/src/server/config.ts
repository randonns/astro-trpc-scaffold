const stringEnv = (name: string, defaultValue: string): string => process.env[name] ?? defaultValue
const numberEnv = (name: string, defaultValue: number): number =>
  parseInt(process.env[name] ?? String(defaultValue), 10)

export const dbHost = stringEnv("DB_HOST", "3.39.209.233")
export const dbDatabase = stringEnv("DB_DATABASE", "saas-dev")
export const dbUser = stringEnv("DB_USER", "root")
export const dbPassword = stringEnv("DB_PASSWORD", "switchboard")
export const dbMaxConnection = numberEnv("DB_MAX_CONNECTION", 10)
