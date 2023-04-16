import List from '../List/List';
import './component-styles.scss';

class Users {
  render() {
    const wrapper = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = 'Users';
    wrapper.appendChild(h1);

    const list = new List();
    list.render(['Iva', 'Milen', 'Eva'], wrapper);

    const body = document.querySelector('body');
    body.appendChild(wrapper);
  }
}

export default Users;
