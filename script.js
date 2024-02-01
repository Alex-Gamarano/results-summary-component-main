let list = document.querySelector(".list");

fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((element) => {
      let listItem = document.createElement("li");
      list.appendChild(listItem);
      listItem.innerHTML = `
      <span class="iconTxt"><img class="icon" src="${element.icon}" alt="icon"> ${element.category}</span> <span><strong>${element.score}</strong>  / 100</span>`;
    });
  });
