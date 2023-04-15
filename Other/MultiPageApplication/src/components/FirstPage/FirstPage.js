import './component-styles.scss';

class FirstPage {
  render() {
    const body = document.querySelector('body');

    const textEl = document.createElement('p');
    textEl.classList.add('text-el');
    textEl.textContent = 'This is the First Page';

    body.appendChild(textEl);
  }
}

export default FirstPage;
