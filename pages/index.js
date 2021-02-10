import Link from "next/link"
import Prismic from "prismic-javascript"
import { RichText, Date } from "prismic-reactjs"
import { client } from "../prismic-configuration"
import "tailwindcss/tailwind.css"

export default function Home(props) {
  return (
    <div>
      <h1 class="">arsh singh</h1>
      <ul class="text-indigo-800 inline-flex space-x-4">
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
          </li>
          <li>
          <Link href="/thoughts">
            <a>thoughts</a>
          </Link>
        </li>
       </ul>
    </div>
  )
}
