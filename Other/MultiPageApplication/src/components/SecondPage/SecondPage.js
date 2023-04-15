import myImage from './code.png';
import './component-styles.scss';

class SecondPage {
  render() {
    const img = document.createElement('img');
    img.src = myImage;
    img.alt = 'Code';
    img.classList.add('code-img');

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default SecondPage;
