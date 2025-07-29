let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY === 0) {
    // المستخدم في أعلى الصفحة → نظهر التولبار بشكل طبيعي
    navbar.classList.remove('hidden');
  } else if (currentScrollY > lastScrollY) {
    // المستخدم يتحرك لأسفل → نخفي التولبار
    navbar.classList.add('hidden');
  } else if (currentScrollY < lastScrollY) {
    // المستخدم يتحرك لأعلى → نظهر التولبار
    navbar.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const nextElement = navbar.nextElementSibling;

  // تعديل العناصر بعد navbar فقط مرة واحدة حسب ارتفاعها
  if (nextElement) {
    const navbarHeight = navbar.offsetHeight;
    nextElement.style.marginTop = `${navbarHeight}px`;
  }

  // التعامل مع التمرير
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      navbar.classList.remove('hidden');
    } else if (currentScrollY > lastScrollY) {
      navbar.classList.add('hidden');
    } else if (currentScrollY < lastScrollY) {
      navbar.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
  });
});


//the smart email click to open gmail in google chrome.
document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.getElementById("smartEmailLink");

  if (emailLink) {
    emailLink.addEventListener("click", function (e) {
      setTimeout(function () {
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=af8026157@gmail.com",
          "_blank"
        );
      }, 2000);
    });
  }
});
