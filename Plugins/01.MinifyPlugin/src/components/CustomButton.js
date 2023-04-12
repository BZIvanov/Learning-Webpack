import './component-styles.scss';

class CustomButton {
  buttonCssClassName = 'green-button';

  paragraphCssClassName = 'orange-text';

  render() {
    const body = document.querySelector('body');

    const myButton = document.createElement('button');
    myButton.textContent = 'Click Me';
    myButton.classList.add(this.buttonCssClassName);
    // use arrow function here, so this can point to the parent class
    myButton.addEventListener('click', () => {
      const p = document.createElement('p');
      p.textContent = 'Some text';
      p.classList.add(this.paragraphCssClassName);
      body.appendChild(p);
    });

    body.appendChild(myButton);
  }
}

export default CustomButton;
