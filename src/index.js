import style from './css/index.scss';

function init() {
  const element = document.createElement('div');
  const grid1 = createGrid(['bp-1-1', 'bp-2-2', 'bp-3-3']);
  const grid2 = createGrid(['bp-2-1', 'bp-3-2']);
  const grid3 = createGrid(['bp-3-1']);

  element.appendChild(grid1);
  element.appendChild(grid2);
  element.appendChild(grid3);

  return element;
}

function createGrid(config) {
  let i;
  const configWrapper = document.createElement('div');

  for (i = 0; i < config.length; i++) {
    configWrapper.classList.add(style[config[i]]);
  }

  const element = document.createElement('div');
  element.classList.add(style.grid);

  configWrapper.appendChild(element);

  // Create the grid items.
  for (i = 0; i < 3; i++) {
    const item = createGridItem();
    element.appendChild(item);
  }

  return configWrapper;
}

function createGridItem() {
  const element = document.createElement('div');
  element.classList.add(style.item);
  return element;
}

document.body.appendChild(init());