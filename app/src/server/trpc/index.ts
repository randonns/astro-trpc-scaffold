import { TRPCError, initTRPC } from "@trpc/server"
import type { Context } from "./context"

const t = initTRPC.context<Context>().create()

export const publicProcedure = t.procedure
export const router = t.router
export const middleware = t.middleware

// 로그인 한 사용자만 사용할 수 있는 Procedure
export const userProcedure = t.procedure.use(({ next, ctx }) => {
  if (!ctx.user) throw new TRPCError({ code: "UNAUTHORIZED" })
  return next()
})

// Admin만 사용할 수 있는 Procedure
export const adminProcedure = userProcedure.use(({ next, ctx }) => {
  if (ctx.user?.level !== "admin") throw new TRPCError({ code: "FORBIDDEN", message: "Admin only" })
  return next()
})
