import React, { createElement } from 'react'
import styles from './index.scss'

import { navRouter } from '@routes'
import { withRouter, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Menu, Button } from 'antd'

@inject('userStore')
@observer
class Nav extends React.Component {
  state = { menuKey: { currentKey: ['home'], parentKey: [] } }
  Scroll = React.createRef()
  componentDidMount() {
    this.unListen = this.props.history.listen(this.getKey)
    this.getKey()
  }
  componentWillUnmount() { this.unListen&&this.unListen() }

  getKey = () => {
    let parentKey = [],
      currentKey = this.props.history.location.pathname.split('/')[1] || 'home'

    navRouter.forEach(item => {
      if (item.key === currentKey)
        return
      if (item.children && item.children.filter(items => items.key === currentKey).length > 0)
        parentKey = [item.key]
      this.setState({ menuKey: { currentKey: [currentKey], parentKey } })
    })
  }

  getScroll = () => {
    const value = this.Scroll.current
    value.scrollTop(0)
  }
  onSelect = key => {
    this.setState({
      menuKey: {
        ...this.state.menuKey,
        currentKey: key.keyPath
      }
    })
  }
  onOpenChange = key => {
    this.setState({
      menuKey: {
        ...this.state.menuKey,
        parentKey: key,
      }
    })
  }

  renderMenu = data => data.map(item => {
    if (item.children)
      return <Menu.SubMenu key={item.key} title={item.name}>
        {this.renderMenu(item.children)}
      </Menu.SubMenu>
    return <Menu.Item key={item.key}>
      <Link to={item.path}>{item.name}</Link>
    </Menu.Item>
  })

  render() {
    const { currentKey, parentKey } = this.state.menuKey
    return (
      <Scrollbars
        autoHide
        ref={this.Scroll}
      >
        <div className={styles.nav}>

          <Menu
            mode='inline'
            openKeys={parentKey}
            selectedKeys={currentKey}
            onOpenChange={this.onOpenChange}
            onSelect={this.onSelect}
          >
            <Menu.Item className={styles.logo}><Link to='/home'><img src='' alt='logo'/></Link></Menu.Item>
            {this.renderMenu(navRouter)}
          </Menu>
        </div>
      </Scrollbars>
    )
  }
}

export default withRouter(Nav)