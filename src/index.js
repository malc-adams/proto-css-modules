import style from './css/index.scss';

function init() {
  const element = document.createElement('div');
  const configList = ['bp-1-2-3', 'bp-2-3', 'bp-3'];

  for (let i = 0; i < configList.length; i++) {
    element.appendChild(createGrid(configList[i]));
  }

  return element;
}

function createGrid(config) {
  const configWrapper = document.createElement('div');
  configWrapper.classList.add(style[config]);

  const element = document.createElement('div');
  element.classList.add(style.grid);

  configWrapper.appendChild(element);

  // Create the grid items.
  for (let i = 0; i < 3; i++) {
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