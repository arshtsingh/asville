import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav className='flex items-center flex-wrap p-3 '>
        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Navbar />
          </div>
        </div>
      </nav>
    </>
  )
}

