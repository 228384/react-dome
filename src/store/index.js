import UserStore from './user'
import HomeStore from './home'

const stores = {
  userStore: new UserStore(),
  homeStore: new HomeStore(),
}

export default stores