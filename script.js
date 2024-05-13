let dogList = document.querySelector("#dog-names");
let fetchButton = document.querySelector("#fetch-btn");
let card = document.querySelector("#box");

// let imageUrl = "https://dog.ceo/api/breed/${breedName}/image/random";
fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => res.json())
  .then((data) => {
    const dogNames = Object.keys(data.message);
    dogNames.forEach((breedName) => {
      dogList.innerHTML += ` <option value="${breedName}" class="text-center">${breedName}</option>`;
    });
  })
  .catch((err) => console.log(err));

fetchButton.addEventListener("click", function () {
  let breedName = dogList.value;
  console.log(breedName);
  fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
    .then((res) => res.json())
    .then((img) => {
      card.innerHTML = `<img src="${img.message}" alt="${breedName}" >`;
    })
    .catch((err) => err);
});
