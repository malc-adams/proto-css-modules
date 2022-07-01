function component() {
  const element = document.createElement('div');
  element.innerHTML = "boilerplate-webpack";
  return element;
}

document.body.appendChild(component());