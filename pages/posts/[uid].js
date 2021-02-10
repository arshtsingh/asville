import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"
import Prismic from "prismic-javascript"
import React from "react"

export default function Post({ data }) {
  return (
    <React.Fragment>
      <article>
        <header>{RichText.asText(data.title)}</header>
        <main>{RichText.asText(data.post_body)}</main>
      </article>
    </React.Fragment>
  )
}

export async function getStaticProps({ params }) {
  const { uid } = params
  const { data } = await client.getByUID("posts", uid)
  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "posts")
  )

  const paths = results.map(post => ({
    params: {
      uid: post.uid,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
