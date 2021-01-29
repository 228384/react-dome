import React from 'react'
import styles from './index.scss'

import { observer, inject } from 'mobx-react'
import { Form, Modal, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { SocailIcon } from '@component/iconFont'

function Login({ userStore }) {

  const { loginVisible, loginLoading, changeLoginVisible, onFinish } = userStore

  const loginWay = type => () => {
    console.log(type, '2222222222222')
  }
  const loginList = [
    { icon: 'icon-wechat', type: 'WECHAT' },
    { icon: 'icon-qq', type: 'QQ' },
    { icon: 'icon-weibo', type: 'WEIBO' },
    { icon: 'icon-twitter', type: 'TWITTER' },
  ]

  return (
    <Modal
      visible={loginVisible}
      title='请登录'
      footer={null}
      onCancel={changeLoginVisible}
      width={420}
    >
      <Form
        name='login'
        className={styles.login}
        onFinish={onFinish}
      >
        <Form.Item
          name='username'
          rules={[{ required: true, message: '用户名不能为空' }]}
        >
          <Input prefix={<UserOutlined />} placeholder='Username' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type='password'
            autoComplete='false'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className={styles['login-form-button']}>{loginLoading
            ? <React.Fragment>
              登录中
              <span className={styles.dot}>.</span>
              <span className={styles.dot}>.</span>
              <span className={styles.dot}>.</span>
            </React.Fragment>
            : '登录'
          }
          </Button>
        </Form.Item>
        <Form.Item className={styles['form-last-item']}>
          <div className={styles['logWay']}>
            <div>
              {loginList.map(item => <Button
                key={item.type}
                shape='circle'
                icon={<SocailIcon type={item.icon} />}
                onClick={loginWay(item.type)}></Button>
              )}
            </div>
            <Button type='link'>忘记密码</Button>
          </div>
        </Form.Item>
      </Form>
    </Modal >
  )
}

export default inject('userStore')(observer(Login))