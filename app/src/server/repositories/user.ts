import { sql } from "kysely"
import { db } from "./db"

interface UserEntity {
  id: number
  name: string
  age: number
  deptId: number
  createdAt: Date
}

export default {
  async findAll() {
    const { rows } = await sql<UserEntity>`SELECT * FROM users`.execute(db)
    return rows
  },

  async create(name: string, age: number, deptId: number): Promise<number> {
    const { insertId } = await sql`
      INSERT INTO users
        (name, age, dept_id, created_at)
      VALUES
        (${name}, ${age}, ${deptId}, now())`.execute(db)
    return Number(insertId)
  },
}
