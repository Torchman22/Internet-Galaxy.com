document.addEventListener("DOMContentLoaded", async () => {    
 
  const currentLangText = document.getElementById("current-lang");
  const currentLangMobile = document.getElementById("current-lang-mobile");    
 
  const LANG_CONFIG = {     
    ar: { name: "العربية", dir: "rtl", font: "'Cairo', sans-serif" },     
    en: { name: "English", dir: "ltr", font: "'Roboto', sans-serif" },     
    fr: { name: "Français", dir: "ltr", font: "'Poppins', sans-serif" },     
    de: { name: "Deutsch", dir: "ltr", font: "'Roboto', sans-serif" },     
    es: { name: "Español", dir: "ltr", font: "'Poppins', sans-serif" },  
    zh: { name: "中文", dir: "ltr", font: "'Noto Sans SC', sans-serif" },  
    hi: { name: "हिन्दी", dir: "ltr", font: "'Noto Sans Devanagari', sans-serif" },  
    ja: { name: "日本語", dir: "ltr", font: "'Noto Sans JP', sans-serif" },  
    id: { name: "Indonesia", dir: "ltr", font: "'Poppins', sans-serif" },
    ko: { name: "한국어", dir: "ltr", font: "'Noto Sans KR', sans-serif" },
    ru: { name: "Русский", dir: "ltr", font: "'Roboto', sans-serif" }
  };  
 
  const langMenu = document.querySelector(".lang-menu");  
  const langMenu2 = document.querySelector(".lang-menu2");  // ⭐ NEW  
 
  // 🌍 تحديد اللغة حسب IP 
  async function detectLanguageByIP() { 
    try { 
      const res = await fetch("https://ipapi.co/json/").catch(() => null); 
      const data = await res.json(); 
      const country = data.country_code; 
      const map = { 
        EG: "ar", SA: "ar", AE: "ar", IQ: "ar", KW: "ar", QA: "ar", 
        US: "en", GB: "en", CA: "en", AU: "en", 
        FR: "fr", DE: "de", ES: "es", 
        CN: "zh", IN: "hi", JP: "ja", ID: "id",
        KR: "ko", RU: "ru"
      }; 
      return map[country] || "en"; 
    } catch (e) { 
      return "en"; 
    } 
  } 

  function applyLanguage(lang) {    
    const config = LANG_CONFIG[lang] || LANG_CONFIG.en;    
 
    localStorage.setItem("lang", lang);    
    document.documentElement.lang = lang;    
 
    // تحديث URL دون إعادة تحميل الصفحة (لـ SEO)
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);

    //document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr"; 
    //الكود التالي هو كود لجعل اللغات التي تظهر من اليمين لكل اللغات التي ستحتاجها عند اضافتها بدلا من الكود السابق 
    //لأنك لو أضفت:الفارسيةالعبريةالأردية موقعك سيكسر مباشرة بدون هذا التعديل 
    const RTL_LANGS = ["ar", "fa", "he", "ur"];
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";  
 
    document.documentElement.style.setProperty("--app-font", config.font);    
 
    // ⭐ NEW - خاص بالتعديل على كل لغة في الصفحات بشكل منفصل 
    document.body.className = "";
    document.body.classList.add(`lang-${lang}`);

    if (langMenu) {   
      if (document.documentElement.dir === "ltr") {   
        langMenu.style.marginLeft = "auto";   
        langMenu.style.marginRight = "0";   
      } else {   
        langMenu.style.marginLeft = "0";   
        langMenu.style.marginRight = "auto";   
      }   
    }    
 
    const BASE_PATH = window.location.hostname.includes("github.io")
  ? "/Internet-Galaxy.com"
  : "";

fetch(`${BASE_PATH}/locales/${lang}.json`)    
      .then(res => res.json())    
      .then(data => {    
        document.querySelectorAll("[data-lang]").forEach(el => {    
          const key = el.dataset.lang;    
          if (data[key]) {    
            
          if (el.tagName === "INPUT") {  
            el.placeholder = data[key];  
          } else {  
            el.innerHTML = data[key]; // ⭐ يفضل innerHTML لدعم <br> و HTML داخل ملفات JSON
          }
 
          }    
        });    

        // ⭐ تحديث روابط التحميل حسب اللغة
    updateDownloadLinks(lang);

    // ========== إضافة ربط الملف الإضافي ==========
        // محاولة استدعاء دالة التحديث من الملف الإضافي (إذا وجدت) - خاص باضافة قسم التحميل
        // ده اللي بيربط تغيير اللغة بصفحة downloads.js عشان تغير الروابط حسب اللغة
        if (typeof window.updateDownloadLinks === "function") {
            window.updateDownloadLinks(lang);
        } else if (typeof updateDownloadLinks === "function") {
            updateDownloadLinks(lang);
        }

      })    

      .catch(err => console.log("Language error:", err));    
 
// تحديث كلا العنصرين (النسخة العادية والموبايل)
    if (currentLangText) {    
      currentLangText.textContent = config.name;    
      currentLangText.classList.remove("en","ar","fr","de","es","zh","hi","ja","id","ko","ru"); 
      currentLangText.classList.add(lang); 
    }
    
    // نفس الشيء للنسخة الموبايل
    if (currentLangMobile) {    
      currentLangMobile.textContent = config.name;    
      currentLangMobile.classList.remove("en","ar","fr","de","es","zh","hi","ja","id","ko","ru"); 
      currentLangMobile.classList.add(lang); 
    }    
  }       
 
  // ⭐ تعديل: تحديد اللغة من URL parameter أولاً
  const urlParams = new URLSearchParams(window.location.search);
  let urlLang = urlParams.get('lang');
  
  let savedLang = localStorage.getItem("lang");
  
  // إذا كان هناك لغة في URL، استخدمها وحدث localStorage
  if (urlLang && LANG_CONFIG[urlLang]) {
    savedLang = urlLang;
    localStorage.setItem("lang", savedLang);
  } 
  // إذا لم توجد لغة في URL ولا في localStorage، استخدم IP
  else if (!savedLang) { 
    savedLang = await detectLanguageByIP(); 
  }
 
  document.querySelectorAll("[data-set-lang]").forEach(btn => {    
    btn.addEventListener("click", (e) => {    
      e.preventDefault();    
      applyLanguage(btn.dataset.setLang);    
    });    
  });    
 
  applyLanguage(savedLang);    
});
