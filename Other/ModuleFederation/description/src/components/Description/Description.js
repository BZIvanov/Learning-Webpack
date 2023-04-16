import './component-styles.scss';

class Description {
  render(text) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const movieDescription = document.createElement('p');
    movieDescription.textContent = text;
    wrapper.appendChild(movieDescription);

    const body = document.querySelector('body');
    body.appendChild(wrapper);
  }
}

export default Description;
