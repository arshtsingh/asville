import Link from "next/link"
import Prismic from "prismic-javascript"
import { RichText, Date } from "prismic-reactjs"
import { client } from "../prismic-configuration"
import "tailwindcss/tailwind.css"

export default function Home(props) {
  return (
    <>
    <div class="w-full flex flex-wrap">
      <div class="w-full flex flex-col">
        <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <a href="#" class="bg-black text-white font-bold text-xl p-4">:D</a>
        </div>

        <div class="flex flex-col items-center justify-center h-screen my-auto ">
          <p class="text-center text-3xl">
            arshville
          </p>
          <div class="text-center pt-12 pb-12">
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
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

