let btn = document.querySelector(".top");

window.onscroll = function () {
  if (window.scrollY >= "500") {
    btn.style.display = "block";
    console.log(`${window.scrollY}`);
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
