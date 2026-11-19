window.App = {
  showToast(message){
    const old=document.querySelector(".toast"); if(old) old.remove();
    const toast=document.createElement("div"); toast.className="toast"; toast.textContent=message;
    document.body.appendChild(toast); setTimeout(()=>toast.remove(),2500);
  },
  setLanguage(){
    const btn=document.getElementById("language-toggle");
    if(!btn)return;
    btn.addEventListener("click",()=>{
      const isArabic=document.documentElement.lang==="ar";
      document.documentElement.lang=isArabic?"en":"ar";
      document.documentElement.dir=isArabic?"ltr":"rtl";
      btn.textContent=isArabic?"عربي":"EN";
      this.showToast(isArabic?"Language switched to English (demo)":"تم اختيار العربية (تجريبي)");
    });
  },
  init(){this.setLanguage();}
};
App.init();