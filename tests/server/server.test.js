/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../../server/index');

const request = supertest(app);

expect.extend({
  toBeEither(received, a, b) {
    const pass = received === a || received === b;
    if (pass) {
      return {
        message: () => `expected ${received} to be either ${a} or ${b}`,
        pass: true,
      };
    }
    return {
      message: () => `expected ${received} to be either ${a} or ${b}`,
      pass: false,
    };
  },
});

it('gets the hostel_id from the /house/:id endpoint', async (done) => {
  const res = await request.get('/house/40/hostel');
  await expect(res.status).toBe(200);
  await expect(res.body[0].id).toBe(40);
  await expect(res.body[0].hostel_name).toBeDefined();
  await done();
});

it('gets the hostel rules when given a hostel_id', async (done) => {
  const res = await request.get('/house/40/rules');
  await expect(res.status).toBe(200);
  const rules = res.body[0];
  await expect(rules.id).toBeDefined();
  await expect(rules.check_in_start).toBeDefined();
  await expect(rules.check_out).toBeDefined();
  await expect(rules.check_in_end).toBeDefined();
  await expect(rules.kid_friendly).toBeEither(1, 0);
  await expect(rules.credit_cards).toBeEither(1, 0);
  await expect(rules.age_restriction).toBeEither(1, 0);
  await expect(rules.curfew).toBeEither(1, 0);
  await expect(rules.lock_out).toBeEither(1, 0);
  await expect(rules.non_smoking).toBeEither(1, 0);
  await expect(rules.pet_friendly).toBeEither(1, 0);
  await expect(rules.taxes_included).toBeEither(1, 0);
  await expect(rules.important_notes).toBeDefined();
  await done();
});

it('gets the hostel address when given a hostel_id', async (done) => {
  const res = await request.get('/house/40/address');
  await expect(res.status).toBe(200);
  const address = res.body[0];
  await expect(address.id).toBeDefined();
  await expect(address.street_address).toBeDefined();
  await expect(address.city).toBeDefined();
  await expect(address.state).toBeDefined();
  await expect(address.zip).toBeDefined();
  await expect(address.country).toBeDefined();
  await expect(address.latitude).toBeDefined();
  await expect(address.longitude).toBeDefined();
  await done();
});

it('gets the hostel description when given a hostel_id', async (done) => {
  const res = await request.get('/house/40/description');
  await expect(res.status).toBe(200);
  const description = res.body[0];
  await expect(description.id).toBeDefined();
  await expect(description.editorial_text).toBeDefined();
  await expect(description.description_text).toBeDefined();
  await done();
});
