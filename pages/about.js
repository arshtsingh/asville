import Link from 'next/link'
import Prismic from "prismic-javascript"
import { RichText, Date } from "prismic-reactjs"
import { client } from "../prismic-configuration"

function About(props) {
  return (
    <>
      <ul class="text-l text-indigo-800 inline-flex space-x-6">
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/thoughts">
            <a>musings</a>
          </Link>
        </li>
      </ul>
      <div class="flex justify-center h-screen">
        <div>
          <h1 class="text-3xl">me</h1>
          <p class="italic">pronoun</p>
          <p>used by a speaker to refer to himself or herself as the object of a verb or preposition</p>
          <p>----------------------------------------------------------------------</p>
          <p>{RichText.asText(props.home.data.description)}</p>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const home = await client.getSingle("blog_home")
  return {
    props: {
      home,
    },
  }
}


export default About
