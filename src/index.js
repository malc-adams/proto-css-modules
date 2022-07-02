import style from './css/index.module.scss';

function component() {
  const element = document.createElement('div');
  element.classList.add(style.hello);
  element.innerHTML = "proto-css-modules";
  return element;
}

document.body.appendChild(component());