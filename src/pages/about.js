import Link from 'next/link'
import SiteMap from '../components/SiteMap/'

import Prismic from "prismic-javascript"
import { RichText, Date } from "prismic-reactjs"
import { client } from "../../prismic-configuration"

function About(props) {
  return (
    <>
      <div className='grid grid-cols-6'>
        <div className='fixed'>
          <SiteMap />
        </div>
        <div className='col-start-2 col-span-4 p-1'>
          <div>
            <h1 className="text-9xl">me</h1>
            <p className="italic">pronoun</p>
            <p>used by a speaker to refer to himself or herself as the object of a verb or preposition</p>
            <br />
            <div className="divide-y">
              <h1 className="text-3xl">{RichText.asText(props.about.data.title)}</h1>
              <div>
                <RichText
                  render={props.about.data.body}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const about = await client.getSingle("about")
  return {
    props: {
      about,
    },
  }
}

export default About