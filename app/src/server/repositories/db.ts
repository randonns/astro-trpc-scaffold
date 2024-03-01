import pg from "pg"
import { Kysely, PostgresDialect, CamelCasePlugin } from "kysely"
import { dbHost, dbDatabase, dbUser, dbPassword, dbMaxConnection } from "../config"
import logger from "../logger"

export const db = new Kysely({
  dialect: new PostgresDialect({
    pool: new pg.Pool({
      host: dbHost,
      database: dbDatabase,
      user: dbUser,
      password: dbPassword,
      max: dbMaxConnection,
    }),
  }),
  plugins: [new CamelCasePlugin()],
})

logger.info({ dbHost, dbDatabase }, "Connection pool created")
