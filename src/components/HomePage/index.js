import Link from 'next/link'


export default function HomePage() {
  return (
    <>
      <div className="h-full min-h-screen bg-black w-full flex flex-wrap">
        <div className="">
          <nav className="p-4">
            <ul className="flex">
              <li className="mr-2">
                <a className="uppercase text-xs text-white hover:underline" href="/" title="Home">
                  △
                </a>
              </li>
              <li className="mr-2">
                <a className="uppercase font-semibold text-xs text-white hover:underline" href="/musings" title="Longform articles">
                  Musings
                </a>
              </li>
              <li className="mr-2">
                <a className="uppercase font-semibold text-xs text-white hover:underline" href="/musings" title="Longform articles">
                  Projects
                </a>
              </li>
              <li className="mr-2">
                <a className="uppercase font-semibold text-xs text-white hover:underline" href="/fragments" title="Fragments (short articles)">
                  Fragments
                </a>
              </li>
              <li className="mr-2">
                <a className="uppercase font-semibold text-xs text-white hover:underline" href="/photos" title="Photography">
                  Photos
                </a>
              </li>
              <li className="mr-2">
                <a className="uppercase font-semibold text-xs text-white hover:underline" href="/about" title="About me &amp; this site">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row pl-8 pt-6 pr-8 mb-10">
          <div className="flex-1 text-white mr-12">
            <h1 className="uppercase text-xs">
              <a href="/about">About</a>
            </h1>
            <br />
            <p className="text-justify-sm font-serif font-thin">
              I'm <a href="https://twitter.com/__arshville__" rel="me">@arsh</a>, an engineer who Occasionally writes and paints.al writer and engineer.
            </p>
            <br />
            <p className="text-justify-sm font-serif font-thin">
              My hobbies are vast and interests follow suit, I created this site to document whatever I stumbled along and want to
              share with a broader audience.
            </p>
            <br />
            <hr/>
            <br />
            <h1 className="uppercase text-xs">
              <a href="/musings">Musings</a>
            </h1>
            <br />
            <p className="text-justify-sm font-serif font-thin">
              This section is dedicated to ideas, thoughts or understandings that I have dwelled enough to create a write up. Occasionally
              I will add short stories and other creative writing exersizes.
            </p>
            <br />
            <hr/>
            <br />
            <h1 className="uppercase text-xs">
              <a href="/projects">Projects</a>
            </h1>
            <br />
            <p className="text-justify-sm font-serif font-thin">
              A place where some of the projects I touch end up at. Some of these may be a work in progress while others will be marked as
              archived, there is a rare chance of encountering something marked as completed. Most of these projects are also things that
              I wanted to explore or learn about, there is no clear ending but the important part is the journey.
              <br />
              <br />
              This section is under
              construction, and will be as long as you can read this message.
            </p>
            <br />
            <hr/>
            <br />
            <h1 className="uppercase text-xs">
              <a href="/fragments">Fragments</a>
            </h1>
            <br />
            <p className="text-justify-sm font-serif font-thin">
              Consciousness notes that dont merit a longer write up.
            </p>
            <br />
          </div>
          <div className="flex-grow">
            <img className="object-cover w-full" src="https://images-na.ssl-images-amazon.com/images/I/611ZUGA3sTL._AC_SL1024_.jpg" alt="longhorn" />
          </div>
        </div>
      </div>
    </>
  )
}

