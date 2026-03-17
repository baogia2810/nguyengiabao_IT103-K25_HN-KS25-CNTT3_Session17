let theme = localStorage.getItem("theme");

if (theme == null) {
  theme = "light";
}

if (theme === "dark") {
  document.body.style.background = "black";
  document.body.style.color = "white";
}

document.getElementById("btn").onclick = function () {
  if (theme === "light") {
    theme = "dark";
    document.body.style.background = "black";
    document.body.style.color = "white";
  } else {
    theme = "light";
    document.body.style.background = "white";
    document.body.style.color = "black";
  }

  localStorage.setItem("theme", theme);
};
