import './component-styles.scss';

class List {
  render(listItems, parent) {
    const list = document.createElement('ul');

    const items = listItems.map((item) => `<li>${item}</li>`);
    list.innerHTML = items.join('');

    parent.appendChild(list);
  }
}

export default List;
