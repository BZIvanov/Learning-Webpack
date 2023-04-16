import myImage from './code.png';
import './component-styles.scss';

class Movies {
  render() {
    const card = document.createElement('div');
    card.classList.add('card');

    const movieTitle = document.createElement('h3');
    movieTitle.textContent = 'My Movies';
    card.appendChild(movieTitle);

    const movieImage = document.createElement('img');
    movieImage.src = myImage;
    card.appendChild(movieImage);

    const body = document.querySelector('body');
    body.appendChild(card);

    import('DescriptionApp/Description').then((DescriptionModule) => {
      const Description = DescriptionModule.default;
      const description = new Description();
      description.render('The best movies');
    });
  }
}

export default Movies;
