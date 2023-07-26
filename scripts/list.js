function buttonPress() {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  li.innerText = "This list";
  ul.append(li);
  document.body.append(ul);
}

let text = "Steve Gary";

export default buttonPress;

// Below is CommonJS syntax for export
// module.exports = buttonPress;

// If you want to export multiple items, use curly braces to export an object
// module.exports = {buttonPress, text};
