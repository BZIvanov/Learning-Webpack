class Header {
  render(headerText = 'Generic text') {
    const body = document.querySelector('body');

    const h1 = document.createElement('h1');
    h1.textContent = headerText;

    body.appendChild(h1);
  }
}

export default Header;
