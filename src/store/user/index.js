import { observable, action } from 'mobx'
import { setPathValue } from 'pathval'
import { userApi } from '@api'
import md5 from 'md5'


class UserStore {
  @action.bound setValue(path, value = 'undefined') {
    if (value === 'undefined') {
      this[path] = !this[path]
      return
    }
    setPathValue(this, path, value)
  }

  // 登录
  @observable loginVisible = false
  @observable loginLoading = false

  @action.bound changeLoginVisible() {
    this.loginVisible = !this.loginVisible
  }
  @action.bound onFinish(values) {
    this.loginLoading = true
    userApi.login()
      .then(action(res => {
        this.loginVisible = false
        this.loginLoading = false
      }))
      .catch(action(data => {
        this.loginLoading = false
      }))
  }

  // 导航
  @observable navVisible = false
}

export default UserStore