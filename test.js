const app = require('./server/index.js') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

var enzyme = require('enzyme');

import regeneratorRuntime from "regenerator-runtime";

import Title from './client/src/components/Title';

describe('Title', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Title debug />);

    expect(component).toMatchSnapshot();
  });
});

it("Testing to see if Jest works", () => {
  expect(1).toBe(1);
});

it('Id enpoint returns object id property', async (done) => {
  // Sends GET Request to /test endpoint
  const res = await request.get('/id?7')
  expect(res.status).toBe(200)
  expect(res.body).toHaveProperty('7');
  done();
})