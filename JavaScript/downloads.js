//ملف جافا سكريبت خاص بالتحميلات مثل ملفات pdf وهكذا .

const PDF_LINKS = {
  ar: "../pdf-pages/masterbation-ar.html",
  en: "../pdf-pages/masterbation-en.html",
  fr: "../pdf-pages/masterbation-fr.html",
  de: "../pdf-pages/masterbation-de.html",
  es: "../pdf-pages/masterbation-es.html",
  zh: "../pdf-pages/masterbation-zh.html",
  hi: "../pdf-pages/masterbation-hi.html",
  ja: "../pdf-pages/masterbation-ja.html",
  id: "../pdf-pages/masterbation-id.html",
  ko: "../pdf-pages/masterbation-ko.html",
  ru: "../pdf-pages/masterbation-ru.html"
};

// اللغة الحالية
const currentLang = localStorage.getItem("lang") || "en";

// زر التحميل
const downloadLink = document.getElementById("download-link");

// تغيير رابط الـ PDF حسب اللغة
downloadLink.href = PDF_LINKS[currentLang] || PDF_LINKS.en;