import Head from 'next/head'
import SiteMap from '../components/SiteMap/'
import Prismic from "prismic-javascript"
import { RichText, Date } from "prismic-reactjs"
import { client } from "../../prismic-configuration"

export async function getServerSideProps() {
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'posts'),
    { orderings: '[my.posts.date desc]' }
  )

  return { props: { posts } }
}

function Musings(props) {
  return (
    <>
      <ul>
        {posts.results.map((post) => (
          <li key={post.uid}>
            <Link href="posts/[id]" as={`/posts/${post.uid}`}>
              <a>{RichText.render(post.data.title)} </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

// function Musings(props) {
//   return (
//     <>
//       <div className='grid grid-cols-6'>
//         <div className='fixed'>
//           <SiteMap />
//         </div>
//         <div className='col-start-2 col-span-4 p-5'>
//           <div>
//             <h1 class="text-9xl">muse</h1>
//             <p class="italic">verb</p>
//             <p>a state of deep thought or dreamy abstraction</p>
//             <hr/>
//             <div>
//               <ul>
//                 <div class="underline text-blue-500">
//                   {props.posts.results.map((post) => (
//                     <li key={post.uid}>
//                       <Link href="posts/[id]" as={`/posts/${post.uid}`}>
//                         <a>{RichText.render(post.data.title)} </a>
//                       </Link>
//                      </li>
//                    ))}
//                 </div>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

export default Musings