import React from 'react'

import load from '@loadable/component'

const Loading = () => {

  return (
    <div>Loading</div>
  )
}

const loadable = path => {
  return load(() => import(`../../../page${path}`))
}

export default loadable