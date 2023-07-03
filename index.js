function display(one) {
  let container = document.createElement("div");
  container.className = "container";
  container.innerHTML = `
  <img src="${one.poster}">
  <p>${one.description}</p>
  `;
  document.querySelector(".films").appendChild(container);
  console.log(container);
}
function getDb() {
  fetch("http://localhost:3000/films").then((res) => {
    res.json().then((films) => films.forEach((one) => display(one)));
  });
}

getDb();