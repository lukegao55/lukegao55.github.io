(() => {
  const storageKey = "ly-origin-language";
  const validLanguages = new Set(["en", "zh"]);
  const params = new URLSearchParams(window.location.search);
  const queryLanguage = params.get("lang");

  function getStoredLanguage() {
    try {
      const language = window.localStorage.getItem(storageKey);
      return validLanguages.has(language) ? language : null;
    } catch {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch {
      // Storage may be unavailable in private or restricted browsing contexts.
    }
  }

  const browserLanguage = navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
  const initialLanguage = validLanguages.has(queryLanguage)
    ? queryLanguage
    : getStoredLanguage() ?? browserLanguage;

  function setLanguage(language) {
    if (!validLanguages.has(language)) return;
    document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
    document.querySelectorAll("[data-lang]").forEach((element) => {
      element.hidden = element.dataset.lang !== language;
    });
    document.querySelectorAll("[data-switch-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.switchLang === language));
    });
    saveLanguage(language);
  }

  document.querySelectorAll("[data-switch-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.switchLang));
  });

  setLanguage(initialLanguage);
})();
