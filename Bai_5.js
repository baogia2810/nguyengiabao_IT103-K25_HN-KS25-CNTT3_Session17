let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let info = document.getElementById("info");
let saveBtn = document.getElementById("save");
let deleteBtn = document.getElementById("deleteBtn");

saveBtn.onclick = function () {
  let profile = {
    name: nameInput.value,
    age: ageInput.value,
  };

  localStorage.setItem("myProfile", JSON.stringify(profile));

  info.innerText = "Tên: " + profile.name + " | Tuổi: " + profile.age;
};

deleteBtn.onclick = function () {
  localStorage.removeItem("myProfile");

  info.innerText = "Chưa có thông tin cá nhân";
};

let data = localStorage.getItem("myProfile");

if (data) {
  let profile = JSON.parse(data);

  info.innerText = "Tên: " + profile.name + " | Tuổi: " + profile.age;
}
