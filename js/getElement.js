export default (markup) => {
  let el = document.createElement('div');
  el.innerHTML = markup;
  return el.firstChild;
};
