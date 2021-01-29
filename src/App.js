import React from 'react'
import styles from './App.scss'

import { observer, inject } from 'mobx-react'
import classnames from 'classnames'
import { Grid, Layout } from 'antd'

import Nav from '@component/nav'
import Login from '@component/login'
import Header from '@component/header'
import Footer from '@component/footer'
import Page from '@page'

const { useBreakpoint } = Grid;

const App = ({ userStore }) => {

  const { lg } = useBreakpoint()
  if ((typeof lg) === 'undefined')
    return null

  return (
    <div className={classnames(styles.app, { [styles.lg]: lg })}>
      <div className={styles.sider}>
        <Nav />
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <Page className={styles.page} />
        <Footer />
      </div>
      <Login />
    </div>
  )
}

export default inject('userStore')(observer(App))
