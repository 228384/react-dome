import React from 'react'

import { pageRouter } from '@routes'
import { asyncComponent } from '@assets/util'
import { Route, Switch, Redirect } from 'react-router-dom'

import NotFound from './404'

const Page = () => {

  return (
    <div style={{ padding: '0 16px' }}>
      <Switch>
        <Redirect exact from='/' to='/home' />
        {pageRouter.map(item => (
          <Route
            key={item.path}
            path={item.path}
            component={asyncComponent(item.path)}
          />
        ))}
        <Route component={asyncComponent('/404')} />
      </Switch>
    </div >
  )
}

export default Page