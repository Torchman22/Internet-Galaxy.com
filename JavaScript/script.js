document.addEventListener("DOMContentLoaded", () => {
  const normal_navbar = document.querySelector(".normal_navbar");
  const mobile_navbar = document.querySelector(".mobile_navbar");
  const progress = document.querySelector(".progress");
  const contentBelow = normal_navbar.nextElementSibling;
  const contentBelow2 = mobile_navbar.nextElementSibling;

  /*if (contentBelow) {
    const normalNavbarHeight = normal_navbar.offsetHeight;
  }*/
   //الكود الذي يقوم بعمل مسافة بمقدار ال navbar .
  if (contentBelow2) {
    const mobileNavbarHeight = mobile_navbar.offsetHeight;
    contentBelow2.style.marginTop = `${mobileNavbarHeight}px`; // ✅ إضافة المسافة
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
      if (progress) {
        if (getComputedStyle(normal_navbar).display !== "none") {
          progress.style.transform = `translateY(${normal_navbar.offsetHeight}px)`;
        } else if (getComputedStyle(mobile_navbar).display !== "none") {
          progress.style.transform = `translateY(${mobile_navbar.offsetHeight}px)`;
        }
      }
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
    if (getComputedStyle(normal_navbar).display !== "none") {
      progress.style.transform = `translateY(${normal_navbar.offsetHeight}px)`;
    } else if (getComputedStyle(mobile_navbar).display !== "none") {
      progress.style.transform = `translateY(${mobile_navbar.offsetHeight}px)`;
    }
  }

  // تفعيل الانتقال السلس للحركة
  normal_navbar.style.transition = "transform 0.3s ease";
  mobile_navbar.style.transition = "transform 0.3s ease";
  if (progress) progress.style.transition = "transform 0.3s ease, width 0.2s ease";
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



  window.addEventListener("load", () => {

  const nav = document.querySelector(".navbar-scroll");
  if (!nav) return;
  // الكود التالي يؤكد عمل التمرير مرة واحدة فقط 
  if (localStorage.getItem("swipeDone")) return;

  function waitForContent(callback) {
    const images = nav.querySelectorAll('img');
    let imagesToLoad = images.length;
    
    if (imagesToLoad === 0) {
      callback();
      return;
    }
    
    let loadedImages = 0;
    images.forEach(img => {
      if (img.complete) {
        loadedImages++;
      } else {
        img.addEventListener('load', () => {
          loadedImages++;
          if (loadedImages === imagesToLoad) callback();
        });
        img.addEventListener('error', () => {
          loadedImages++;
          if (loadedImages === imagesToLoad) callback();
        });
      }
    });
    
    setTimeout(callback, 500);
  }

  waitForContent(() => {
    
    if (nav.scrollWidth <= nav.clientWidth) return;

    const isRTL = document.documentElement.dir === "rtl";
    const hiddenWidth = nav.scrollWidth - nav.clientWidth;
    const distance = Math.min(hiddenWidth * 0.8, 350);
    const moveDistance = Math.max(distance, 80);
    const duration = 1200;
    
    // دالة للتمرير بسلاسة باستخدام scrollBy
    function smoothScrollBy(deltaX, duration) {
      const startTime = performance.now();
      const startScrollLeft = nav.scrollLeft;
      
      function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 0.5 - Math.cos(progress * Math.PI) / 2;
        
        nav.scrollLeft = startScrollLeft + (deltaX * ease);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    setTimeout(() => {
      // في LTR: deltaX موجبة (للتحرك لليمين)
      // في RTL: deltaX سالبة (للتحرك لليمين أيضاً لأن RTL معكوس)
      // أفضل حل: نجبر الحركة على أن تكون باتجاه +moveDistance بغض النظر عن RTL/LTR
      const deltaX = isRTL ? -moveDistance : moveDistance;
      
      // التحرك للأمام
      smoothScrollBy(deltaX, duration);
      
      // العودة للخلف
      setTimeout(() => {
        smoothScrollBy(-deltaX, duration);
      }, duration + 200);
      
    }, 800);
    
    // localStorage.setItem("swipeDone", "true");
  });
});
});

});




 


