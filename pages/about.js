import Link from 'next/link'
import Prismic from "prismic-javascript"
import { RichText, Date } from "prismic-reactjs"
import { client } from "../prismic-configuration"

function About(props) {
  return (
    <>
      <img src={props.home.data.image.url} alt="avatar image" height="140px" />
      <h1>{RichText.asText(props.home.data.headline)}</h1>
      <p>{RichText.asText(props.home.data.description)}</p>
    </>
  )
}

export async function getStaticProps() {
  const home = await client.getSingle("blog_home")
  return {
    props: {
      home,
    },
  }
}


export default About
