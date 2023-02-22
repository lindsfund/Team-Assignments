// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


//help retrieve parameter Strings
export function getParam(param) {
  const queryString = window.location.search;  
  const urlParams = new URLSearchParams(queryString);  
  const product = urlParams.get(param);

  return product;
}

//pasted from productDetails
// function grabs a *LIST* of Objects and thier template and inserts them into the DOM
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = 'afterbegin',
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  // if clear is true we need to clear out the contents of the parent
  if (clear) {
    parentElement.innerHTML = '';
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
}

// function to take *ONE* optional object and a template and insert the objects as HTML into the DOM
export function renderWithTemplate(template, parentElement, data, callback) {
 
  //if there is a callback...call it and pass data
  if (callback) {
    callback(data);
  }
  parentElement.insertAdjacentHTML('afterbegin', template);
}
//loads template
export async function loadTemplate(path){
  const response = await fetch(path);
  const template = await response.text();
  return template;
}
// function to build header and footer
export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const headerElement = document.querySelector('#mainHeader');
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const footerElement = document.querySelector('#mainFooter');

renderWithTemplate(headerTemplate, headerElement);
renderWithTemplate(footerTemplate, footerElement);
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}