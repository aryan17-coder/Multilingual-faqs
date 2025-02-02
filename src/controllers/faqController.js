const FAQ = require('../models/faq');
const translateText = require('../services/translate');
const { getCachedData, setCachedData } = require('../utils/cache');

exports.getFAQs = async (req, res) => {
  const { lang = 'en' } = req.query;
  const cacheKey = `faqs:${lang}`;

  try {
    // Check Redis cache first
    const cachedData = await getCachedData(cacheKey);
    if (cachedData) return res.json(cachedData);

    // Fetch from DB
    const faqs = await FAQ.findAll();
    const translatedFaqs = faqs.map(faq => ({
      id: faq.id,
      question: faq[`question_${lang}`] || faq.question_en,
      answer: faq.answer,
    }));

    // Store in cache
    await setCachedData(cacheKey, translatedFaqs);

    res.json(translatedFaqs);
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    res.status(500).json({ error: 'Failed to fetch FAQs' });
  }
};

exports.createFAQ = async (req, res) => {
  let { question, answer } = req.body;

  try {
    // Translate question to multiple languages
    const translations = await translateText(question, ['hi', 'bn']);

    const newFAQ = await FAQ.create({
      question_en: question,
      question_hi: translations.hi,
      question_bn: translations.bn,
      answer
    });

    // Invalidate cache
    await setCachedData('faqs:en', null);
    await setCachedData('faqs:hi', null);
    await setCachedData('faqs:bn', null);

    res.status(201).json(newFAQ);
  } catch (error) {
    console.error('Error creating FAQ:', error);
    res.status(500).json({ error: 'Failed to create FAQ' });
  }
};