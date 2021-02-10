import Link from 'next/link'
import Prismic from "prismic-javascript"
import { RichText, Date } from "prismic-reactjs"
import { client } from "../prismic-configuration"
import "tailwindcss/tailwind.css"

function Thoughts(props) {
  return (
    <>
      <ul>
        {props.posts.results.map((post) => (
          <li key={post.uid}>
            <Link href="thoughts/[id]" as={`/thoughts/${post.uid}`}>
              <a>{RichText.render(post.data.title)} </a>
            </Link>
           </li>
         ))}
      </ul>
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

