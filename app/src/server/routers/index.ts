import { router } from "../trpc"
import user from "./user"
import dept from "./dept"

export const appRouter = router({
  user,
  dept,
})

export type AppRouter = typeof appRouter
