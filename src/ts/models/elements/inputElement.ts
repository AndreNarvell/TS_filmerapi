export function createInputElement(
  tagname,
  id,
  type,
  parentElement,
  placeholderText
) {
  const el = document.createElement(tagname);
  el.setAttribute("id", id);
  el.setAttribute("type", type);
  parentElement.append(el);
  el.placeholder = placeholderText;
  return el;
}
