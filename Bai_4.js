let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let info = document.getElementById("info");

save.onclick = function () {
  let profile = {
    name: nameInput.value,
    age: ageInput.value,
  };

  localStorage.setItem("myProfile", JSON.stringify(profile));

  info.innerText = "Tên: " + profile.name + " | Tuổi: " + profile.age;
};

let data = localStorage.getItem("myProfile");

if (data) {
  let profile = JSON.parse(data);

  info.innerText = "Tên: " + profile.name + " | Tuổi: " + profile.age;
}
