import { router, publicProcedure } from "../trpc"
import DeptService from "@/server/services/dept"

export default router({
  all: publicProcedure.query(async () => DeptService.findAll()),
})
