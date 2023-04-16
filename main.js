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

const links = document.querySelectorAll(".link");
const localStorageKey = "activeLink";

links.forEach((link) => {
  link.addEventListener("click", function () {
    // إزالة الكلاس من جميع الروابط
    links.forEach((l) => l.classList.remove("activ"));
    // إضافة الكلاس إلى الرابط المحدد
    this.classList.add("activ");
    // حفظ الرابط المحدد في localStorage
    localStorage.setItem(localStorageKey, this.textContent);
  });
});

// عرض الرابط النشط السابق (إذا كان موجودًا) عند تحميل الصفحة
const activeLink = localStorage.getItem(localStorageKey);
if (activeLink) {
  links.forEach((link) => {
    if (link.textContent === activeLink) {
      link.classList.add("activ");
    }
  });
}
