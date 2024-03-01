import { sql } from "kysely"
import { db } from "./db"

interface UserEntity {
  id: number
  name: string
  age: number
  deptId: number
  deptName: string
  createdAt: Date
}

export default {
  async findAll() {
    const { rows } = await sql<UserEntity>`
      SELECT u.*, d.name AS dept_name
        FROM users u, depts d
       WHERE u.dept_id = d.id`.execute(db)
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
