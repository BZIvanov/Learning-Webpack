import './component-styles.scss';

class NavMenu {
  render(navLinks) {
    const links = navLinks.map(
      (item) => `<li><a href="${item.url}">${item.title}<a/></li>`
    );

    const list = document.createElement('ul');
    list.classList.add('nav-menu');
    list.innerHTML = links.join('');

    const body = document.querySelector('body');
    body.appendChild(list);
  }
}

export default NavMenu;
