import React from 'react'

import Topics from '../components/Topics'

export default ({ pageContext: { topics, urls, breadcrumbs }, location }) => {
  return (
    <Topics
      directories={topics}
      breadcrumbs={breadcrumbs}
      location={location}
    />
  )
}
