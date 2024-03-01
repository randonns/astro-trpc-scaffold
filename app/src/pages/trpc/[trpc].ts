import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import type { APIRoute } from "astro"
import { createContext } from "../../server/trpc/context"
import { appRouter } from "../../server/routers"

export const ALL: APIRoute = (opts) => {
  return fetchRequestHandler({
    endpoint: "/trpc",
    req: opts.request,
    router: appRouter,
    createContext,
  })
}
