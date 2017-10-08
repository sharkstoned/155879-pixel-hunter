export default (template) => {
  const mainContainer = document.querySelector(`main.central`);
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(template);
};
