import React from 'react'
import styles from './index.scss'

import { observer, inject } from 'mobx-react'
import { Grid, Drawer, Button, Input } from 'antd'

import Nav from '@component/nav'

const { useBreakpoint } = Grid;

const Header = ({ userStore }) => {

  const { lg } = useBreakpoint()
  if ((typeof lg) === 'undefined')
    return null

  const { setValue, navVisible } = userStore
  const changeNavVisible = () => { setValue('navVisible') }
  const onClick = e => {
    if (e.target.nodeName === 'A')
      changeNavVisible()
  }

  return (
    <div className={styles.container}>
      {lg
        ? <span></span>
        : < Button type='primary' onClick={changeNavVisible}>三</Button>
      }
      <span>header</span>
      <Input.Search className={styles.search}></Input.Search>
      {!lg && <Drawer
        visible={navVisible}
        closable={false}
        placement='left'
        width='200'
        bodyStyle={{ padding: 0 }}
        onClose={changeNavVisible}
        onClick={onClick}
      ><Nav /></Drawer>}
    </div>
  )
}

export default inject('userStore')(observer(Header))