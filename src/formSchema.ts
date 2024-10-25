import * as z from "zod"

export const schema = z.object({
  query: z.string()
})

export type SearchInput = z.infer<typeof schema>