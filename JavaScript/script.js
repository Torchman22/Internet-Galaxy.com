document.addEventListener("DOMContentLoaded", () => {
  const normal_navbar = document.querySelector(".normal_navbar");
  const mobile_navbar = document.querySelector(".mobile_navbar");
  const progress = document.querySelector(".progress");

  const updateProgressPosition = () => {
    if (progress) {
      const activeNavbar =
        getComputedStyle(normal_navbar).display !== "none"
          ? normal_navbar
          : mobile_navbar;
      progress.style.transform = `translateY(${activeNavbar.offsetHeight}px)`;
    }
  };

  const updateProgressWidth = () => {
    if (progress) {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.floor((scrollTop / docHeight) * 100);
      progress.style.width = `${scrollPercent}%`;
    }
  };

  // تعيين موضع progress تحت الشريط عند تحميل الصفحة
  updateProgressPosition();

  // تفعيل الانتقال السلس
  normal_navbar.style.transition = "transform 0.3s ease";
  mobile_navbar.style.transition = "transform 0.3s ease";
  if (progress) progress.style.transition = "transform 0.3s ease, width 0.2s ease";

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;
    const scrollingUp = currentScrollY < lastScrollY;

    if (scrollingDown) {
      normal_navbar.style.transform = `translateY(-100%)`;
      mobile_navbar.style.transform = `translateY(-100%)`;
      if (progress) progress.style.transform = `translateY(0px)`;
    } else if (scrollingUp) {
      normal_navbar.style.transform = `translateY(0px)`;
      mobile_navbar.style.transform = `translateY(0px)`;
      updateProgressPosition();
    }

    updateProgressWidth();
    lastScrollY = currentScrollY;
  });

  window.addEventListener("resize", updateProgressPosition);
});


//كود التعديل على navbar في الحالة الطبيعية بدون وجود قائمة لغات 
document.addEventListener("DOMContentLoaded", () => {
  const normal_navbar = document.querySelector(".navbar");
  const progress = document.querySelector(".progress");

  // ✅ أضف هذا الجزء لعمل إزاحة للمحتوى
  const contentBelow = normal_navbar.nextElementSibling;
  if (contentBelow) {
    const navbarHeight = normal_navbar.offsetHeight;
    contentBelow.style.marginTop = `${navbarHeight}px`;
  }

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;
    const scrollingUp = currentScrollY < lastScrollY;

    if (scrollingDown) {
      normal_navbar.style.transform = `translateY(-${normal_navbar.offsetHeight}px)`;
      if (progress) progress.style.transform = `translateY(0px)`;
    } else if (scrollingUp) {
      normal_navbar.style.transform = `translateY(0px)`;
      if (progress) progress.style.transform = `translateY(${normal_navbar.offsetHeight}px)`;
    }

    lastScrollY = currentScrollY;

    // تحديث شريط التقدم
    if (progress) {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.floor((scrollTop / docHeight) * 100);
      progress.style.width = `${scrollPercent}%`;
    }
  });

  // عند تحميل الصفحة، اضبط مكان progress
  if (progress) {
    progress.style.transition = "transform 0.3s ease, width 0.2s ease";
    progress.style.transform = `translateY(${normal_navbar.offsetHeight}px)`;
  }

  normal_navbar.style.transition = "transform 0.3s ease";
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


//كود التبديل بين الكودان عند تغير حجم الشاشة 
function switchNavbar() {
  const normalNavbar = document.querySelector('.normal_navbar');
  const mobileNavbar = document.querySelector('.mobile_navbar');

  if (window.innerWidth <= 768) {
    if (normalNavbar) normalNavbar.style.display = 'none';
    if (mobileNavbar) mobileNavbar.style.display = 'flex';
  } else {
    if (normalNavbar) normalNavbar.style.display = 'flex';
    if (mobileNavbar) mobileNavbar.style.display = 'none';
  }
}

// نفذها عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', switchNavbar);
// نفذها عند تغيير حجم الشاشة
window.addEventListener('resize', switchNavbar);


         //كود التحكم في القائمة المنسدلة للغات 
document.addEventListener("DOMContentLoaded", () => {
  const langButton = document.querySelector(".lang-menu2");
  const dropdown = langButton.querySelector("ul");

  // خصائص ثابتة
  dropdown.style.position = "fixed";
  dropdown.style.display = "none";
  dropdown.style.zIndex = "99999";

  // تبديل الإظهار عند الضغط
  langButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const isVisible = dropdown.style.display === "block";

    if (isVisible) {
      dropdown.style.display = "none";
    } else {
      const rect = langButton.getBoundingClientRect();
      dropdown.style.left = rect.left + "px";
      dropdown.style.top = rect.bottom + "px";
      dropdown.style.display = "block";
    }
  });

  // إغلاق عند النقر خارج الزر والقائمة
  document.addEventListener("click", (e) => {
    if (!langButton.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

  // إغلاق عند التمرير الرأسي أو الأفقي على النافذة
  window.addEventListener("scroll", () => {
    dropdown.style.display = "none";
  }, { passive: true });

  // 🔵 إضافة: إغلاق عند التمرير داخل أي عنصر لديه overflow
  const scrollableParents = document.querySelectorAll(".navbar-scroll, .some-other-scroll-container");
  scrollableParents.forEach(parent => {
    parent.addEventListener("scroll", () => {
      dropdown.style.display = "none";
    }, { passive: true });
  });
});




 


