import './component-styles.scss';

class CustomHeader {
  render() {
    const h1 = document.createElement('h1');
    h1.textContent = 'App Header';

    const body = document.querySelector('body');
    body.appendChild(h1);
  }
}

export default CustomHeader;
