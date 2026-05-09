//هذا المجلد هو المسؤول عن اتاحة الترجمات للعرض تم اضافته هنا كي يسهل التعديل على كل الصفحات مرة واحدة من هنا
// يجب اضافة كود الاستدعاء في كل صفحة        <script src="/js/hreflang.js"></script>
//عند اضافة اي لغة جديدة للموقع يجب اضافتها هنا كذلك كي يعلم جوجل بها ويضيفها للبحث


// hreflang.js - الإصدار النهائي المحسن مع noscript fallback
(function() {
    // منع التكرار
    if (window.hreflangAdded) return;
    window.hreflangAdded = true;
    
    // اللغات المدعومة
    const languages = ['ar', 'en', 'fr', 'de', 'es', 'zh', 'hi', 'ja', 'id', 'ko', 'ru'];
    
    // الحصول على الرابط الأساسي
    const baseUrl = window.location.href.split('?')[0].split('#')[0];
    
    // التحقق من التصفح المحلي
    if (baseUrl.startsWith('file://')) return;
    
    // إضافة hreflang لكل لغة
    languages.forEach(langCode => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = langCode;
        link.href = `${baseUrl}?lang=${langCode}`;
        document.head.appendChild(link);
    });
    
    // إضافة x-default (الإنجليزية كلغة افتراضية)
    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = `${baseUrl}?lang=en`;
    document.head.appendChild(xDefault);
    
    // إضافة canonical (الرابط الأساسي)
    const currentLang = document.documentElement.lang || 'en';
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = `${baseUrl}?lang=${currentLang}`;
    document.head.appendChild(canonical);
    
    // إضافة meta robots فقط إذا لم يكن موجوداً
    if (!document.querySelector('meta[name="robots"]')) {
        const robots = document.createElement('meta');
        robots.name = 'robots';
        robots.content = 'index, follow';
        document.head.appendChild(robots);
    }
    
    // إضافة fallback لـ <noscript> للمتصفحات التي لا تدعم JavaScript
    const noscript = document.createElement('noscript');
    const xDefaultNoscript = document.createElement('link');
    xDefaultNoscript.rel = 'alternate';
    xDefaultNoscript.hreflang = 'x-default';
    xDefaultNoscript.href = `${baseUrl}?lang=en`;
    noscript.appendChild(xDefaultNoscript);
    document.head.appendChild(noscript);
    
    // رسالة تصحيح (تظهر فقط في بيئة التطوير)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('🌍 Hreflang tags added for', languages.length, 'languages');
        console.log('📄 Base URL:', baseUrl);
        console.log('📋 Noscript fallback added for non-JS browsers');
    }
})();