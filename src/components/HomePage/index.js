import Link from 'next/link'
export default function HomePage() {
  return (
    <>
      <div className="w-full flex flex-wrap bg-black">
        <div class="w-full flex flex-col">
          <div class="flex flex-col items-center justify-center h-screen my-auto ">
            <div class="flex flex-row">
              <p class="text-center text-4xl p-1 text-white">
                arshville
              </p>
              <div className="inline-flex items-center p-1">
                <a className="bg-black text-white font-bold text-xl hover:bg-white hover:text-black p-1">:D</a>
              </div>
            </div>
            <div class="text-center pt-12 pb-12">
              <Link href='/'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center text-white hover:bg-indigo-800 hover:text-white '>
                  home
                </a>
              </Link>
              <Link href='/about'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center text-white hover:bg-indigo-800 hover:text-white'>
                  about
                </a>
              </Link>
              <Link href='/musings'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center text-white hover:bg-indigo-800 hover:text-white'>
                  musings
                </a>
              </Link>
              <Link href='https://github.com/arshtsingh'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center text-white hover:bg-indigo-800 hover:text-white'>
                  github
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

