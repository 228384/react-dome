import { observable, action } from 'mobx';
import { setPathValue } from 'pathval';

class HomeStore {
  @action.bound setValue(path, value = 'undefined') {
    if (value === 'undefined') {
      this[path] = !this[path]
      return
    }
    setPathValue(this, path, value);
  }

  @observable m = { a: false }
}

export default HomeStore