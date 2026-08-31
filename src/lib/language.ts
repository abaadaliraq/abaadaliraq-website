export type Lang = "en" | "ar" | "ku";

export const DEFAULT_LANGUAGE: Lang = "ar";
export const LANGUAGE_STORAGE_KEY = "abaad-language-v2";
export const LEGACY_LANGUAGE_STORAGE_KEY = "abaad_lang";

export function isSupportedLanguage(value: string | null): value is Lang {
  return value === "en" || value === "ar" || value === "ku";
}

export function isRtlLanguage(lang: Lang) {
  return lang === "ar" || lang === "ku";
}

export function getInitialLanguage(): Lang {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  try {
    const savedLang = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isSupportedLanguage(savedLang) ? savedLang : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export function ensureStoredLanguage(): Lang {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  try {
    const savedLang = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (isSupportedLanguage(savedLang)) {
      return savedLang;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, DEFAULT_LANGUAGE);
  } catch {
    return DEFAULT_LANGUAGE;
  }

  return DEFAULT_LANGUAGE;
}

export function persistLanguage(lang: Lang) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    return;
  }
}

export function syncDocumentLanguage(lang: Lang) {
  const root = document.documentElement;

  root.lang = lang;
  root.dir = isRtlLanguage(lang) ? "rtl" : "ltr";
}
