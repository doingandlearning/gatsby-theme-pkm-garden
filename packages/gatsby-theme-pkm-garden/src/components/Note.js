import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const NotePage = (props) => {
  const homeBlock = (
    <div>
      <button
        className="post-single__home-button"
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </div>
  )
  return (
    <>
      {homeBlock}
      <MDXRenderer className="py-2">{props.data.note.body}</MDXRenderer>
    </>
  )
}

export default NotePage
