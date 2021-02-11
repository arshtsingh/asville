import Link from 'next/link'
import Prismic from "prismic-javascript"
import { RichText, Date } from "prismic-reactjs"
import { client } from "../prismic-configuration"
import "tailwindcss/tailwind.css"

function Thoughts(props) {
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
          <h1 class="text-3xl">muse</h1>
          <p class="italic">noun</p>
          <p>a state of deep thought or dreamy abstraction</p>
          <p>----------------------------------------------------------------------</p>
          <ul>
            <div class="underline text-blue-500">
              {props.posts.results.map((post) => (
                <li key={post.uid}>
                  <Link href="thoughts/[id]" as={`/thoughts/${post.uid}`}>
                    <a>{RichText.render(post.data.title)} </a>
                  </Link>
                 </li>
               ))}
             </div>
          </ul>
        </div>
      </div>
    </>
  )
}
export async function getStaticProps() {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "posts"),
    { orderings: "[my.post.date desc]" }
  )
  return {
    props: {
      posts,
    },
  }
}

export default Thoughts

