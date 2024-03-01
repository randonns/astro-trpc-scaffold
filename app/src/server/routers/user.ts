import { z } from "zod"
import { router, publicProcedure } from "../trpc"
import UserService from "@/server/services/user"

export default router({
  all: publicProcedure
    .input(z.object({ fake: z.boolean().optional().default(false) }))
    .query(async ({ input }) => UserService.findAll(input.fake)),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1), age: z.number().min(1).max(150), deptId: z.number() }))
    .mutation(async ({ input }) => UserService.create(input.name, input.age, input.deptId)),
})
