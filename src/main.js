import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import 'mobx-react-lite/batchingForReactDom'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
import '@assets/util/axios'
import stores from './store'

import App from './App'

ReactDom.render(
  <Provider {...stores}>
    <ConfigProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>, document.getElementById('root')
)