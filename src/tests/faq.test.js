const request = require('supertest');
const app = require('../app');

const sequelize = require('../config/database');
const FAQ = require('../models/faq');

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Reset DB before tests
});

afterAll(async () => {
  await sequelize.close(); // Close DB connection after tests
});

describe('FAQ API Tests', () => {
  let faqId;

  test('POST /faqs - Create FAQ', async () => {
    const res = await request(app)
      .post('/faqs')
      .send({
        question: 'What is Node.js?',
        answer: 'Node.js is a JavaScript runtime.',
      })
      .expect(201);

    faqId = res.body.id;
    expect(res.body.question_en).toBe('What is Node.js?');
    expect(res.body.answer).toBe('Node.js is a JavaScript runtime.');
  });

  test('GET /faqs - Fetch FAQs', async () => {
    const res = await request(app)
      .get('/faqs?lang=en')
      .expect(200);

    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].question).toBe('What is Node.js?');
  });

  test('GET /faqs?lang=hi - Fetch Translated FAQ', async () => {
    const res = await request(app)
      .get('/faqs?lang=hi')
      .expect(200);

    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].question).toBeDefined(); // Hindi translation should exist
  });
});