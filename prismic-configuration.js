import Prismic from "prismic-javascript"

export const apiEndpoint = process.env.URL
export const accessToken = process.env.PRISMIC_TOKEN

console.log(apiEndpoint, accessToken)
export const client = Prismic.client(apiEndpoint, { accessToken })
