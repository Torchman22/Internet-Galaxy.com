document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const progress = document.querySelector(".progress");
  const contentBelow = navbar.nextElementSibling;
  
  if (contentBelow) {
    const navbarHeight = navbar.offsetHeight;
    contentBelow.style.marginTop = `${navbarHeight}px`;
  }

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    
    const scrollingDown = currentScrollY > lastScrollY;
    const scrollingUp = currentScrollY < lastScrollY;

    if (scrollingDown) {
      navbar.classList.add("hidden");
      if (progress) progress.style.transform = `translateY(0px)`;
    } else if (scrollingUp) {
      navbar.classList.remove("hidden");
      if (progress) progress.style.transform = `translateY(${navbar.offsetHeight}px)`;
    }

    lastScrollY = currentScrollY;

    // تحديث شريط التقدم إن وُجد
    if (progress) {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.floor((scrollTop / docHeight) * 100);
      progress.style.width = `${scrollPercent}%`;
    }
  });

  // عند تحميل الصفحة، ضع progress تحت navbar
  if (progress) {
    progress.style.transform = `translateY(${navbar.offsetHeight}px)`;
  }
});                                                                                                              //end



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
