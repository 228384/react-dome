import React from 'react'
import styles from './index.scss'

import { observer, inject } from 'mobx-react'
import { Button } from 'antd'

const Home = ({ userStore }) => {

  const { changeLoginVisible } = userStore
  console.log('Boolean',Boolean(null))

  return (
    <div className={styles.container}>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
      <Button type='primary' onClick={changeLoginVisible}>SHOW</Button>
    </div>
  )
}

export default inject('userStore')(observer(Home))
