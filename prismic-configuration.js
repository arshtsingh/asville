import Prismic from "prismic-javascript"
require('dotenv').config()

export const apiEndpoint = process.env.URL
export const accessToken = process.env.PRISMIC_TOKEN

export const client = Prismic.client(apiEndpoint, { accessToken })
