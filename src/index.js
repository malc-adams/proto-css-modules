import style from './css/index.scss';

function init() {
  const grid = createGrid();
  return grid;
}

function createGrid() {
  const element = document.createElement('div');
  element.classList.add(style.grid);

  // Create the grid items.
  for (let i = 0; i < 3; i++) {
    const item = createGridItem();
    element.appendChild(item);
  }

  return element;
}

function createGridItem() {
  const element = document.createElement('div');
  element.classList.add(style.item);
  return element;
}

document.body.appendChild(init());