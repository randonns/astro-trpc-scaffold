import { sql } from "kysely"
import { db } from "./db"

interface DeptEntity {
  id: number
  name: string
  createdAt: Date
}

export default {
  async findAll() {
    const { rows } = await sql<DeptEntity>`SELECT * FROM depts`.execute(db)
    return rows
  },
}
