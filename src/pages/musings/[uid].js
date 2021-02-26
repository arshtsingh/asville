import React from 'react'
import Link from "next/link"
import Prismic from "prismic-javascript"
import { RichText, Date } from 'prismic-reactjs'
import { client } from '../../../prismic-configuration'

function Post({ post }) {
  return (
    <div>
    <Link href="/">
      <a>Back to blog list</a>
    </Link>
    <header> {RichText.render(post.data.title)} </ header>
    <body> {RichText.render(post.data.post_body)} </ body>
  </div>
 )
}

export default Post

export async function getStaticProps({ params }) {
  const { uid } = params
  const post = await client.getByUID('posts', uid)

  return {
    props: {
      post,
    },
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
