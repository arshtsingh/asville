import Head from 'next/head'
import SiteMap from '../components/SiteMap/'

function Musings(props) {
  return (
    <>
      <div className='grid grid-cols-6'>
        <div>
          <SiteMap />
        </div>
        <div className='col-start-2 col-span-4 p-5'>
          <div>
            <h1 class="text-9xl">muse</h1>
            <p class="italic">verb</p>
            <p>a state of deep thought or dreamy abstraction</p>
            <hr/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Musings