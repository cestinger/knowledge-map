export { Account, Session } from "blade/auth/schema"
import { model, link, string } from "blade/schema"

export const Page = model({
  slug: "page",
  fields: {
    // TODO: have this part be in jazz, and somehow work within blade
    // for now keeping it inside blade itself
    // prob best to keep a ref to jazz account with the page data here
    // and a key?
    content: string(),
    owner: link({
      target: "account",
      required: true,
    }),
  },
})

export const Link = model({
  slug: "link",
  fields: {
    url: string(),
    title: string(),
    owner: link({
      target: "account",
      required: true,
    }),
  },
})

export const GlobalLink = model({
  slug: "globalLink",
  fields: {
    url: string(),
    title: string(),
    owner: link({
      target: "account",
      required: true,
    }),
  },
})
