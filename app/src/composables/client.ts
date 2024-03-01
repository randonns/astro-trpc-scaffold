import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { AppRouter } from "@/server/routers"

export const useClient = () => {
  return createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: "/trpc",
        headers() {
          return {}
        },
      }),
    ],
  })
}
