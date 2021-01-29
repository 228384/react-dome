import React from 'react'
import styles from './index.scss'

import { Button } from 'antd'
import { withRouter } from 'react-router-dom'
import notFound from '@assets/image/404.jpg'

const NotFound = ({ history }) => {

  return (
    <div className={styles.container}>
      <div>
        <img src={notFound} />
        <Button type='primary' onClick={() => { history.push('/home') }}>返回首页</Button>
      </div>
    </div>
  )
}

export default withRouter(NotFound)