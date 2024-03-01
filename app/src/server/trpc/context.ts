import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"

export function createContext({ req }: FetchCreateContextFnOptions) {
  // Request Header 정보로 Context 생성
  const authHeader = req.headers.get("Authorization")
  const accessToken = authHeader?.split(" ")[1]
  const user = accessToken ? { level: accessToken.split("-")[2] } : undefined
  return { user, accessToken }
}

export type Context = Awaited<ReturnType<typeof createContext>>
