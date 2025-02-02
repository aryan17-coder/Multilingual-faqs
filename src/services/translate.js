const translate = require('@vitalets/google-translate-api');

const translateText = async (text, langs) => {
  const translations = {};
  for (const lang of langs) {
    try {
      const res = await translate(text, { to: lang });
      translations[lang] = res.text;
    } catch (error) {
      console.error(`Translation failed for ${lang}:`, error);
      translations[lang] = null;
    }
  }
  return translations;
};

module.exports = translateText;