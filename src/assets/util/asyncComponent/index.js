import React from 'react'

const asyncComponent = path => {
  const load = () => import(`../../../page${path}`)
  // const load = () => import(`@page/home`)
  const Loading = () => {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center' }}
      >loading</div>
    )
  }

  class Loadable extends React.Component {
    constructor() {
      super()
      this.state = {
        component: Loading
      }
    }
    componentDidMount() {
      load().then(mod => {
        this.setState({ component: mod.default ? mod.default : mod })
      })
    }

    render() {
      return <this.state.component />
    }
  }

  return Loadable
}

export default asyncComponent