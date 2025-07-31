document.addEventListener('DOMContentLoaded', () => {                               //start
  const navbar = document.querySelector('.navbar');
  const progress = document.querySelector('.progress');
  const contentBelow = navbar.nextElementSibling;

  if (contentBelow) {
    const navbarHeight = navbar.offsetHeight;
    contentBelow.style.marginTop = `${navbarHeight}px`;
     
  }

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      navbar.classList.remove('hidden');
      progress.style.transform = `translateY(${navbar.offsetHeight}px)`;
    } else if (currentScrollY > lastScrollY) {
      navbar.classList.add('hidden');
      progress.style.transform = `translateY(0px)`;
    } else if (currentScrollY < lastScrollY) {
      navbar.classList.remove('hidden');
      progress.style.transform = `translateY(${navbar.offsetHeight}px)`;
    }

    lastScrollY = currentScrollY;

    // تحديث نسبة التقدم
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.floor((scrollTop / docHeight) * 100);
    progress.style.width = `${scrollPercent}%`;
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const progress = document.querySelector(".progress");

  function updateProgressBar() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progress.style.width = `${scrollPercent}%`;
  }

  window.addEventListener("scroll", updateProgressBar);
});                                                                                                               //end



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
