import Link from 'next/link'
export default function Post({ date, title }) {
  return (
    <div className="post">
      <div className="text">
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
      </div>
    </div>
  )
}
export default Post