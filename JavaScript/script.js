document.addEventListener("DOMContentLoaded", () => {
  const normal_navbar = document.querySelector(".normal_navbar");
  const mobile_navbar = document.querySelector(".mobile_navbar");
  const progress = document.querySelector(".progress");
  const contentBelow = normal_navbar.nextElementSibling;
  const contentBelow2 = mobile_navbar.nextElementSibling;


  if (contentBelow) {
    const normalNavbarHeight = normal_navbar.offsetHeight;
     
  }
  if (contentBelow2) {
    const normalNavbarHeight = mobile_navbar.offsetHeight;
     
  }

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    const scrollingDown = currentScrollY > lastScrollY;
    const scrollingUp = currentScrollY < lastScrollY;

    if (scrollingDown) {
      // إخفاء الشريط بتحريكه للأعلى
      normal_navbar.style.transform = `translateY(-${normal_navbar.offsetHeight}px)`;
      mobile_navbar.style.transform = `translateY(-${mobile_navbar.offsetHeight}px)`;
      if (progress) progress.style.transform = `translateY(0px)`;
    } else if (scrollingUp) {
      // إظهار الشريط بتحريكه للأسفل
      normal_navbar.style.transform = `translateY(0px)`;
      mobile_navbar.style.transform = `translateY(0px)`;
      if (progress) progress.style.transform = `translateY(${normal_navbar.offsetHeight}px)`;
      if (progress) progress.style.transform = `translateY(${mobile_navbar.offsetHeight}px)`;
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

  // عند تحميل الصفحة، ضع progress أسفل الشريط
  if (progress) {
    progress.style.transform = `translateY(${normal_navbar.offsetHeight,mobile_navbar.offsetHeight}px)`;
  }

  // تفعيل الانتقال السلس للحركة
  normal_navbar.style.transition = "transform 0.3s ease";
  mobile_navbar.style.transition = "transform 0.3s ease";
  if (progress) progress.style.transition = "transform 0.3s ease, width 0.2s ease";
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





function autoScrollNavbarRepeatedly() {
  const navbar = document.querySelector('.mobile_navbar');
  if (!navbar || navbar.scrollWidth <= navbar.clientWidth) return;

  let direction = 1;
  let count = 0;
  const maxCycles = 3; // عدد مرات التكرار

  const interval = setInterval(() => {
    const scrollAmount = direction === 1 ? 120 : 0;
    navbar.scrollTo({ left: scrollAmount, behavior: 'smooth' });

    direction *= -1; // عكس الاتجاه
    count++;

    if (count >= maxCycles * 2) clearInterval(interval);
  }, 1500); // كل 1.5 ثانية يتحرك
}

function switchNavbar() {
  const normalNavbar = document.querySelector('.normal_navbar');
  const mobileNavbar = document.querySelector('.mobile_navbar');

  if (window.innerWidth <= 768) {
    if (normalNavbar) normalNavbar.style.display = 'none';
    if (mobileNavbar) {
      mobileNavbar.style.display = 'flex';
      setTimeout(autoScrollNavbarRepeatedly, 500); // بعد الظهور بقليل
    }
  } else {
    if (normalNavbar) normalNavbar.style.display = 'flex';
    if (mobileNavbar) mobileNavbar.style.display = 'none';
  }
}

window.addEventListener('DOMContentLoaded', switchNavbar);
window.addEventListener('resize', switchNavbar);



