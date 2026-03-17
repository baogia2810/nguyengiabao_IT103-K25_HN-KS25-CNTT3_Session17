let count = localStorage.getItem("visitCount");

if (count == null) {
  count = 1;
} else {
  count = Number(count) + 1;
}

localStorage.setItem("visitCount", count);

document.getElementById("visit").innerText =
  "Bạn đã truy cập trang này " + count + " lần";
