const aco = require('./lib/checkup').default;

const fetch = require('node-fetch');
const nock = require('nock');

const host = "http://localhost:3030";
const path = "/healthcheck";

nock(host)
  .get(path)
  .reply(200, { test: 100 });

fetch(host + path).then(res => console.log(res));

