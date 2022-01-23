export function createTextElement(tagname, id, textContent, parentElement) {
  const el = document.createElement(tagname);
  el.setAttribute("id", id);
  el.textContent = textContent;
  parentElement.append(el);
  return el;
}
