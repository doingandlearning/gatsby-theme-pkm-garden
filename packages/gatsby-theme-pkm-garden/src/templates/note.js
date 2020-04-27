import { graphql } from 'gatsby'

import Note from '../components/Note'

export default Note

export const pageQuery = graphql`
  query($id: String!) {
    note: mdx(id: { eq: $id }) {
      id
      body
      fileAbsolutePath
    }
  }
`
