//التعديل على زر التحميل في صفحة wait page.

document.addEventListener("DOMContentLoaded", function () {
  const circle = document.querySelector(".progress-ring__circle");
  const text = document.querySelector(".progress-text");
  const downloadLink = document.getElementById("download-link");

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = circumference;

  let progress = 0;
  const duration = 10; // مدة التحميل بالثواني
  const intervalTime = (duration * 1000) / 100;

  const interval = setInterval(() => {
    progress++;
    if (progress > 100) progress = 100;

    const offset = circumference - (progress / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    text.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      downloadLink.style.display = "inline-block"; // إظهار الزر
      // الرقم 100% سيبقى ثابت
    }
  }, intervalTime);
});



document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".article-box-link");

  // استرجاع الروابط التي تمت زيارتها
  const visitedArticles = JSON.parse(localStorage.getItem("visitedArticles") || "[]");

  // تطبيق التنسيق على المقالات التي تمت زيارتها سابقًا
  visitedArticles.forEach(id => {
    const link = document.querySelector(`.article-box-link[data-id="${id}"]`);
    if (link) link.classList.add("visited");
  });

  // عند الضغط على أي مقال
  links.forEach(link => {
    link.addEventListener("click", function () {
      const id = link.getAttribute("data-id");

      // إذا لم تكن موجودة أضفها واحفظها
      if (!visitedArticles.includes(id)) {
        visitedArticles.push(id);
        localStorage.setItem("visitedArticles", JSON.stringify(visitedArticles));
      }

      // إضافة الكلاس مباشرة ليظهر اللون فورًا
      link.classList.add("visited");
    });
  });
});


