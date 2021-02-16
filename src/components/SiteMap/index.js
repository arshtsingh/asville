import Link from 'next/link'

export default function SiteMap() {
  return (
    <>
      <div className='flex flex-col p-5'>
        <Link href='/'>
          <a className=''>
            home
          </a>
        </Link>
        <Link href='/about'>
          <a className=''>
            about
          </a>
        </Link>
        <Link href='/musings'>
          <a className=''>
            musings
          </a>
        </Link>
        <Link href='https://github.com/arshtsingh'>
          <a className=''>
            github
          </a>
        </Link>
      </div>
    </>
  )
}