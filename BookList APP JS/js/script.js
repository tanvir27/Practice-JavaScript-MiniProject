const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

btn.addEventListener("click", function (x) {
  // console.log("hello"); // click korle show korbe btw beshikkhn thakbe na , tai parameter pass korte hbe funmction a

  x.preventDefault();
  //   console.log("new hello") // akhn thakbe

  if (title.value == "" && author.value == "" && year.value == "") {
    alert("please Fill Up all required Field");
  } else {
    const newRow = document.createElement("tr");
    // creating new title
    const newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // creating new author
    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // creating new year
    const newYear = document.createElement("th");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    bookList.appendChild(newRow);
  }
});
