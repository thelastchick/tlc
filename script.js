const translations = {
  fa: {
    direction: "rtl",
    title: "آخرین جوجه",
    about: "درباره آخرین جوجه"
  },

  ar: {
    direction: "rtl",
    title: "آخر كتكوت",
    about: "عن آخر كتكوت"
  },

  en: {
    direction: "ltr",
    title: "THE LAST CHICK",
    about: "About The Last Chick"
  }
};


function changeLanguage(lang){

  document.documentElement.dir = translations[lang].direction;

  document.querySelector("h1").innerText =
  translations[lang].title;

  document.querySelector("#about h2").innerText =
  translations[lang].about;

}
