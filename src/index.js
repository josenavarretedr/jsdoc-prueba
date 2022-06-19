import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  Hola mundo
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/**
 *
 * @param {*} n1
 * @param {*} n2
 */
function add(n1, n2) {
  return n1 + n2;
}
