import pageStyle from './css/index.scss';
import moduleStyle from './css/module.scss';

function init() {
  const element = document.createElement('div');

  // Create the unique modules.
  const grid1 = createGrid(['b1-l2', 'b2-l3', 'b3-l4']);
  const grid2 = createGrid(['b2-l2', 'b3-l3']);
  
  grid1.classList.add(pageStyle.gridWrapper, pageStyle.fullWidth);
  grid2.classList.add(pageStyle.gridWrapper, pageStyle.partWidth);
  
  element.appendChild(grid1);
  element.appendChild(grid2);

  return element;
}

function createGrid(config = []) {
  let i;
  const configWrapper = document.createElement('div');

  for (i = 0; i < config.length; i++) {
    configWrapper.classList.add(moduleStyle[config[i]]);
  }
  const grid = document.createElement('div');
  grid.classList.add(moduleStyle.grid);

  configWrapper.appendChild(grid);

  // Create the grid items.
  for (i = 0; i < 4; i++) {
    const item = createGridItem();
    grid.appendChild(item);
  }

  return configWrapper;
}

function createGridItem() {
  const element = document.createElement('div');
  element.classList.add(moduleStyle.item);

  const col = document.createElement('div');
  col.classList.add(moduleStyle.col);

  col.appendChild(element);

  return col;
}

document.body.appendChild(init());