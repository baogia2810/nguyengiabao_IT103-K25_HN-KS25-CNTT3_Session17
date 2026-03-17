let input = document.getElementById("nameInput");
let btn = document.getElementById("saveBtn");
let text = document.getElementById("text");

btn.onclick = function () {
  let name = input.value;
  localStorage.setItem("userName", name);
  text.innerText = "Xin chào, " + name + "!";
};

let saved = localStorage.getItem("userName");

if (saved) {
  text.innerText = "Xin chào, " + saved + "!";
}
